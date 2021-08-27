import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Logo from '../../../assets/icons/Logo.jpg'
import { useDispatch } from 'react-redux';
import { signOutAC } from '../../actions/auth';

const Navbar: React.FunctionComponent = (props:any) => {


  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(signOutAC())
  }
  return(
    <div className={classes.wrapper}>
      <div className={classes.logo_container}>
        <img className={classes.logo} src={Logo} alt="Logo" />
      </div>
        <NavLink to='/ ' activeClassName={classes.activeNav__link} className={classes.nav__link}>Home</NavLink>
        <NavLink to='/editor' activeClassName={classes.activeNav__link} className={classes.nav__link}>Editor</NavLink>
        <NavLink to='/profile' activeClassName={classes.activeNav__link} className={classes.nav__link}>Profile</NavLink>
        <Button onClick={signOut} className={classes.signOutButton} style={{background: '#1cb43d'}} variant="contained">
          Sign out
        </Button>
    </div>
  )
}

export default Navbar