import React from 'react'
import styles from './closed.module.css'
import la from './../../assets/latte-art.jpg'
import rest from './../../assets/working-restaurant.jpg'
import pc from './../../assets/public-cupping.jpg'
import chev from './../../assets/pexels-chevanon-302892.jpg'
import hcm from './../../assets/heavy-coffee-machine.jpg'

const ClosedEvent = () => {
  return (
    <section className={styles.closedSection}>
        <h2>Events Closed</h2>
        <div className={styles.imageRow}>
            <div className={styles.extImageCont}>
                <img src={la} alt="" className={styles.extImages}/>
                <div className={styles.bottomleft}>
                    <h3>BEZERRA LATTE ART COMPETITION</h3>
                    <p className={styles.date}>20 Feb 2023</p>
                </div>
            </div>
            <div className={styles.imageCont}>
                <img src={rest} alt="" className={styles.images}/>
                <div className={styles.bottomleft}>
                    <h3>SENSORY AND CUPPING CLASS</h3>
                    <p className={styles.date}>20 Mar 2023</p>
                </div>
            </div>
        </div>
        <div className={styles.imageRow}>
            <div className={styles.imageCont}>
                <img src={pc} alt="" className={styles.images}/>
                <div className={styles.bottomleft}>
                    <h3>PUBLIC CUPPING</h3>
                    <p className={styles.date}>20 Mar 2023</p>
                </div>
            </div>
            <div className={styles.imageCont}>
                <img src={chev} alt="" className={styles.images}/>
                <div className={styles.bottomleft}>
                    <h3>COMPETITIONS AND SHOWCASES</h3>
                    <p className={styles.date}>20 Mar 2023</p>
                </div>
            </div>
            <div className={styles.imageCont}>
                <img src={hcm} alt="" className={styles.images}/>
                <div className={styles.bottomleft}>
                    <h3>ART AND COFFEE FESTIVAL</h3>
                    <p className={styles.date}>20 Mar 2023</p>
                </div>
            </div>
        </div>
        <button>Load More</button>
    </section>
  )
}

export default ClosedEvent