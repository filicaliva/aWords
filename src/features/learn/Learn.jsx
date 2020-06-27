import React from 'react'

import layout from '../layout.module.css'
import styles from './Learn.module.css'

import edit from '../../symbols/edit.svg'
import correct from '../../symbols/correct.svg'
import close from '../../symbols/close.svg'

export const Learn = () => {
    return (
        <section className={styles.learn}>
            <div className={layout.position}>
                <section className={layout.container} >
                    <div className={styles.edit}>
                        <img src={edit} alt="edit" />
                    </div>
                    <input
                        type="text"
                        className={`${styles.add__title} ${layout.title}`}
                        id=""
                        value="Title"
                        disabled
                    />
                    <input
                        type="text"
                        className={`${styles.add__translate} ${layout.translate}`}
                        id=""
                        value='Translate'
                        disabled
                    />
                    <div>
                        <div className={styles.container__button}>
                            <button className={`${styles.learn__button_cancel} ${layout.button}`}>
                                <img src={close} alt="close" />
                            </button>
                            <button className={`${styles.learn__button_correct} ${layout.button}`}>
                                <img src={correct} alt="correct" />
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </section>

    )
}