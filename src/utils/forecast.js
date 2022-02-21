const request = require('request')

/*
const url = 'http://api.weatherstack.com/current?access_key=825b16255822ddd8512a5c3cdee5c684&query= New York&units=s'

request({ url: url, json: true}, (error, response)=> {
    if(error) {
        console.log('unable to connect to weather services')
    } else if(response.body.error) {
        console.log('unable to find location')
    } else {
        console.log(response.body.current.weather_descriptions[0] + ' It is currently ' + response.body.current.temperature + ' degree out.')
        console.log('There is a ' + response.body.current.precip + '. chance of rain')
    }
    

})

*/
/*
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=825b16255822ddd8512a5c3cdee5c684&query= ' + latitude + ',' + longitude + '&units=s'
    request({url:url, json:true},(error, response) => {
        if(error) {
            callback('Unable to connect to location services', undefined)
        } else if(response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ' It is currently ' + response.body.current.temperature + ' degree out.There is a ' + response.body.current.precip + ' degree chance of rain')
        }
    })
}
*/
//using shorthand
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=825b16255822ddd8512a5c3cdee5c684&query= ' + latitude + ',' + longitude + '&units=s'
    request({url, json:true},(error, {body}) => {
        if(error) {
            callback('Unable to connect to location services', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degree out.There is a ' + body.current.precip + ' degree chance of rain')
        }
    })
}

module.exports = forecast