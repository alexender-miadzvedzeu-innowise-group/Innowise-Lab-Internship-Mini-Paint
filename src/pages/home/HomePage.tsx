import React from 'react';
import classes from './HomePage.module.css';
import { fadeIn } from 'react-animations';
import Radium from 'radium';
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

interface Istyles {
    fadeIn: any
  }

const styles: Istyles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
};

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
    <Radium.StyleRoot>
      <div className={classes.wrapper} style={styles.fadeIn}>
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
          Object.keys(isEmptyObj(sortedImagesData) ? imagesData : sortedImagesData).map((elem, key) => {
            return (
              <div className={classes.user_container} key={key}>
                <div className={classes.name_container}>
                  <Avatar alt="Remy Sharp" >{elem.substr(0, 1).toUpperCase()}</Avatar>
                  <h3 className={classes.user_name}>{elem}</h3>
                </div>
                <div className={classes.container}>
                  {
                    imagesData[elem].map((img: {imgUrl: string}, key: string) => {
                      return (
                        <div className={classes.imgWrapper} key ={key}>
                          <img className={classes.img} src={img.imgUrl} alt={img.imgUrl} />
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
    </Radium.StyleRoot>
  );
};

export default HomePage;