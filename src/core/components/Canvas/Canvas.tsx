import React, { useRef, useState, useEffect } from 'react';
import classes from './Canvas.module.css';
import { connect } from 'react-redux';
import { isEmpty } from '../../helpers/isEmptyObj';

const Canvas: React.FunctionComponent = ({ instrumentName, lineColor, lineWeight }:any) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [ctx, setCTX] = useState<object | null>({});
  const [posStart, setPosStart] = useState<object | null>({});

  useEffect(() => {
    if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth < 762 ? window.innerWidth* 0.8 : 762;
        canvasRef.current.height = 300;
      const ctx = canvasRef.current.getContext('2d');
      setCTX(ctx);
    }
  }, [])

  const onMouseDown = (e: any) => {
    console.log(e.clientX, e.clientY);
    if (instrumentName) setPosStart((posStart)=> ({...posStart, x: e.clientX, y: e.clientY}));
  }
  const onMouseUp = (e: any) => {
    if (!isEmpty(posStart)) {
      switch (instrumentName) {
        case 'rectangle':
          // @ts-ignore: Object is possibly 'null'.
          ctx.strokeStyle = lineColor;
          // @ts-ignore: Object is possibly 'null'.
          ctx.lineWidth = lineWeight;
          // @ts-ignore: Object is possibly 'null'.
          ctx.strokeRect(posStart.x - 95, posStart.y - 190, e.clientX - posStart.x, e.clientY - posStart.y,)
          break;
      
        default:
          break;
      }
    }
  }

  return(
    <div className={classes.wrapper}>
      <canvas onMouseDown={onMouseDown} onMouseUp={onMouseUp} ref={canvasRef} id={classes.canvas}></canvas>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  lineColor: state.editorReducer.lineColor,
  lineWeight: state.editorReducer.lineWeight,
  instrumentName: state.editorReducer.instrumentName
})

export default connect(mapStateToProps, null)(Canvas)