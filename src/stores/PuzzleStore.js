/* eslint-disable import/no-anonymous-default-export */
import words from '../words.json'

export default {
    word1:'',
    word2:'',
    word3:'',
    word4:'',
    guesses:[],
    currentGuess: 2,
    get won1() {
        return this.guesses[this.currentGuess-1] === this.word1
    },
    get won2() {
        return this.guesses[this.currentGuess-1] === this.word2
    },
    get won3() {
        return this.guesses[this.currentGuess-1] === this.word3
    },
    get won4() {
        return this.guesses[this.currentGuess-1] === this.word4
    },
    get lost() {
        return this.currentGuess === 9
    },
    init() {
        this.word1 = words[Math.round(Math.random() * words.length)]
        this.word2 = words[Math.round(Math.random() * words.length)]
        this.word3 = words[Math.round(Math.random() * words.length)]
        this.word4 = words[Math.round(Math.random() * words.length)]
        this.guesses.replace(new Array(6).fill(''))
        this.currentGuess = 0
    }
}