import React from 'react'
import { NavLink, Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <span className={styles.name}>Yuto Hosaka</span>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/main/" activeClassName={styles.active}>
          About
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/research/" activeClassName={styles.active}>
          Research
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/resume/" activeClassName={styles.active}>
          Resume
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/links/" activeClassName={styles.active}>
          Links
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
