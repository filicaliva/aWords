import React from 'react'

import correct from '../../symbols/correct.svg'

import layout from '../layout.module.css'
import styles from './Edit.module.css'

export const Edit = () => {
    return (
        <section className={styles.edit} >
            <div className={layout.position}>
                <div className={`${layout.container}`}>
                    <input
                        type="text"
                        className={`${styles.edit__title} ${layout.title}`}
                        name=""
                        id=""
                        placeholder="Title"
                    />
                    <input
                        type="text"
                        className={`${styles.edit__translate} ${layout.translate}`}
                        name=""
                        id=""
                        placeholder="Translate"
                    />
                    <div className={styles.buttonPosition}>
                        <button className={`${styles.edit__button} ${layout.button}`}> <img src={correct} alt="correct" /> </button>
                    </div>
                </div>
            </div>
        </section>
    )
}