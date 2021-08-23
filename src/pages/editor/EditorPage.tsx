import React from 'react';
import classes from './EditorPage.module.css';
import { fadeIn } from 'react-animations';
import Radium from 'radium';

interface Istyles {
    fadeIn: any
  }

const styles: Istyles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

const EditorPage: React.FunctionComponent = ({signOut}:any) => {
  return(
    <Radium.StyleRoot>
      <div className={classes.wrapper} style={styles.fadeIn}>
        Editor page
      </div>
    </Radium.StyleRoot>
  )
}

export default EditorPage