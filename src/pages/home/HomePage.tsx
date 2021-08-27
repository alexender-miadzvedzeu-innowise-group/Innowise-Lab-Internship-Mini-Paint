import React from 'react';
import classes from './HomePage.module.css';
import { connect } from 'react-redux';
import { signOutAC } from '../../core/actions/auth';
import Button from '@material-ui/core/Button';
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

const HomePage: React.FunctionComponent = ({signOut}:any) => {
  return(
    <Radium.StyleRoot>
      <div className={classes.wrapper} style={styles.fadeIn}>
        <Button onClick={signOut} style={{background: '#1cb43d'}} variant="contained">
          Sign out
        </Button>
      </div>
    </Radium.StyleRoot>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  signOut: () => dispatch(signOutAC())
})

export default connect(null, mapDispatchToProps)(HomePage)