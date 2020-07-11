import React from 'react';
import styles from './App.module.css';


import { Link } from 'react-router-dom'

export const App = () => {
  return (
    <div className={`${styles.main}`}>
      <ul className={`${styles.flex} ${styles.list}`}>
        <li>
          <Link to="/add" className={styles.text}>Add new word's</Link>
        </li>
        <li>
          <span className={styles.text} >|</span>
        </li>


        <li>
          <Link to="/learn" className={styles.text}>Learn new word's</Link>
        </li>
      </ul>
    </div>
  );
}
