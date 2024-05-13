import React from 'react'
import cr from './../../assets/coffee-restaurant.jpg'
import styles from './subnews.module.css'

const SubNews = () => {
  return (
    <section className={styles.subNewsSection}>
        <div className={styles.heading}>
          <div>
            <h2>Latest News</h2>
            <p>Get the latest updates and deeper coffee experience from IMAJI Coffee</p>
          </div>
          <div>
          <button>See all News</button>
          </div>
        </div>
        <img src={cr} alt="" className={styles.image}/>
        <h3>Collaboration to Develop Coffee and Beverage Industry Expertise in Indonesia</h3>
        <p className={styles.date}>4 min • August 19 2022</p>
    </section>
  )
}

export default SubNews