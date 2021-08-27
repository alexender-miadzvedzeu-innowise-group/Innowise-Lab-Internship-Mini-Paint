import React, { useRef, useEffect } from 'react';
import classes from './Canvas.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from '../../helpers/isEmptyObj';
import { setCanvasSizeAC, setMainCtxAC, setMouseDownPositionAC, setSubCtxAC } from '../../actions/editor';
import { State } from '../../types/types';

const Canvas: React.FunctionComponent = () => {
  
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const subCanvasRef = useRef<HTMLCanvasElement | null>(null);
  
  const dispatch = useDispatch();
  const setCanvasSize = (windowsSize: object) => {
    dispatch(setCanvasSizeAC(windowsSize))
  }
  const setMouseDownPosition = (mouseDownPosition: object) => {
    dispatch(setMouseDownPositionAC(mouseDownPosition))
  }
  const setMainCtx = (context: any) => {
    dispatch(setMainCtxAC(context))
  }
  const setSubCtx = (context: any) => {
    dispatch(setSubCtxAC(context))
  }

  const lineColor = useSelector((state: any) => state.editorReducer.lineColor,)
  const lineWeight = useSelector((state: any) => state.editorReducer.lineWeight)
  const instrumentName = useSelector((state: any) => state.editorReducer.instrumentName)
  const canvasSize = useSelector((state: any) => state.editorReducer.canvasSize)
  const mouseDownPosition = useSelector((state: any) => state.editorReducer.mouseDownPosition)
  const mainCtx = useSelector((state: State) => state.editorReducer.mainCtx)
  const subCtx = useSelector((state: any) => state.editorReducer.subCtx)

  useEffect(() => {
    if (canvasRef.current && subCanvasRef.current && wrapperRef.current?.clientWidth) {
      setCanvasSize({width: wrapperRef.current.offsetWidth, height: wrapperRef.current.offsetHeight})
      const mainCtx = canvasRef.current.getContext('2d');
      const subCtx = subCanvasRef.current.getContext('2d');
      setMainCtx(mainCtx);
      setSubCtx(subCtx);
    }
  }, [])

  useEffect(() => {
    if (canvasRef.current && subCanvasRef.current && wrapperRef.current?.clientWidth) {
      canvasRef.current.width = subCanvasRef.current.width = canvasSize.width;
      canvasRef.current.height = subCanvasRef.current.height = canvasSize.height;
    }
  }, [canvasSize])

  const onMouseDown = (e: any) => {
    //@ts-ignore
    // console.log(`clientY=${e.clientY} pageY=${e.pageY} wrapperRef.current.offsetTop=${wrapperRef.current.offsetTop}`);
    if (instrumentName) setMouseDownPosition({x: e.clientX, y: e.clientY});
  }

  const onMouseMove = (e: any) => {
    if (!isEmpty(mouseDownPosition) && wrapperRef.current && canvasRef.current) {
      mainCtx.strokeStyle = lineColor;
      mainCtx.lineWidth = lineWeight;
      mainCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      switch (instrumentName) {
        case 'rectangle':
          mainCtx.strokeRect(
            mouseDownPosition.x - wrapperRef.current.offsetLeft, 
            mouseDownPosition.y - wrapperRef.current.offsetTop, 
            e.clientX - mouseDownPosition.x, 
            e.clientY - mouseDownPosition.y
          )
          mainCtx.stroke(); 
          break;
        case 'circle':
          mainCtx.beginPath();
          mainCtx.arc(
            mouseDownPosition.x - wrapperRef.current.offsetLeft, 
            mouseDownPosition.y - wrapperRef.current.offsetTop, 
            Math.sqrt((e.clientX - mouseDownPosition.x) ** 2 + (e.clientY - mouseDownPosition.y) ** 2), 
            0,
            Math.PI*2,
            true
          );
          mainCtx.stroke(); 
          break;
        case 'line':
          mainCtx.beginPath(); 
          mainCtx.moveTo(
            mouseDownPosition.x - wrapperRef.current.offsetLeft, 
            mouseDownPosition.y - wrapperRef.current.offsetTop
          );
          mainCtx.lineTo(
            e.clientX - wrapperRef.current.offsetLeft,
            e.clientY - wrapperRef.current.offsetTop
          );
          mainCtx.stroke();
          break;
        case 'pencil':
          
          break
        default:
          break;
      }
    }
  }

  const onMouseUp = (e: any) => {
    subCtx.drawImage(canvasRef.current, 0, 0);
    setMouseDownPosition({})
  }

  return(
    <div className={classes.wrapper} ref={wrapperRef}>
      <canvas ref={subCanvasRef} className={classes.canvas}></canvas>
      <canvas onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} ref={canvasRef} className={classes.canvas}></canvas>
    </div>
  )
}

export default Canvas