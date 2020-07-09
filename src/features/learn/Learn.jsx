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

export const Learn = () => {

    let data = useSelector(selectWords)
    const number = useSelector(selectNumber)

    const dispatch = useDispatch()

    useEffect(() => { dispatch(addToLearning()) }, [dispatch])

  


    return (
        <section className={styles.learn}>
            {data.length === 0 ? (
                <p>None words for learning </p>
            ) : (
                    <div className={layout.position}>
                        <section className={layout.container} >
                            <div className={styles.edit}>
                                <img src={edit} alt="edit" />
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
                                value={data[number].translate}
                                disabled
                            />
                            <div>
                                <div className={styles.container__button}>
                                    <button
                                        className={`${styles.learn__button_cancel} ${layout.button}`}
                                        onClick={() => dispatch(checkNumber(), dispatch(incorrect()))}
                                    >
                                        <img src={close} alt="close" />
                                    </button>
                                    <button
                                        className={`${styles.learn__button_correct} ${layout.button}`}
                                        onClick={() => dispatch(checkNumber(), dispatch(correct()))}

                                    >
                                        <img src={correctSvg} alt="correct" />
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                )}


        </section>

    )
}