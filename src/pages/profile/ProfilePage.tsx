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

interface Istyles {
  fadeIn: any
}

const styles: Istyles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

const flashAnimation = keyframes`${fadeInDown}`;
const FlashDiv = styled.div`animation: 1s ${flashAnimation};`;

const ProfilePage: React.FunctionComponent = () => {
  
  const dispatch= useDispatch()
  const user = useSelector((state:any) => state.profileReducer.userName);
  const userID = useSelector((state:any) => state.profileReducer.userID);
  const images = useSelector((state:any) => state.profileReducer.imagesData)
  const isClicked = useSelector((state:any) => state.profileReducer.delCicked)
  const idToDel = useSelector((state: any) => state.profileReducer.idTodell)
  const loading = useSelector((state: any) => state.profileReducer.loading)

  const delCicked = (id: number | null) => dispatch(delClickedAC(id));
  const onClickDel = (id: number | null) => () => delCicked(id)
  const delUserImageFromDB = () => dispatch(delUserImageFromDbAC(idToDel, userID))

  useEffect(() => {
    dispatch(getUserNameAC());
    dispatch(getUserIDAC());
    dispatch(getUserImagesFromDbAC())
  }, [dispatch])

  return(
    <Radium.StyleRoot>
      <div className={classes.wrapper} style={styles.fadeIn}>
        <div className={classes.user_info}>
          <Avatar>{user.substr(0, 1).toUpperCase()}</Avatar>
          <h3 className={classes.user_name}>{user}</h3>
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
                    <Button onClick={onClickDel(image.id)} className={classes.button_icon} variant="contained" color="secondary" >Delete</Button>
                  </div>
                </div>
              )
            })
          }
        </div>
        {isClicked &&
          <div className={classes.modal_window_background}>
            <FlashDiv className={classes.animation_wrapper}>
              <div className={classes.modal_window}>
                  <p className={classes.modal_window__text}>Are you really want to delete this image?</p>
                  <div className={classes.modal_window__buttonst_container}>
                    <Button onClick={onClickDel(null)} variant="contained">No</Button>
                    <Button onClick={delUserImageFromDB} variant="contained" color="secondary">Yes</Button>
                  </div>
                  { loading && <CircularProgress className={classes.progress} color="inherit"/> }
              </div>
            </FlashDiv>
          </div> }
      </div>
    </Radium.StyleRoot>
  )
}

export default ProfilePage