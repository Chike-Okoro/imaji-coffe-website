import React from 'react'
import styles from './favorite.module.css'
import cc from './../../assets/coffee-cookies.jpg'
import ft from './../../assets/french-toast.jpg'
import ic from './../../assets/imaji-coffee.jpg'

const Favourite = () => {
  return (
    <section className={styles.faveSection}>
        <div className={styles.faveSection1}>
            <h2 className={styles.faveTitle}>Find Your Favorite Menu</h2>
            <button className={styles.faveBtn}>Explore Other Menu</button>
        </div>
        <div className={styles.faveSection2}>
            <div>
                <img src={cc} alt="" className={styles.faveImage} />
                <h3 className={styles.menuName}>RISTERETTO BIANCO</h3>
                <p className={styles.subText}>Available Only at Cafe and Delivery</p>
                <h3 className={styles.price}>$5,00</h3>
                <p className={styles.appLink}>Get 20% Off in App</p>
            </div>

            <div>
                <img src={ft} alt="" className={styles.faveImage} />
                <h3 className={styles.menuName}>FRENCH TOAST WITH SUGAR</h3>
                <p className={styles.subText}>Available Only at Cafe and Delivery</p>
                <h3 className={styles.price}>$5,00</h3>
                <p className={styles.appLink}>Get 20% Off in App</p>
            </div>

            <div>
                <img src={ic} alt="" className={styles.faveImage} />
                <h3 className={styles.menuName}>AT HOME HOUSE BLEND</h3>
                <p className={styles.subText}>Available Only at Cafe and Delivery</p>
                <h3 className={styles.price}>$5,00</h3>
                <p className={styles.appLink}>Get 20% Off in App</p>
            </div>
        </div>
    </section>
  )
}

export default Favourite