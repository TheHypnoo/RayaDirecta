var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('Listado de productos!')
})

router.post('/login', (req, res) => {
    var nif = req.body.nif
    var password = req.body.password
    var error = false
    (nif != '12345678A') ? error = true : error = false
    (password != 'user1234') ? error = true : error = false
})

module.exports = router;