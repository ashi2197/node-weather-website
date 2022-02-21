//for static file path
const path = require('path')
const express = require('express')

//for partials
const hbs = require('hbs')

//for api
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

console.log(__dirname)
//console.log(path.join(__dirname, '../..'))
//console.log(path.join(__dirname, '../public'))


const app = express()
//heroku
const port = process.env.PORT || 3000

//define path for Express config
//static file
const publicDirectoryPath = path.join(__dirname, '../public')
//handlebars : dynamic: template engine
const viewsPath = path.join(__dirname, '../template/views')
//partials
const partialsPath = path.join(__dirname, '../template/partials')

//to set handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
//partials
hbs.registerPartials(partialsPath)
//setup static directory to setup
app.use(express.static(publicDirectoryPath))

//app.com
//app.com/help    : /help - route
//app.com/about

/*
app.get('/', (req, res) => {
    res.send('<h1> Weather </h1>')
})
*/


/*
app.get('/help', (req,res) => {
    res.send([{
        name:'Anu'
    }, {
        name : 'Ashi'
    }])
})

app.get('/about', (req,res) => {
    res.send({
        name: 'Smriti',
        age : 22
    })
})


app.get('/about', (req,res) => {
    res.send('<h1> About</h1>')
})
*/

//for index.hbs : render is for template engine - views
app.get('/', (req,res) => {
    res.render('index', {
        title: 'weather App',
        name : 'Smriti'
    })
})

app.get('/about', (req,res)=> {
    res.render('about', {
        title: 'About me',
        name: 'Smriti'
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        helpText: 'This is my helpful text',
        title: 'Help',
        name : 'Smriti'
    })
})

app.get('/weather', (req,res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {})=>{
        if(error) {
            return res.send({error})
        } 

        forecast(latitude, longitude, (error, forecastData)  => {
            if(error) {
                return res.send({error})
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address

            })

        })
    })
    
})

app.get('/products', (req,res) => {
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }
    
    console.log(req.query.search)
    res.send({
        products:[]
    })
})

app.get('/help/*', (req,res) => {
    res.render('404',{
        title: '404 title',
        name: 'smriti',
        errorMessage:'Help article not found'
    })
})

app.get('*',(req,res) => {
    res.render('404',{
        title: '404',
        name: 'Smriti',
        errorMessage: 'Page not found'
    })
})

app.listen(port, () => {
    console.log('Server started on port ' + port)
})


