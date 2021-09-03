var express = require('express')
var path = require('path')
// var bodyParser = require('body-parser')
var session = require('express-session')
var router = require('./router')
var app = express()
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules/')))

app.engine('html', require('express-art-template'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.set('views', path.join(__dirname,'./views/'))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}))


app.use(router)

app.use(function(req, res) {
    res.render('404.html')
})

app.listen(3000, function(){
    console.log('running')
})