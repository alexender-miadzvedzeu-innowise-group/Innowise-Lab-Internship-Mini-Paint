import React from 'react';
import classes from './ProfilePage.module.css';
import { fadeIn, fadeInDown } from 'react-animations';
import Radium from 'radium';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { delUserImageFromDbAC, getUserImagesFromDbAC, getUserNameAC, getUserIDAC } from '../../core/actions/profile';
import { useEffect } from 'react';
import { delClickedAC, } from '../../core/actions/profile';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled, { keyframes } from 'styled-components';
import { IState } from '../../core/interfaces/Istate';

interface Istyles {
  fadeIn: any
}

const styles: Istyles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
};

const flashAnimation = keyframes`${fadeInDown}`;
const FlashDiv = styled.div`animation: 1s ${flashAnimation};`;

const ProfilePage: React.FunctionComponent = () => {
  
  const dispatch= useDispatch();
  const userName = useSelector((state:IState) => state.authReducer.userName);  
  const userID = useSelector((state:IState) => state.authReducer.userID);
  const images = useSelector((state:IState) => state.profileReducer.imagesData);
  const isClicked = useSelector((state:IState) => state.profileReducer.delCicked);
  const id = useSelector((state: IState) => state.profileReducer.idTodell);
  const imgUrl = useSelector((state: IState) => state.profileReducer.imgUrlToDell);
  const loading = useSelector((state: IState) => state.profileReducer.loading);
  const delCicked = (id: string | null, imgUrl: string | null) => dispatch(delClickedAC(id, imgUrl));
  const onClickDel = (id: string | null, imgUrl: string | null) => () => delCicked(id, imgUrl);
  const delUserImageFromDB = () => dispatch(delUserImageFromDbAC(id, userID, imgUrl));
  useEffect(() => {
    dispatch(getUserNameAC());
    dispatch(getUserIDAC());
    dispatch(getUserImagesFromDbAC(userID, userName));
  }, [dispatch, userName]);

  return(
    <Radium.StyleRoot>
      <div className={classes.wrapper} style={styles.fadeIn}>
        <div className={classes.user_info}>
          <Avatar>{userName.substr(0, 1).toUpperCase()}</Avatar>
          <h3 className={classes.user_name}>{userName}</h3>
        </div>
        <div className={classes.images_container}>
          {
            images.map((image: any, key: any) => {
              return (
                <div className={classes.image_wrapper} key={key} >
                  <div className={classes.img_container}>
                    <img className={classes.img} src={image.imgUrl} alt={image.imgUrl} />
                  </div>
                  <div className={classes.delete_button}>
                    <Button onClick={onClickDel(image.id, image.imgUrl)} className={classes.button_icon} variant="contained" color="secondary" >Delete</Button>
                  </div>
                </div>
              );
            })
          }
        </div>
        {isClicked &&
          <div className={classes.modal_window_background}>
            <FlashDiv className={classes.animation_wrapper}>
              <div className={classes.modal_window}>
                  <p className={classes.modal_window__text}>Are you really want to delete this image?</p>
                  <div className={classes.modal_window__buttonst_container}>
                    <Button onClick={onClickDel(null, null)} variant="contained">No</Button>
                    <Button 
                    onClick={delUserImageFromDB} 
                    variant="contained" color="secondary">Yes</Button>
                  </div>
                  { loading && <CircularProgress className={classes.progress} color="inherit"/> }
              </div>
            </FlashDiv>
          </div> }
      </div>
    </Radium.StyleRoot>
  );
};

export default ProfilePage;