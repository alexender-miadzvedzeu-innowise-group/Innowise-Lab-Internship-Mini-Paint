import React, { useState } from 'react';
import { createUserWithEmailAC } from '../../core/actions/auth';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import classes from './RegisterPage.module.css';
import { useDispatch } from 'react-redux';
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
  confirmPassword: string;
}

const RegisterPage: React.FC = () => {
  const [data, setData] = useState<Idata>({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const dispatch = useDispatch();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e: any) => {
    if (
      data.email.length !== 0 &&
      data.password.length !== 0 &&
      data.confirmPassword.length !== 0 &&
      data.password === data.confirmPassword
    ) {
      createUser(data)
    }
  }

  const createUser = (payload: object) => {
    dispatch(createUserWithEmailAC(payload))
  }

  return(
    <Radium.StyleRoot>
    <div className={classes.wrapper} style={styles.fadeIn}>
      <div className={classes.form_wrapper}>
        <h3 className={classes.header}>Create account</h3>
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
          <TextField
            onChange={onInputChange}
            className={classes.password}
            variant="outlined"
            name="confirmPassword"
            label="Confirm password"
            type="password"
            id="confirmPassword"
            fullWidth
            margin='dense'
            value={data.confirmPassword}
          />
          <Button onClick={onSubmit} variant="contained" color="primary">
            <Link to='/' className={classes.button__link}>Create account</Link>
          </Button>
        </form>
      </div>
      <p className={classes.text}>or you can login with your account</p>
      <Button style={{background: '#1cb43d'}} variant="contained">
        <Link to='/' className={classes.button__link}>Log in</Link>
      </Button>
    </div>
    </Radium.StyleRoot>
  )
}

export default RegisterPage