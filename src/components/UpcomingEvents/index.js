import React from 'react'
import styles from './upcoming.module.css'
import mc from './../../assets/mixing-coffee.jpg'
import ch from './../../assets/coffee-hardware.jpg'
import cf from './../../assets/coffee-factory.jpg'

const UpcomingEvent = () => {
  return (
    <section className={styles.eventSection}>
        <div className={styles.titleCont}>
            <h1>Our Upcoming Events</h1>
            <p className={styles.smallText}>We believe that we are big not because of us but because of them.
                They are the nes who motivate us to continue to innovate to provide a quality coffee taste 
                and comfortable space that is getting better every day.
            </p>
        </div>
        <div className={styles.imageRow}>
            <div className={styles.imageCont}>
                <img src={mc} alt="" className={styles.images}/>
                <div className={styles.bottomleft}>
                    <h3>LATTE ART WORKSHOP</h3>
                    <p className={styles.date}>20 Feb 2023</p>
                </div>
            </div>
            <div className={styles.imageCont}>
                <img src={ch} alt="" className={styles.images}/>
                <div className={styles.bottomleft}>
                    <h3>EXHIBITION COFFEE HARDWARE</h3>
                    <p className={styles.date}>20 Feb 2023</p>
                </div>
            </div>
            <div className={styles.imageCont}>
                <img src={cf} alt="" className={styles.images}/>
                <div className={styles.bottomleft}>
                    <h3>COFFEE FACTORY</h3>
                    <p className={styles.date}>20 Feb 2023</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default UpcomingEvent