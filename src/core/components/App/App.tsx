import React from 'react';
import LoginPage from '../../../pages/login/LoginPage';
import classes from './App.module.css';

import { useState, useEffect } from 'react';

import firebase from '../../firebase/firebase';

const App: React.FunctionComponent = () => {
  const [user, setUser] = useState<any | null>(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  },[])
  console.log(user);

  return(
    <div className={classes.wrapper}>
      <LoginPage />
    </div>
  )
}

export default App