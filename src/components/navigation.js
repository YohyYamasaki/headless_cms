import React from 'react'
import { NavLink, Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/colloid/hosaka/public/" activeClassName={styles.active}>
      <span className={styles.name}>Yuto Hosaka</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/colloid/hosaka/public/" activeClassName={styles.active}>
          About
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link
          to="/colloid/hosaka/public/research/"
          activeClassName={styles.active}
        >
          Research
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link
          to="/colloid/hosaka/public/resume/"
          activeClassName={styles.active}
        >
          Resume
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link
          to="/colloid/hosaka/public/links/"
          activeClassName={styles.active}
        >
          Links
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
