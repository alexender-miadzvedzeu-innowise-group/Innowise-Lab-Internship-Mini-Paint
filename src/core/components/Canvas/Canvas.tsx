import React, { useRef, useEffect } from 'react';
import classes from './Canvas.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from '../../helpers/isEmptyObj';
import { setCanvasSizeAC, setMainCtxAC, setMouseDownPositionAC, setSubCtxAC } from '../../reducers/editorReducer';
import { State, Context } from '../../types/types';

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
  const setMainCtx = (context: object) => {
    dispatch(setMainCtxAC(context))
  }
  const setSubCtx = (context: object) => {
    dispatch(setSubCtxAC(context))
  }
  const lineColor = useSelector((state: State) => state.editorReducer.lineColor,)
  const lineWeight = useSelector((state: State) => state.editorReducer.lineWeight)
  const instrumentName = useSelector((state: State) => state.editorReducer.instrumentName)
  const canvasSize = useSelector((state: State) => state.editorReducer.canvasSize)
  const mouseDownPosition = useSelector((state: State) => state.editorReducer.mouseDownPosition)
  const mainCtx = useSelector((state: State) => state.editorReducer.mainCtx)
  const subCtx = useSelector((state: State) => state.editorReducer.subCtx)

  useEffect(() => {
    if (canvasRef.current && subCanvasRef.current && wrapperRef.current?.clientWidth) {
      setCanvasSize({width: wrapperRef.current.offsetWidth, height: wrapperRef.current.offsetHeight})
      const mainCtx = canvasRef.current.getContext('2d');
      const subCtx = subCanvasRef.current.getContext('2d');
          //@ts-ignore

      setMainCtx(mainCtx);
          //@ts-ignore

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
    console.log(`clientY=${e.clientY} pageY=${e.pageY} wrapperRef.current.offsetTop=${wrapperRef.current.offsetTop}`);
    // console.log(e);
    //@ts-ignore
    if (instrumentName) setMouseDownPosition({x: e.clientX, y: e.clientY});
  }
  
  const onMouseMove = (e: any) => {
    if (!isEmpty(mouseDownPosition) && wrapperRef.current && canvasRef.current) {
          //@ts-ignore

      mainCtx.strokeStyle = lineColor;
    //@ts-ignore

      mainCtx.lineWidth = lineWeight;
    //@ts-ignore

      mainCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      switch (instrumentName) {
        case 'rectangle':
    //@ts-ignore

          mainCtx.strokeRect(
                //@ts-ignore

            mouseDownPosition.x - wrapperRef.current.offsetLeft, 
                //@ts-ignore

            mouseDownPosition.y - wrapperRef.current.offsetTop, 
                //@ts-ignore

            e.clientX - mouseDownPosition.x, 
                //@ts-ignore

            e.clientY - mouseDownPosition.y
          )
                //@ts-ignore

          mainCtx.stroke(); 
          break;
        case 'circle':
              //@ts-ignore

          mainCtx.beginPath();
              //@ts-ignore

          mainCtx.arc(
                //@ts-ignore

            mouseDownPosition.x - wrapperRef.current.offsetLeft, 
                //@ts-ignore

            mouseDownPosition.y - wrapperRef.current.offsetTop, 
                //@ts-ignore

            Math.sqrt((e.clientX - mouseDownPosition.x) ** 2 + (e.clientY - mouseDownPosition.y) ** 2), 
            0,
            Math.PI*2,
            true
          );
              //@ts-ignore

          mainCtx.stroke(); 
          break;
        case 'line':
              //@ts-ignore

          mainCtx.beginPath(); 
              //@ts-ignore

          mainCtx.moveTo(
                //@ts-ignore

            mouseDownPosition.x - wrapperRef.current.offsetLeft, 
                //@ts-ignore

            mouseDownPosition.y - wrapperRef.current.offsetTop
          );
              //@ts-ignore

          mainCtx.lineTo(
            e.clientX - wrapperRef.current.offsetLeft,
            e.clientY - wrapperRef.current.offsetTop
          );
              //@ts-ignore

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
        //@ts-ignore

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