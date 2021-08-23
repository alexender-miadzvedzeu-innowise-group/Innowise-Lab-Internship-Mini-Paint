import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { checkUserAftorizationAC } from '../../reducers/authReducer';
import classes from './App.module.css';
import LoginPage from '../../../pages/login/LoginPage';
import RegisterPage from '../../../pages/register/RegisterPage';
import { Switch, Route } from "react-router-dom";
import HomePage from '../../../pages/home/HomePage';
import Navbar from '../Navbar/Navbar';
import EditorPage from '../../../pages/editor/EditorPage';
import ProfilePage from '../../../pages/profile/ProfilePage';

const App: React.FunctionComponent = ({isLoged, checkUserAftorization}:any) => {
  useEffect(() => {
    checkUserAftorization()
  },[checkUserAftorization])
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
        <Switch>
          <Route path='/signin'>
            <RegisterPage />
          </Route>
          <Route path='/'>
            <LoginPage />
          </Route>
          
        </Switch>
    
      }
      
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  isLoged: state.authReducer.isLoged
})

const mapDispatchToProps = (dispatch: any) => ({
  checkUserAftorization: () => dispatch(checkUserAftorizationAC()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)