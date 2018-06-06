const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('home.ejs', {
        title: 'HOME'
    })
})

app.get('/about', (req, res)=>{
    res.render('about.ejs', {
        title: 'ABOUT'
    })
})
app.get('/products', (req, res)=>{
    res.render('products.ejs',{
        title: "Women's Collection"
    }) 
})
app.get('/api', (req, res)=>{
    res.json({
        name: 'Johnson'
    })
})
app.get('/product/:id', (req, res)=>{
    var data = [
        {
            id: 1,
            productName: "Chudithar"
        },
        {
            id: 2,
            productName: "Salwar"
        }
    ]
    var result;
    data.forEach((product) => {
        if(product.id == req.params.id){
            result = product
            return true
        }
    });
    console.log(result)
})
app.listen(3000)