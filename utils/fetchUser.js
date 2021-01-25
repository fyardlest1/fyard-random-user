const URL = 'https://randomuser.me/api/'

const getUser  = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    // destructure
    const person = data.results[0]
    const {phone, email} = person
    const {large: image} = person.picture
    const {password} = person.login 
    const {firs, last} = person.name 
    const {dob: {age}} = person
    const {street: {number, name}} = person.location
    return {
        phone,
        email,
        image,
        password,
        age,
        street: `${number} ${name}`,
        name: `${firs} ${last}`
    }
}

export default getUser