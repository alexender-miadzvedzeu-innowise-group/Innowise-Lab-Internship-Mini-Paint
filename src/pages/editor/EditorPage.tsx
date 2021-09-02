import React from 'react';
import classes from './EditorPage.module.css';
import { fadeIn, fadeInDown } from 'react-animations';
import Canvas from '../../core/components/Canvas/Canvas';
import Radium from 'radium';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import CreateIcon from '@material-ui/icons/Create';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { setInstrumentAC, setLineColorAC, setLineWeightAC, setDataUrlAC, openStarPropWindowsAC } from '../../core/actions/editor';
import Button from '@material-ui/core/Button';
import { State } from '../../core/types/types';
import { getCookie } from '../../core/helpers/getCookie'
import styled, { keyframes } from 'styled-components';

const flashAnimation = keyframes`${fadeInDown}`;
const FlashDiv = styled.div`animation: 1s ${flashAnimation};`;

interface Istyles {
  fadeIn: any
}

const styles: Istyles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

const EditorPage: React.FunctionComponent = () => {

  const dispatch = useDispatch();
  const setLineColor = (lineColor: string) => {
    dispatch(setLineColorAC(lineColor))
  }
  const setLineWeight = (lineWeight: string) => {
    dispatch(setLineWeightAC(lineWeight))
  }
  const setInstrument = (instrumentName: string) => {
    dispatch(setInstrumentAC(instrumentName))
  }
  const setDataUrl = (dataUrl: string) => {
    let userName = JSON.parse(getCookie('user')).email.split('@').slice(0,1).join();
    dispatch(setDataUrlAC(dataUrl, userName));
  }
  const showHideStarPropsWindow = () => {
    dispatch(openStarPropWindowsAC())  
  }

  const instrumentName = useSelector((state: State) => state.editorReducer.instrumentName);
  const subCtx = useSelector((state: any) => state.editorReducer.subCtx);
  const starPropWindowsOpened = useSelector((state: any) => state.editorReducer.starPropWindowsOpened)

  const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => setLineColor(e.target.value)
  const onChangeWeight = (e: any) => setLineWeight(e.target.getAttribute('aria-valuetext'))
  const onClicksetInstrument = (type: string) => setInstrument(type)
  const valuetext = (value: any) => value
  const uploadImage = () => {
    setDataUrl(subCtx.canvas.toDataURL());
  }

  const setStarProp = () => {
    onClicksetInstrument('star');
    showHideStarPropsWindow()
  }

  console.log(starPropWindowsOpened);
  return(
    <Radium.StyleRoot>
      <div className={classes.wrapper} style={styles.fadeIn}>
        <div className={classes.buttons_navbar}>
          <div className={instrumentName === 'rectangle' ? classes.button_checked : classes.button} onClick={() => onClicksetInstrument('rectangle')}><CheckBoxOutlineBlankIcon /></div>
          <div className={instrumentName === 'circle' ? classes.button_checked : classes.button} onClick={() => onClicksetInstrument('circle')}><RadioButtonUncheckedIcon /></div>
          <div className={instrumentName === 'line' ? classes.button_checked : classes.button} onClick={() => onClicksetInstrument('line')}><LinearScaleIcon /></div>
          <div className={instrumentName === 'pencil' ? classes.button_checked : classes.button} onClick={() => onClicksetInstrument('pencil')}><CreateIcon /></div>
          <div className={instrumentName === 'star' ? classes.button_checked : classes.button} onClick={setStarProp}><StarBorderIcon /></div>
          
          <div className = {classes.size_slider}>
            <Typography style={{fontSize: '0.6rem', margin: '0', color: '#969fa5'}} id="discrete-slider" gutterBottom>Line weight</Typography>
            <Slider
              onChange={onChangeWeight}
              style={{padding: '0', color: '#969fa5'}}
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={10}
            />
          </div>
          <input type="color" onChange={onChangeColor} />
          <Button 
            onClick={uploadImage}
            style={{
              background: '#969fa5',
              position: 'absolute',
              right: '1%',
              height: '25px'
            }} 
            variant="contained"
          >Upload</Button>
        </div>
        <Canvas />
      </div>
      {starPropWindowsOpened ?
        <div className={classes.modal_window_background} onClick={showHideStarPropsWindow}>
          <FlashDiv className={classes.animation_wrapper}>
            <div className={classes.modal_window}>
                <p className={classes.modal_window__text}>Set properties to draw</p>
                <div className={classes.prooerties_container}>
                  <div className={classes.properties_row}>
                    
                  </div>
                </div>
                <div className={classes.modal_window__buttonst_container}>
                  {/* <Button onClick={() => delCicked(null)} variant="contained">No</Button> */}
                  {/* <Button onClick={delUserImageFromDB} variant="contained" color="secondary">Yes</Button> */}
                </div>
            </div>
          </FlashDiv>
        </div> : null}
      


    </Radium.StyleRoot>
  )
}

export default EditorPage;