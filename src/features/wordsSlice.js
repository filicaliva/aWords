import { createSlice } from '@reduxjs/toolkit';
// import { act } from 'react-dom/test-utils';


export const wordsSlice = createSlice({
    name: 'words',
    initialState: {
        dataBase: JSON.parse(window.localStorage.getItem('data')) || [],
        learning: [],
        word: '',
        translate: '',
        number: 0
    },
    reducers: {
        add: state => {
            if (state.word !== '' && state.translate !== '') {
                state.dataBase.push({
                    id: Math.floor(Math.random() * Date.now()),
                    word: state.word,
                    translate: state.translate,
                    repeat: 5,
                    box: 0,
                    time: Date.now()
                })
                state.word = state.translate = ''
                window.localStorage.setItem('data', JSON.stringify(state.dataBase))
            }

        },
        setWord: (state, action) => {
            state.word = action.payload
        },
        setTranslate: (state, action) => {
            state.translate = action.payload
        },
        incorrect: (state) => {
            const arr = state.learning[state.number]
            arr.box = 0;
            arr.repeat = 5;
            window.localStorage.setItem('learning', JSON.stringify(state.learning))
            window.localStorage.setItem('data', JSON.stringify(state.dataBase))

        },
        correct: (state) => {
            const arr = state.learning[state.number]
            if (arr.repeat !== 1) {
                arr.repeat--
            } else {
                arr.box++
                if (arr.box > 7) {
                    state.dataBase = state.dataBase.splice(state.number - 1, state.number)
                    state.learning = state.learning.filter(item => item.id !== arr.id)
                } else {
                    arr.repeat = 5;
                    arr.time = Date.now()
                    state.dataBase
                        .filter(item => item.id === arr.id)
                        .map(item => {
                            item.repeat = 5
                            item.box = arr.box++
                            item.time = arr.time
                        })
                    state.learning = state.learning.filter(item => item.id !== arr.id)
                        
                }
            }
            window.localStorage.setItem('learning', JSON.stringify(state.learning))
            window.localStorage.setItem('data', JSON.stringify(state.dataBase))
        },
        checkNumber: state => {
            state.number + 1 < +state.learning.length ?
                state.number++  : state.number = 0
        },
        addToLearning: state => {
            const boxes = [
                {
                    number: 0,
                    time: 0
                },
                {
                    number: 1,
                    time: 600000
                },
                {
                    number: 2,
                    time: 3600000
                },
                {
                    number: 3,
                    time: 21600000
                },
                {
                    number: 4,
                    time: 86400000
                },
                {
                    number: 5,
                    time: 432000000
                },
                {
                    number: 6,
                    time: 1209600000
                },
                {
                    number: 7,
                    time: 2629746000
                }
            ]
            for (let i = 0; i < state.dataBase.length; i++) {
                const el = state.dataBase[i];
                boxes.map(item => {
                    if (item.number === el.box && el.time + item.time <= Date.now()) {
                        state.learning.push(el)
                    }
                })
            }

        }

    }
})

export const { add, setWord, setTranslate, incorrect, checkNumber, correct, addToLearning } = wordsSlice.actions;

export const selectWords = state => state.words.learning;
export const selectWord = state => state.words.word;
export const selectTranslate = state => state.words.translate;
export const selectNumber = state => state.words.number;

export default wordsSlice.reducer;