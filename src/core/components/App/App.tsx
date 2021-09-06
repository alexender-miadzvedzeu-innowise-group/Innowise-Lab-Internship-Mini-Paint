import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedAC } from '../../actions/auth';
import classes from './App.module.css';
import LoginPage from '../../../pages/login/LoginPage';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../../pages/home/HomePage';
import Navbar from '../Navbar/Navbar';
import EditorPage from '../../../pages/editor/EditorPage';
import ProfilePage from '../../../pages/profile/ProfilePage';
import { app } from '../../firebase/firebase';
import { sliceUserNameFromEmail } from '../../helpers/sliceUserNameFromEmail';
import { Redirect } from 'react-router';
import { IState } from '../../interfaces/Istate';

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const isLoged = useSelector((state: IState) => state.authReducer.isLoged);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user && user.email && user.uid) {
        dispatch(setLoggedAC(sliceUserNameFromEmail(user.email), user.uid));
      }
    });
  }, [dispatch]);

  return(
    <div className={classes.wrapper}>
      {isLoged ? 
        <div>
          <Navbar />
          <Switch>
            <Route path='/editor' component={EditorPage}/>
            <Route path='/profile' component={ProfilePage}/>
            <Route path='/' component={HomePage}/>
          </Switch>
        </div> : 
        <Route path='/'>
          {!isLoged && <Redirect to='/'/>}
          <LoginPage />
        </Route>
      }
    </div>
  );
};

export default App;