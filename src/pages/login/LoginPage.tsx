import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithEmailAC, createUserWithEmailAC, resetErrorMessageAC, setLocalUserErrorMessageAC } from '../../core/actions/auth';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import classes from './LoginPage.module.css';
import { fadeIn } from 'react-animations';
import Radium from 'radium';
import Alert from '@material-ui/lab/Alert';

interface Istyles {
    fadeIn: any,
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
  confirmPassword: string
}

const LoginPage: React.FC = () => {  
  const [data, setData] = useState<Idata>({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [login, setlogin] = useState(true)

  const dispatch = useDispatch();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const errorMessage = useSelector((state: any) => state.authReducer.errorMessage);

  const signIn = (payload: object) => {
    dispatch(signInWithEmailAC(payload))
  }

  const createUser = (payload: object) => {
    dispatch(createUserWithEmailAC(payload))
  }

  const resetErrorMessage = () => {
    dispatch(resetErrorMessageAC())
  }

  const setLocalUserErrorMessage = (error: string) => {
    dispatch(setLocalUserErrorMessageAC(error))
  }

  const onSubmit = (e: any) => {
    switch (login) {
      case true:
        if (
          data.email.length !== 0 &&
          data.password.length !== 0
        ) {
          signIn(data)
        }
      break; 
      case false: 
        if (
          data.email.length !== 0 &&
          data.password.length !== 0 &&
          data.confirmPassword.length !== 0 &&
          data.password === data.confirmPassword
        ) {
          createUser(data)
        } else {
          setLocalUserErrorMessage('Passwords must be at least 6 characters long and be the same')
        }
    }
  }
  
  return(
    <Radium.StyleRoot>
      <div className={classes.wrapper} style={styles.fadeIn} >
        <div className={classes.form_wrapper}>
          {
            errorMessage ? 
            <Alert className={classes.alert} severity="error">{errorMessage}</Alert> :
            null
          }
          <h3 className={classes.header}>{login ? 'Sign in' : 'Log in'}</h3>
          <form className={classes.form}>
            <TextField
              onChange={onInputChange}
              onFocus={resetErrorMessage}
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
              onFocus={resetErrorMessage}
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
            {
              login ? 
              null : 
              <TextField
              onChange={onInputChange}
              onFocus={resetErrorMessage}
              className={classes.password}
              variant="outlined"
              name="confirmPassword"
              label="Confirm password"
              type="password"
              id="confirm_password"
              fullWidth
              margin='dense'
              value={data.confirmPassword}
            />
            }
            <Button onClick={onSubmit} className={classes.button} variant="contained" color="primary">
              {login ? 'Sign in' : 'Log in'}
            </Button>
          </form>
        </div>
        <p className={classes.text}>
          { login ?
          <span>or you can <span className={classes.span_link} onClick={()=>setlogin(!login)}>log in</span> with account</span>: 
          <span>or you can <span className={classes.span_link} onClick={()=>setlogin(!login)}>sign in</span> with account</span>}
        </p>
      </div>
    </Radium.StyleRoot>
    
  )
}

export default LoginPage;