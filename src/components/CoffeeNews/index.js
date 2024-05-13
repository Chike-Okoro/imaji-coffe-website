import React from 'react'
import styles from './coffeenews.module.css'
import sc from './../../assets/sirap-coffee.jpg'
import cb from './../../assets/cold-brew-coffee.jpg'
import cs from './../../assets/coffee-sensation.jpg'
import wc from './../../assets/workshop-coffee-sharing-session.jpg'
import cofbrew from './../../assets/coffee-brewing.jpg'

const CoffeNews = () => {
  return (
    <section className={styles.newsSection}>
        <hr />
        <div className={styles.newsContainer}>
            <div className={styles.imageContainer}>
                <img src={sc} alt="" className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <h3>Visited Doesoen Sirap Coffee, The producer of robusta in central Java</h3>
                <span>4 min • August 19 2022</span>
            </div>
        </div>
        <hr />
        <div className={styles.newsContainer}>
            <div className={styles.imageContainer}>
                <img src={cb} alt="" className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <h3>Cold Brew Coffee, How to Drink Cold Coffee is More Enjoyable</h3>
                <span>4 min • August 19 2022</span>
            </div>
        </div>
        <hr />
        <div className={styles.newsContainer}>
            <div className={styles.imageContainer}>
                <img src={cs} alt="" className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <h3>Meet Coffee Tonic, the Sensation of Drinking Coffee-Flavored Soda</h3>
                <span>4 min • August 19 2022</span>
            </div>
        </div>
        <hr />
        <div className={styles.newsContainer}>
            <div className={styles.imageContainer}>
                <img src={wc} alt="" className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <h3>Workshop Coffee Sharing Session</h3>
                <span>4 min • August 19 2022</span>
            </div>
        </div>
        <hr />
        <div className={styles.newsContainer}>
            <div className={styles.imageContainer}>
                <img src={cofbrew} alt="" className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <h3>Workshop Coffee Brew</h3>
                <span>4 min • August 19 2022</span>
            </div>
        </div>
        <button>Load More</button>
    </section>
  )
}

export default CoffeNews