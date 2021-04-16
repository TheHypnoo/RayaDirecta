const express = require('express')
require('pug')
var presupuestos = require('./routes/presupuestos')
var polizas = require('./routes/polizas')
var clientes = require('./routes/clientes')
var partes = require('./routes/partes')
const app = express()
const port = 80


app.use(express.urlencoded({
    extended: true
}))

app.use(express.static('public'))

app.set('views', './views')

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('home.pug')
})

app.get('/info', (req, res) => {
    res.render('info.pug')
})

app.get('/polizas', (req, res) => {
    res.render('polizas.pug')
})

app.get('/partes', (req, res) => {
    res.render('partes.pug')
})

app.use('/presupuesto', presupuestos)

app.use('/polizas', polizas)

app.use('/clientes', clientes)

app.use('/partes', partes)

app.get('/*', (req, res) => {
    res.render('error.pug');
})

app.listen(port, () => {
    console.log('Start now')
})