import React from 'react'
import styles from './footer.module.css'
import ig from './../../assets/instagram.svg'
import tt from './../../assets/tiktok.svg'
import yt from './../../assets/youtube.svg'
import tw from './../../assets/twitter.svg'
import tg from './../../assets/telegram.svg'
import apple from './../../assets/apple.svg'
import gp from './../../assets/google-play.svg'

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <h1>Our Location</h1>
      <div className={styles.extraInfo}>
        <p>JI. Bangrigan No 19, RT.11/RW.2, Kota Surabaya 60124</p>
        <p>Customer Service +6282-2876-6862</p>
        <p>We Are Open from Sun-Mon 10 AM - 10PM </p>
      </div>
      <hr />
      <div className={styles.access}>
        <div className={styles.icons}>
          <ul>
            <li><img src={ig} alt="" /></li>
            <li><img src={tt} alt="" /></li>
            <li><img src={yt} alt="" /></li>
            <li><img src={tw} alt="" /></li>
            <li><img src={tg} alt="" /></li>
          </ul>
        </div>
        <div className={styles.download}>
          <p>Delivery Order</p>
          <div className={styles.downloadBtn}>
            <img src={apple} alt="" />
            <div>
              <p>Download on the</p>
              <h4>App Store</h4>
            </div>
          </div>
          <div className={styles.downloadBtn}>
            <img src={gp} alt="" />
            <div>
              <p>Get it on</p>
              <h4>Play Store</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2023 IMAJI COFFEE, All rights reserved.</p>
        <p>Terms and Condition | Privacy Policy</p>
      </div>
    </footer>
  )
}

export default Footer