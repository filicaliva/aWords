import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
// import { act } from 'react-dom/test-utils';


export const wordsSlice = createSlice({
    name: 'words',
    initialState: {
        dataBase: JSON.parse(window.localStorage.getItem('data')) || [],
        learning: JSON.parse(window.localStorage.getItem('learning')) || [],
        word: '',
        translate: '',
        number: 0
    },
    reducers: {
        add: state => {
            if (state.word !== '' && state.translate !== '') {
                state.dataBase.push({
                    id: Date.now(),
                    word: state.word,
                    translate: state.translate,
                    repeat: 5,
                    box: 1
                })
                state.learning.length !== 0 ?
                    state.learning = [...state.learning, state.dataBase[state.dataBase.length - 1]] :
                    state.learning.push(...state.dataBase)
                state.word = state.translate = ''
                window.localStorage.setItem('learning', JSON.stringify(state.learning))
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
            arr.box = 1;
            arr.repeat = 5;
            window.localStorage.setItem('learning', JSON.stringify(state.learning))
            window.localStorage.setItem('data', JSON.stringify(state.dataBase))

        },
        correct: (state) => {
            const arr = state.learning[state.number]

            if (arr.repeat !== 0) {
                arr.repeat--
            } else {
                arr.repeat = 5;
                arr.box++
                state.dataBase.filter(item => item.id === arr.id).map(item => {
                    item.repeat = 5;
                    item.box = arr.box++
                })
                state.learning = state.learning.filter(item => item.id !== arr.id)
            }
            window.localStorage.setItem('learning', JSON.stringify(state.learning))
            window.localStorage.setItem('data', JSON.stringify(state.dataBase))
        },
        checkNumber: state => {
            state.number + 1 === +state.learning.length ?
                state.number = 0 : state.number++
        },
        
    },


})

export const { add, setWord, setTranslate, incorrect, checkNumber, correct } = wordsSlice.actions;

export const selectWords = state => state.words.learning;
export const selectWord = state => state.words.word;
export const selectTranslate = state => state.words.translate;
export const selectNumber = state => state.words.number;

export default wordsSlice.reducer;