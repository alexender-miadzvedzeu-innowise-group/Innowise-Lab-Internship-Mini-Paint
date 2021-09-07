import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedAC } from '../../actions/auth';
import classes from './App.module.css';
import { Switch } from 'react-router-dom';
import HomePage from '../../../pages/home/HomePage';
import EditorPage from '../../../pages/editor/EditorPage';
import ProfilePage from '../../../pages/profile/ProfilePage';
import { app } from '../../firebase/firebase';
import { sliceUserNameFromEmail } from '../../helpers/sliceUserNameFromEmail';
import { Redirect } from 'react-router';
import { IState } from '../../interfaces/Istate';
import PrivateRoute from '../../routes/PrivateRoute';

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
      <Switch>
        <PrivateRoute isLoged={isLoged} path='/editor' component={EditorPage}/>
        <PrivateRoute isLoged={isLoged} path='/profile' component={ProfilePage}/>
        <PrivateRoute isLoged={isLoged} path='/' component={HomePage}/>
      </Switch>
      {!isLoged && <Redirect to='/' />}
    </div>
  );
};

export default App;