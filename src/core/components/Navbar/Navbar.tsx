import React, { useState, useEffect } from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { signOutAC } from '../../actions/auth';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Logo from '../../../assets/icons/Logo.jpg'
import { fadeInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const flashAnimation = keyframes`${fadeInDown}`;
const FlashDiv = styled.div`animation: 1s ${flashAnimation};`;

const Navbar: React.FunctionComponent = (props:any) => {

  const [isClicked, setIsClicked] = useState(false);
  const onClickDelClicked = () => setIsClicked(!isClicked);

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

  const Navbutton = withStyles((theme: Theme) => ({
  root: {
    color: '#000',
    backgroundColor: '#878f93',
    height: '25px',
    margin: '0 1%',
    alignSelf: 'center',
    '&:hover': {
      backgroundColor: '#878f93',
    }
  },
  }))(Button);

  const LogOutbutton = withStyles((theme: Theme) => ({
  root: {
    color: '#fff',
    backgroundColor: '#0b1519',
    height: '25px',
    margin: '0 1%',
    gridColumn: '11/13',
    alignSelf: 'center',
    '&:hover': {
      backgroundColor: '#0b1519',
    }
  },
  }))(Button);

  return(
    <div className={classes.wrapper}>
      <AppBar position="static" className={materialStyles.toolBar} >
          <div className={classes.logo_container}>
            <img className={classes.logo} src={Logo} alt="LOGO" />
          </div>
          <Navbutton>
            <NavLink to='/ ' activeClassName={classes.activeNav__link} className={classes.nav__link}>Home</NavLink>
          </Navbutton>
          <Navbutton>
            <NavLink to='/editor' activeClassName={classes.activeNav__link} className={classes.nav__link}>Editor</NavLink>
          </Navbutton>
          <Navbutton>
            <NavLink to='/profile' activeClassName={classes.activeNav__link} className={classes.nav__link}>Profile</NavLink>
          </Navbutton>
          <LogOutbutton onClick={onClickDelClicked}>
            Log out
          </LogOutbutton>
      </AppBar>
      {isClicked &&
          <div className={classes.modal_window_background}>
            <FlashDiv className={classes.animation_wrapper}>
              <div className={classes.modal_window}>
                  <p className={classes.modal_window__text}>Do you want to log out?</p>
                  <div className={classes.modal_window__buttonst_container}>
                    <Button onClick={onClickDelClicked} variant="contained">No</Button>
                    <Button onClick={signOut} variant="contained" color="secondary">Yes</Button>
                  </div>
              </div>
            </FlashDiv>
          </div> }
    </div>
  )
}

export default Navbar