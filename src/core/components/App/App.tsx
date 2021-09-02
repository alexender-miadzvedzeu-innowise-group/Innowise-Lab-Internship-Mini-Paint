import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkUserAftorizationAC } from '../../actions/auth';
import classes from './App.module.css';
import LoginPage from '../../../pages/login/LoginPage';
import { Switch, Route } from "react-router-dom";
import HomePage from '../../../pages/home/HomePage';
import Navbar from '../Navbar/Navbar';
import EditorPage from '../../../pages/editor/EditorPage';
import ProfilePage from '../../../pages/profile/ProfilePage';
import { getCookie } from '../../helpers/getCookie';

const App: React.FunctionComponent = () => {
  useEffect(() => {
    checkUserAftorization()
  },[])

  const dispatch = useDispatch();
  const checkUserAftorization = () => {
    dispatch(checkUserAftorizationAC())
  }

  const isLoged = useSelector((state: any) => state.authReducer.isLoged)

  // console.log(JSON.parse(getCookie('user')).stsTokenManager.accessToken); 

  return(
    <div className={classes.wrapper}>
      {isLoged ? 
        <div>
          <Navbar />
          <Switch>
            <Route path='/editor'>
              <EditorPage />
            </Route>
            <Route path='/profile'>
              <ProfilePage />
            </Route>
            <Route path='/'>
              <HomePage />
            </Route>
          </Switch>
        </div> : 
        <Route path='/'>
          <LoginPage />
        </Route>
      }
    </div>
  )
}

export default App