import React from 'react'

import layout from '../layout.module.css'
import styles from './Add.module.css'

export const Add = () => {

    return (

        <section className={styles.add} >
            <div className={layout.position}>
                <div className={`${layout.container}`}>
                    <input
                        type="text"
                        className={`${styles.add__title} ${layout.title}`}
                        name=""
                        id=""
                        placeholder="Title"
                    />
                    <input
                        type="text"
                        className={`${styles.add__translate} ${layout.translate}`}
                        name=""
                        id=""
                        placeholder="Translate"
                    />

                        <button className={`${styles.add__button} ${layout.button}`}> <span>+</span> </button>
            
                </div>
            </div>
        </section>
    )
}