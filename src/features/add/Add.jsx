import React from 'react'

import layout from '../layout.module.css'
import styles from './Add.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
    add,
    selectWord,
    setWord,
    setTranslate,
    selectTranslate
} from '../wordsSlice'


export const Add = () => {

    const word = useSelector(selectWord)
    const translate = useSelector(selectTranslate)
    const dispatch = useDispatch()


    return (

        <section className={styles.add} >
            <div className={layout.position}>
                <div className={`${layout.container}`}>
                    <input
                        type="text"
                        className={`${styles.add__title} ${layout.title}`}
                        placeholder="Title"
                        value={word}
                        onChange={(e) => dispatch(setWord(e.target.value))}
                    />
                    <input
                        type="text"
                        className={`${styles.add__translate} ${layout.translate}`}
                        placeholder="Translate"
                        value={translate}
                        onChange={(e) => dispatch(setTranslate(e.target.value))}
                        onKeyPress={(e) => e.key === 'Enter' ?  dispatch(add({ word, translate })) : null }
                    />

                    <button
                        className={`${styles.add__button} ${layout.button}`}
                        onClick={() => dispatch(add({ word, translate }))}
                    >
                        <span>+</span>
                    </button>

                </div>
            </div>
        </section>
    )
}