import React, { useEffect } from 'react'

import layout from '../layout.module.css'
import styles from './Learn.module.css'

import edit from '../../symbols/edit.svg'
import correctSvg from '../../symbols/correct.svg'
import close from '../../symbols/close.svg'
import { useSelector, useDispatch } from 'react-redux'
import {
    selectWords,
    selectNumber,
    checkNumber,
    incorrect,
    correct,
    addToLearning
} from '../wordsSlice'
import arrow from '../../symbols/arrow.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Learn = () => {

    let data = useSelector(selectWords)
    const number = useSelector(selectNumber)

    const [translate, setTranslate] = useState('0')


    const dispatch = useDispatch()

    useEffect(() => { dispatch(addToLearning()) }, [])

    const showTranslate = () => {
        setTranslate('1')
        setTimeout(() => {
            setTranslate('0')
            setTimeout(() => {
                dispatch(checkNumber(), dispatch(incorrect()))
            }, 500);
        }, 2000);



    }


    return (
        <section className={styles.learn}>

            {data.length === 0 ? (

                <Link className={styles.text} to='/'>
                    <p className={styles.text}>None words for learning </p>
                </Link>

            ) : (
                    <div className={layout.position}>
                        <section className={layout.container} >
                            <Link to='/' >
                                <img
                                    src={arrow}
                                    alt="home"
                                    className={layout.arrow}
                                />
                            </Link>
                            <div className={styles.edit}>
                                <Link to={`/edit/${data[number].id}`} >
                                    <img src={edit} alt="edit" />
                                </Link>
                            </div>

                            <input
                                type="text"
                                className={`${styles.add__title} ${layout.title}`}
                                id={data[number].id}
                                value={data[number].word}
                                disabled
                            />



                            <input
                                type="text"
                                className={`${styles.add__translate} ${layout.translate}`}
                                style={{ opacity: `${translate}` }}
                                value={data[number].translate}
                                disabled
                            />

                            <div>
                                <div className={styles.container__button}>
                                    <button
                                        className={`${styles.learn__button_cancel} ${layout.button}`}
                                        onClick={() => showTranslate()}
                                    >
                                        <img src={close} alt="close" />
                                    </button>
                                    <button
                                        className={`${styles.learn__button_correct} ${layout.button}`}
                                        onClick={() => dispatch(checkNumber(), dispatch(correct()))}
                                    >
                                        <img
                                            src={correctSvg}
                                            alt="correct"
                                        />

                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                )
            }

        </section >

    )
}