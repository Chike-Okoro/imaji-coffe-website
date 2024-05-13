import React from 'react'
import styles from './community.module.css'
import mc from './../../assets/mixing-coffee.jpg'
import ch from './../../assets/coffee-hardware.jpg'
import cb from './../../assets/coffee-beans.jpg'
import pod from './../../assets/white-icon.svg'
import ar from './../../assets/arrow-right.svg'
import play from './../../assets/play.svg'
import forward from './../../assets/forward.svg'
import backward from './../../assets/backward.svg'
import volume from './../../assets/volume.svg'

const Community = () => {
  return (
    <section className={styles.commSection}>
        <h2 className={styles.title}>We grow together With Our Customer</h2>
        <div className={styles.container}>
            <div className={styles.container1}>
                <p className={styles.smallText}>We believe that we are big not because of us but because of them.
                They are the nes who motivate us to continue to innovate to provide a quality coffee taste 
                and comfortable space that is getting better every day.</p>
                <button className={styles.eventBtn}>Explore Other Event</button>
            </div>
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
        </div>

        <div className={styles.musicContainer}>
            <div className={styles.subContainer}>
                <img src={cb} alt="" className={styles.musicImage}/>
                <div className={styles.center}>
                    <img src={pod} alt="" className={styles.icon}/>
                    <p className={styles.podTitle}>Imaji Coffee Podcast</p>
                </div>
            </div>
            <div className={styles.subContainer1}>
                <div className={styles.sect1}>
                    <h3>Mix the taste of Indonesian Coffee</h3>
                    <div className={styles.episode}>
                        <p>Other Episode</p>
                        <img src={ar} alt="" className={styles.arrow}/>
                    </div>
                </div>
                <p className={styles.dateTime}>Feb 2023 . 1hr 13min</p>

                <div className={styles.buttonContainer}>
                    <div className={styles.seekContainer}>
                        <div className={styles.circle}>
                            <img src={play} alt="" className={styles.seekIcon}/>
                        </div>
                        <div className={styles.backward}>
                            <img src={backward} alt="" />
                            <span>10s</span>
                        </div>
                        <div className={styles.forward}>
                            <img src={forward} alt="" />
                            <span>10s</span>
                        </div>
                    </div>

                    <div className={styles.volumeContainer}>
                        <div className={styles.trackContainer}>
                            <div className={styles.soundKnob}>

                            </div>
                            <div className={styles.soundLine}>

                            </div>
                        </div>

                        <div className={styles.soundContainer}>
                            <p>00:03/1:13:56</p>
                            <div className={styles.speakerCont}>
                                <img src={volume} alt=""/>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        
        </div>
    </section>
  )
}

export default Community