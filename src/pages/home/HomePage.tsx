import React from 'react';
import classes from './HomePage.module.css';
import { fadeIn } from 'react-animations';
import Radium from 'radium';
import { useDispatch, useSelector } from 'react-redux';
import { getimagesFromDbAC } from '../../core/actions/home';
import { useEffect } from 'react';

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
  
  console.log(imagesData);

  useEffect(() => {
    getImages();
  }, [])

  return(
    <Radium.StyleRoot>
      <div className={classes.wrapper} style={styles.fadeIn}>
        {
          Object.keys(imagesData).map(elem => {
            return (
              <div>
                <h3 className={classes.user_name}>{elem}</h3>
                <div className={classes.container}>
                  {
                    //@ts-ignore
                    imagesData[elem].map(img => {
                      return (
                        <div className={classes.imgWrapper}>
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