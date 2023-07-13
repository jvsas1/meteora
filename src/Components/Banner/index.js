import React from 'react'
import banner from './Banner 1 - Desktop.png'
import styles from './Banner.module.css'
import banner2 from './Banner carousel 2 _ 1440.png'
import banner3 from './Banner carousel 3 _ 1440 (1).png' 

import banner1_tablet from './Tablet/Image (1).png'

import banner2_tablet from './Tablet/Banner carousel 2 _ 768.png'

import banner3_tablet from './Tablet/Banner carousel 3 _ 768.png'

import banner1_mobile from './Mobile/Image (2).png'

import banner2_mobile from './Mobile/Banner carousel 2 _ 375.png'

import banner3_mobile from './Mobile/Banner carousel 3 _ 375 (1).png'


import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';

export default function Banner() {
  return (
    <div className={styles.banner_container} > 

      <Carousel className={styles.carousel}>
        <Carousel.Item>
          <img className={styles.banner} src={banner}/>
        </Carousel.Item>
        <Carousel.Item >
          <img  className={styles.banner} src={banner2}/>
        </Carousel.Item>
        <Carousel.Item >
          <img  className={styles.banner} src={banner3}/>
        </Carousel.Item>
      </Carousel> 

      <Carousel className={styles.carousel_tablet}>
        <Carousel.Item>
          <img className={styles.banner1_tablet} src={banner1_tablet}/>
        </Carousel.Item>
        <Carousel.Item >
          <img  className={styles.banner2_tablet} src={banner2_tablet}/>
        </Carousel.Item>
        <Carousel.Item >
          <img  className={styles.banner3_tablet} src={banner3_tablet}/>
        </Carousel.Item>
      </Carousel> 

    
      <Carousel className={styles.carousel_mobile}>
        <Carousel.Item>
          <img className={styles.banner1_mobile} src={banner1_mobile}/>
        </Carousel.Item>
        <Carousel.Item >
          <img  className={styles.banner2_mobile} src={banner2_mobile}/>
        </Carousel.Item>
        <Carousel.Item >
          <img  className={styles.banner3_mobile} src={banner3_mobile}/>
        </Carousel.Item>
      </Carousel> 

    </div>


    

  )
}

