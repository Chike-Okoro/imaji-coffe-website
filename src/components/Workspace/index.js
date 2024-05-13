import React from 'react'
import styles from './workspace.module.css'
import w1 from './../../assets/workspace1.jpg'
import w2 from './../../assets/workspace2.jpg'
import w3 from './../../assets/workspace3.jpg'


const Workspace = () => {
  return (
    <section className={styles.workSection}>
        <h2 className={styles.title}>8 Comfy Workspace</h2>
        <p className={styles.subTitle}>We provide many attractive and unique workspaces so that you will have no trouble finding the workspace you want.</p>
        <div className={styles.workspaceView}>
            <div className={styles.container}>
                <img src={w1} alt="" className={styles.workImage}/>
                <div className={styles.topLeft}>
                    <h3>WHITEWALL</h3>
                    <p className={styles.subText}>Workspace</p>
                </div>               
            </div>

            <div className={styles.container}>
                <img src={w2} alt="" className={styles.workImage}/>
                <div className={styles.topLeft}>
                    <h3>LONG WINDOW</h3>
                    <p className={styles.subText}>Workspace</p>
                </div>
            </div>

            <div className={styles.container}>
                <img src={w3} alt="" className={styles.workImage}/>
                <div className={styles.topLeft}>
                    <h3>GENGS SPACE</h3>
                    <p className={styles.subText}>Workspace</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Workspace