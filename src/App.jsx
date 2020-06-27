import React from 'react';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={`${styles.main}`}>
      <ul className={`${styles.flex} ${styles.list}`}>
        <li>
          <a href="/add" className={styles.text}>Add new word's</a>
        </li>
        <li>
          <span className={styles.text} >|</span>
        </li>


        <li>
          <a href="/learn" className={styles.text}>Learn new word's</a>
        </li>
      </ul>
    </div>
  );
}
