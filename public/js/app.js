//console.log('CLIENT SIDE JS LOADED')

/*
fetch('http://localhost:3000/weather?address=boston').then((response) => {
    response.json().then((data) => {
        if(data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)
        }
        
    })
})
*/

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

//messageOne.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading..'
    messageTwo.textContent = ''

    //console.log(location)
    //http://localhost:3000/weather?address=' + location
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                //console.log(data.error)
                messageOne.textContent = data.error
            } else {
                //console.log(data.location)
                messageOne.textContent = data.location
                //console.log(data.forecast)
                messageTwo.textContent = data.forecast
            } 
            
        })
    })
})
