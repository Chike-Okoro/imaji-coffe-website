import React from 'react'
import styles from './home.module.css'
import s2 from './../../assets/section_2.jpg';
import s1 from './../../assets/section_1.jpg';

const Home = () => {
  return (
    <section className={styles.heroSection}>
        <div>
            <h2>Choose your<br />Coffee &<br />Space</h2>
            <p>IMAJI coffee has been serving 20,000+ cups of coffee and providing <br />
            a comfortable lace for our customers to work since 2010.</p>
            <img src={s2} className={styles.section2} alt='1mage2'/>
        </div>
        <div>
            <img src={s1} className={styles.section1} alt='image1'/>
        </div>
    </section>
  )
}

export default Home;