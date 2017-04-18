let express = require("express")
    body = require("body-parser")
    config = require('./assets/config/config.js')

let app = express()

app.set('view engine', 'pug')
app.use(express.static('public'));

let author = config.configTheme.nameTheme
let country = config.location.country
let city = config.location.city

app.get('/', function (req, res) {
    res.render('index', {
        Test: "polo",
        author: author,
        country: country,
        city: city
    })
})

app.listen(8080)