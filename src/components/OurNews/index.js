import React from 'react'
import styles from './ournews.module.css'
import cr from './../../assets/coffee-restaurant.jpg'

const OurNews = () => {
  return (
    <section className={styles.ourNewsSection}>
        <h2>Our News</h2>
        <p>Get the latest updates and deeper coffee experience from IMAJI Coffee</p>
        <img src={cr} alt="" className={styles.image}/>
        <h3>Collaboration to Develop Coffee and Beverage Industry Expertise in Indonesia</h3>
        <span className={styles.date}>4 min • August 19 2022</span>
    </section>
  )
}

export default OurNews