import React from 'react';
import classes from './HomePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getimagesFromDbAC, sortImagesDataAC } from '../../core/actions/home';
import { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { TextField } from '@material-ui/core';
import { useState } from 'react';
import { isEmptyObj } from '../../core/helpers/isEmptyObj';
import Alert from '@material-ui/lab/Alert';
import { onClicksortedImagesData } from '../../core/helpers/onClicksortedImagesData';
import { IState } from '../../core/interfaces/Istate';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { sliceUserNameFromEmail } from '../../core/helpers/sliceUserNameFromEmail';

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`animation: 1s ${fadeInAnimation};`;

const HomePage: React.FunctionComponent = () => {

  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();
  const sortImagesData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    return dispatch(sortImagesDataAC(onClicksortedImagesData(imagesData, e.target.value)));
  };
  
  const imagesData = useSelector((state: IState) => state.homeReducer.imagesData);
  const sortedImagesData = useSelector((state: IState) => state.homeReducer.sortedImagesData);
  useEffect(() => {
    dispatch(getimagesFromDbAC());
  }, [dispatch]);

  return(
    <FadeInDiv>
      <div className={classes.wrapper}>
        <div className={classes.search_input_wrapper}>
          <span className={classes.search_input_head}>Find user</span>
          <TextField
            onChange={sortImagesData}
            className={classes.search_input}
            variant="outlined"
            id="email"
            placeholder="User name"
            name="email"
            fullWidth
            margin='dense'
            disabled={Object.keys(imagesData).length ? false : true}
            value={inputValue}
          />
          {
            isEmptyObj(sortedImagesData) && inputValue ?
            <Alert className={classes.alert} severity="warning">No such users found</Alert> :
            null
          }
        </div>
        {
          (isEmptyObj(sortedImagesData) ? imagesData : sortedImagesData).map((elem:{userName: string, images: []}, key) => {
            return (
              <div className={classes.user_container} key={key}>
                <div className={classes.name_container}>
                  <Avatar alt="Remy Sharp" >{elem.userName.substr(0, 1).toUpperCase()}</Avatar>
                  <h3 className={classes.user_name}>{sliceUserNameFromEmail(elem.userName)}</h3>
                </div>
                <div className={classes.container}>
                  {
                    elem.images.map((images: {imgUrl: string}, key) => {
                      return (
                        <div className={classes.imgWrapper} key ={key}>
                          <img className={classes.img} src={images.imgUrl} alt={images.imgUrl} />
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            );
          })
        }
      </div>
    </FadeInDiv>
  );
};

export default HomePage;