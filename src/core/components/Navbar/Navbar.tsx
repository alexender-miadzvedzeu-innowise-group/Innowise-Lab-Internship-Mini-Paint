import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom'
import Logo from '../../../assets/icons/Logo.jpg'

const Navbar: React.FunctionComponent = (props:any) => {

  return(
    <div className={classes.wrapper}>
      <div className={classes.logo_container}>
        <img className={classes.logo} src={Logo} alt="Logo" />
      </div>
        <NavLink to='/ ' activeClassName={classes.activeNav__link} className={classes.nav__link}>Home</NavLink>
        <NavLink to='/editor' activeClassName={classes.activeNav__link} className={classes.nav__link}>Editor</NavLink>
        <NavLink to='/profile' activeClassName={classes.activeNav__link} className={classes.nav__link}>Profile</NavLink>
    </div>
  )
}

export default Navbar