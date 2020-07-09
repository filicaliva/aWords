import React from 'react'

import correct from '../../symbols/correct.svg'

import layout from '../layout.module.css'
import styles from './Edit.module.css'
import { useEffect } from 'react'
import { useParams, Link, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { edit, selectWord, selectTranslate, setWord, setTranslate, addToLearning } from '../wordsSlice'
import { Learn } from '../learn/Learn'




export const Edit = () => {

    const url = useParams()
    const dispatch = useDispatch()
    const title = useSelector(selectWord)
    const translate = useSelector(selectTranslate)
    const dataBase = JSON.parse(window.localStorage.getItem('data'))

    useEffect(() => {
        dataBase.map(item => {
            if (item.id === +url.id) {
                dispatch(setWord(item.word), dispatch(setTranslate(item.translate)))
            }
        })
    }, [])



    return (
        <section className={styles.edit} >
            <div className={layout.position}>
                <div className={`${layout.container}`}>
                    <input
                        type="text"
                        className={`${styles.edit__title} ${layout.title}`}
                        placeholder="Title"
                        value={title}
                        onChange={(e) => dispatch(setWord(e.target.value))}
                    />
                    <input
                        type="text"
                        className={`${styles.edit__translate} ${layout.translate}`}
                        placeholder="Translate"
                        value={translate}
                        onChange={(e) => dispatch(setTranslate(e.target.value))}
                    />
                    <div className={styles.buttonPosition}>
                        <Link to='/learn' >
                            <button
                                className={`${styles.edit__button} ${layout.button}`}
                                onClick={() => dispatch(addToLearning(), dispatch(edit({
                                    id: url.id,
                                    title,
                                    translate
                                })))}
                            > <img src={correct} alt="correct" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}