import get from './utils/getElement.js'
const URL = 'https://randomuser.me/api/'

const img = getElement('.user-img')
const btn = getElement('.btn')
const title = getElement('.user-title')
const value = getElement('.user-value')

const btns = [...document.querySelectorAll('.icon')]

