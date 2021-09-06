import React from 'react';
import classes from './EditorPage.module.css';
import { fadeIn, fadeInDown } from 'react-animations';
import Canvas from '../../core/components/Canvas/Canvas';
import Radium from 'radium';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import CreateIcon from '@material-ui/icons/Create';
import Slider from '@material-ui/core/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { setInstrumentAC, setLineColorAC, setLineWeightAC, setDataUrlAC, openUploadWindowsAC } from '../../core/actions/editor';
import Button from '@material-ui/core/Button';
import styled, { keyframes } from 'styled-components';
import { withStyles, Theme } from '@material-ui/core/styles';
import { IState } from '../../core/interfaces/Istate';

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
};

const PrettoSlider = withStyles({
  root: {
    margin: 0,
    padding: 0,
    color: '#0b1519'
  },
  thumb: {
    backgroundColor: '#878f93',
    border: '2px solid #0b1519',
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  valueLabel: {
    left: '-12px',
  },
})(Slider);

const UploadButton = withStyles((theme: Theme) => ({
  root: {
    color: '#000',
    backgroundColor: '#878f93',
    height: '25px',
    position: 'absolute',
    right: '1%',
    '&:hover': {
      backgroundColor: '#0b1519',
      color: '#fff'
    },
  },
}))(Button);

const EditorPage: React.FunctionComponent = () => {
  const instrumentName = useSelector((state: IState) => state.editorReducer.instrumentName);
  const subCtx = useSelector((state: IState) => state.editorReducer.subCtx);
  const uploadWindowsOpened = useSelector((state: IState) => state.editorReducer.uploadWindowsOpened);
  const userID = useSelector((state: IState) => state.authReducer.userID);
  const userName = useSelector((state: IState) => state.authReducer.userName);

  const dispatch = useDispatch();
  
  const setLineColor = (lineColor: string) => {
    dispatch(setLineColorAC(lineColor));
  };
  const setLineWeight = (lineWeight: string) => {
    dispatch(setLineWeightAC(lineWeight));
  };
  const setInstrument = (instrumentName: string) => {
    dispatch(setInstrumentAC(instrumentName));
  };
  const setDataUrl = (dataUrl: string) => {
    dispatch(setDataUrlAC(dataUrl, userID, userName));
  };

  const showHideUploadWindow = () => {
    dispatch(openUploadWindowsAC());
  };

  const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => setLineColor(e.target.value);
  const onChangeWeight = (e: any) => setLineWeight(e.target.getAttribute('aria-valuetext'));
  const onClicksetInstrument = (type:string) => (e: React.MouseEvent) => setInstrument(type);
  const valuetext = (value: any) => value;
  const uploadImage = () => {
    if (subCtx) {
      setDataUrl(subCtx?.canvas.toDataURL());
      showHideUploadWindow();
    }
  };

  return(
    <Radium.StyleRoot>
      <div className={classes.wrapper} style={styles.fadeIn}>
        <div className={classes.buttons_navbar}>
          <div className={instrumentName === 'rectangle' ? classes.button_checked : classes.button} onClick={onClicksetInstrument('rectangle')}><CheckBoxOutlineBlankIcon /></div>
          <div className={instrumentName === 'circle' ? classes.button_checked : classes.button} onClick={onClicksetInstrument('circle')}><RadioButtonUncheckedIcon /></div>
          <div className={instrumentName === 'line' ? classes.button_checked : classes.button} onClick={onClicksetInstrument('line')}><LinearScaleIcon /></div>
          <div className={instrumentName === 'pencil' ? classes.button_checked : classes.button} onClick={onClicksetInstrument('pencil')}><CreateIcon /></div>
          
          <div className = {classes.size_slider}>
            <p className={classes.slider_text}>Line weight</p>
            <PrettoSlider
              onChange={onChangeWeight}
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
          <UploadButton 
            onClick={showHideUploadWindow}
            variant="contained"
          >Upload</UploadButton>
        </div>
        <Canvas />
      </div>
      {uploadWindowsOpened &&
        <div className={classes.modal_window_background}>
          <FlashDiv className={classes.animation_wrapper}>
            <div className={classes.modal_window}>
                <p className={classes.modal_window__text}>Upload image?</p>
                <div className={classes.modal_window__buttonst_container}>
                  <Button onClick={showHideUploadWindow} variant="contained">No</Button>
                  <Button onClick={uploadImage} variant="contained" color="secondary">Yes</Button>
                </div>
            </div>
          </FlashDiv>
        </div>}
    </Radium.StyleRoot>
  );
};

export default EditorPage;