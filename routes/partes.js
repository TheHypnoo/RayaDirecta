var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('Listado de productos!')
})

module.exports = router;