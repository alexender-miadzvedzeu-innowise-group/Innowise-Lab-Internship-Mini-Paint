import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { signOutAC } from '../../actions/auth';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Logo from '../../../assets/icons/Logo.jpg'

const Navbar: React.FunctionComponent = (props:any) => {

  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(signOutAC())
  }

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      toolBar: {
        background: 'none',
        margin: '5px 0%',
        padding: '5px',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: '10px'
      },
      nav__link: {
        background: '#878F93',
        margin: '0 1%',
        color: '#281D11'
      },
      nav__link_logOut: {
        background: '#0B1519',
        color: '#fff',
        gridColumn: '11/13'
      },
    }));

  const materialStyles = useStyles();

  return(
    <div className={classes.wrapper}>
      <AppBar position="static" className={materialStyles.toolBar} >
          <div className={classes.logo_container}>
            <img className={classes.logo} src={Logo} alt="LOGO" />
          </div>
          <Button className={materialStyles.nav__link}>
            <NavLink to='/ ' activeClassName={classes.activeNav__link} className={classes.nav__link}>Home</NavLink>
          </Button>
          <Button className={materialStyles.nav__link}>
            <NavLink to='/editor' activeClassName={classes.activeNav__link} className={classes.nav__link}>Editor</NavLink>
          </Button>
          <Button className={materialStyles.nav__link}>
            <NavLink to='/profile' activeClassName={classes.activeNav__link} className={classes.nav__link}>Profile</NavLink>
          </Button>
          <Button className={materialStyles.nav__link_logOut} onClick={signOut}>
            Log out
          </Button>
      </AppBar>
    </div>
  )
}

export default Navbar