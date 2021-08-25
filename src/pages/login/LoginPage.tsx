import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInWithEmailAC } from '../../core/reducers/authReducer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import classes from './LoginPage.module.css';
import {Link} from 'react-router-dom'
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

interface Idata {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {  
  const [data, setData] = useState<Idata>({
    email: '',
    password: ''
  });

  const dispatch = useDispatch();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }

  const signIn = (payload: object) => {
    dispatch(signInWithEmailAC(payload))
  }

  const onSubmit = (e: any) => {
    if (
      data.email.length !== 0 &&
      data.password.length !== 0
    ) {
      signIn(data)
    }
  }

  return(
    <Radium.StyleRoot>
      <div className={classes.wrapper} style={styles.fadeIn}>
        <div className={classes.form_wrapper}>
          <h3 className={classes.header}>Log in</h3>
          <form className={classes.form}>
            <TextField
              onChange={onInputChange}
              className={classes.login}
              variant="outlined"
              id="email"
              label="Email Address"
              name="email"
              fullWidth
              margin='dense'
              value={data.email}
            />
            <TextField
              onChange={onInputChange}
              className={classes.password}
              variant="outlined"
              name="password"
              label="Password"
              type="password"
              id="password"
              fullWidth
              margin='dense'
              value={data.password}
            />
            <Button onClick={onSubmit} className={classes.button} variant="contained" color="primary">
              <Link to='/' className={classes.button__link}>Log in</Link>
            </Button>
          </form>
        </div>
        <p className={classes.text}>or you can create new account</p>
        <Button style={{background: '#1cb43d'}} variant="contained">
          <Link to='/signin' className={classes.button__link}>Create account</Link>
        </Button>
      </div>
    </Radium.StyleRoot>
    
  )
}

export default LoginPage;