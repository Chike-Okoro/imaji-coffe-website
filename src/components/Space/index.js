import React from 'react'
import styles from './space.module.css'
import space1 from './../../assets/pexels-brigitte-tohm-377903.jpg'
import space2 from './../../assets/pexels-jonathan-borba-2878713.jpg'
import space3 from './../../assets/pexels-lina-kivaka-1813466.jpg'
import space4 from './../../assets/pexels-vlada-karpovich-4451742.jpg'

const Space = () => {
  return (
    <section className={styles.spaceSection}>
        <h2 className={styles.spaceTitle}>We Provide Your Space For Your Work or Mini Event With Your Favourite coffee.</h2>
        <div className={styles.spaceText}>
            <p className={styles.first}>Our story begins in 2010 with a simple idea from our founder that the most comfortable place to work is anywhere,
                because ideas are not limited by space and time, and the most comfortable place is in a cafe where their favourite
                coffee is available.
            </p>
            <p className={styles.second}>All the best local coffee bean varieties from throughout Indonesia are available with us. Directly from
                selected farmers, high-quality beans are processed and roasted to perfection by ourselves, then passed
                on to our skilled baristas who are passionate about preparing a cup of longed-for happiness from home.
            </p>
        </div>
        <div className={styles.imgSpace}>
            <img src={space1} alt="space1" className={styles.normal}/>
            <img src={space2} alt="space2"  className={styles.alter}/>
            <img src={space3} alt="space3" className={styles.normal}/>
            <img src={space4} alt="space4"  className={styles.alter}/>
        </div>
    </section>
  )
}

export default Space