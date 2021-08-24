import React from 'react';
import classes from './EditorPage.module.css';
import { fadeIn } from 'react-animations';
import Canvas from '../../core/components/Canvas/Canvas';
import Radium from 'radium';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import CreateIcon from '@material-ui/icons/Create';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { setInstrumentAC, setLineColorAC, setLineWeightAC } from '../../core/reducers/editorReducer';

interface Istyles {
  fadeIn: any
}

const styles: Istyles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

const EditorPage: React.FunctionComponent = ({
  lineColor, lineWeight, instrumentName, setLineColor, setLineWeight, setInstrument
}: any) => {

  const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => setLineColor(e.target.value)
  const onChangeWeight = (e: any) => setLineWeight(e.target.getAttribute('aria-valuetext'))
  const onClicksetInstrument = (type: string) => setInstrument(type)
  const valuetext = (value: any) => value

  return(
    <Radium.StyleRoot>
      <div className={classes.wrapper} style={styles.fadeIn}>
        <div className={classes.buttons_navbar}>
          <div className={instrumentName === 'rectangle' ? classes.button_checked : classes.button} onClick={() => onClicksetInstrument('rectangle')}><CheckBoxOutlineBlankIcon /></div>
          <div className={instrumentName === 'circle' ? classes.button_checked : classes.button} onClick={() => onClicksetInstrument('circle')}><RadioButtonUncheckedIcon /></div>
          <div className={instrumentName === 'line' ? classes.button_checked : classes.button} onClick={() => onClicksetInstrument('line')}><LinearScaleIcon /></div>
          <div className={instrumentName === 'pencil' ? classes.button_checked : classes.button} onClick={() => onClicksetInstrument('pencil')}><CreateIcon /></div>
          <div className = {classes.size_slider}>
            <Typography style={{fontSize: '0.8rem', margin: '0', color: '#969fa5'}} id="discrete-slider" gutterBottom>Line weight</Typography>
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
        </div>
        <Canvas />
      </div>
    </Radium.StyleRoot>
  )
}

const mapStateToProps = (state: any) => ({
  lineColor: state.editorReducer.lineColor,
  lineWeight: state.editorReducer.lineWeight,
  instrumentName: state.editorReducer.instrumentName
})

const mapDispatchToProps = (dispatch: any) => ({
  setLineColor: (lineColor: string) => dispatch(setLineColorAC(lineColor)),
  setLineWeight: (lineWeight: string) => dispatch(setLineWeightAC(lineWeight)),
  setInstrument: (instrumentName: string) => dispatch(setInstrumentAC(instrumentName))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditorPage)