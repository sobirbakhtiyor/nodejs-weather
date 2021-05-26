const request = require('request')

const forecast = (lat, long, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=6a86c666a4a3daab4f713c78a7c21014&query=' + lat + ',' + long

  request({url, json: true}, (err, {body} = {}) => {
    if(err) {
        callback('Unable to connect to weather service!', undefined)
    } else if(body.error) {
        callback('Unable to find location!', undefined)
    } else {
        callback(undefined, body.current.weather_descriptions[0] + ', Temperature is ' + body.current.temperature)
    }
  })
}

module.exports = forecast