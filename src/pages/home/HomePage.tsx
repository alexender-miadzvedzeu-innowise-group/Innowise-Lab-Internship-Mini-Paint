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
import { isEmpty } from '../../core/helpers/isEmptyObj';

interface Istyles {
    fadeIn: any
  }

const styles: Istyles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

const HomePage: React.FunctionComponent = ({signOut}:any) => {

  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch();
  const getImages = () => dispatch(getimagesFromDbAC());
  const sortImagesData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    return dispatch(sortImagesDataAC(e.target.value))
  }

  const imagesData = useSelector((state: any) => state.homeReducer.imagesData)
  const sortedImagesData = useSelector((state: any) => state.homeReducer.sortedImagesData)
  
  useEffect(() => {
    getImages();
  }, [])

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
        </div>
        {
          Object.keys(isEmpty(sortedImagesData) ? imagesData : sortedImagesData).map((elem, key) => {
            return (
              <div className={classes.user_container} key={key}>
                <div className={classes.name_container}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">{elem.substr(0, 1).toUpperCase()}</Avatar>
                  <h3 className={classes.user_name}>{elem}</h3>
                </div>
                <div className={classes.container}>
                  {
                    imagesData[elem].map((img: string, key: string) => {
                      return (
                        <div className={classes.imgWrapper} key ={key}>
                          <img className={classes.img} src={img} alt={img} />
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </Radium.StyleRoot>
  )
}

export default HomePage