import React from 'react';
import classes from './HomePage.module.css';
import { fadeIn } from 'react-animations';
import Radium from 'radium';
import { useDispatch, useSelector } from 'react-redux';
import { getimagesFromDbAC } from '../../core/actions/home';
import { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';

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

  const dispatch = useDispatch();
  const getImages = () => dispatch(getimagesFromDbAC());

  const imagesData = useSelector((state: any) => state.homeReducer.imagesData)
  
  useEffect(() => {
    getImages();
  }, [])

  return(
    <Radium.StyleRoot>
      <div className={classes.wrapper} style={styles.fadeIn}>
        {
          Object.keys(imagesData).map((elem, key) => {
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