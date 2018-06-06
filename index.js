const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('home.ejs')
})

app.get('/about', (req, res)=>{
    res.render('about.ejs')
})

app.listen(3000)