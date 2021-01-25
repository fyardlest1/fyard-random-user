import getElement from './utils/getElement.js'
import getUser from './utils/fetchUser.js';

const img = getElement('.user-img')
const btn = getElement('.btn')
const title = getElement('.user-title')
const value = getElement('.user-value')

const btns = [...document.querySelectorAll('.icon')]

const showUser = async () => {
    // get user from api
    const person = await getUser()
    console.log(person)
    // display user    
}

window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)