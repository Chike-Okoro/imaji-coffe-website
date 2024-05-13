import React from 'react'
import styles from './navbar.module.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  
  const pathname = useLocation()

  console.log(pathname.pathname, "========");

  const returnClassName = (currPath, path) => {
    if(currPath === path) {
      return styles.current
    } else {
      return ""
    }
  }

  return (
    <nav>
        <div className={styles.navbar}>
          <div className={styles.imajiCoffee}>
            <h1 className={styles.title}>IMAJI</h1>
            <h1 className={styles.newTitle}>Coffee.</h1>
          </div>
          
          <div className={styles.links} onClick={()=>navigate}>
              <Link className={returnClassName(pathname.pathname, "/")} to="/">Home</Link>
              {/* <Link to="/menu">Menu</Link> */}
              <Link className={returnClassName(pathname.pathname, "/news")} to="/news">News</Link>
              <Link className={returnClassName(pathname.pathname, "/events")} to="/events">Events</Link>
              <button className={styles.orderBtn}>Order</button>
              <button className={styles.signInBtn}>Sign In</button>
          </div>
        </div>
    </nav>
  )
}

export default Navbar;

