const request = require('request')

/*
const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoic21yaXRpMjEiLCJhIjoiY2t6dHV4eHAzNHBuczJxbnJja25ibjhyZSJ9.hG3VNSNx_sTMJ_nf5MOG9A&limit=1`'
request({url:url2, json:true}, (error,response) => {
    if(error){
        console.log('Unable to connect to location service')
    } else if(response.body.features.length ===0) {
        console.log('Unable to find try another search')
    } else {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log(latitude + ' ' + longitude)
    }
    
})
*/
/*
const geocode = (address, callback) => {
    const url =  'https://api.mapbox.com/geocoding/v5/mapbox.places/' + (address) + '.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoic21yaXRpMjEiLCJhIjoiY2t6dHV4eHAzNHBuczJxbnJja25ibjhyZSJ9.hG3VNSNx_sTMJ_nf5MOG9A&limit=1'

    request({url:url, json:true}, (error, response) => {
        if(error){
            callback('Unable to connect to location services', undefined)
        } else if(response.body.features.length === 0){
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}
*/

//use of shorthand
const geocode = (address, callback) => {
    const url =  'https://api.mapbox.com/geocoding/v5/mapbox.places/' + (address) + '.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoic21yaXRpMjEiLCJhIjoiY2t6dHV4eHAzNHBuczJxbnJja25ibjhyZSJ9.hG3VNSNx_sTMJ_nf5MOG9A&limit=1'

    request({url, json:true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location services', undefined)
        } else if(body.features.length === 0){
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
