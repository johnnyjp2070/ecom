const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.send('Welcome')
})

app.get('/about', (req, res)=>{
    res.send('About Us')
})

app.listen(3000)