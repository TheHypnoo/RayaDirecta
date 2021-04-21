var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    var descuentoTerceros = req.body.potencia * 6
    if(req.body.edad >= 28 && req.body.edad <= 50) {
        descuentoTerceros -= 100
    }

    if(req.body.sexo == 'M') {
        descuentoTerceros -= 25
    }

    if(req.body.anos >= 25){
        descuentoTerceros -= 200
    } else if(req.body.anos >= 10) {
        descuentoTerceros -= 100
    }

    if(req.body.partes == 1 || req.body.partes == 0) {
        descuentoTerceros -= 50
    } else if(req.body.partes == 2 || req.body.partes == 3) {
        descuentoTerceros -= 25
    }

    if(req.body.kilometros < 25000) {
        descuentoTerceros -= 25
    }

    if(req.body.garaje != 'N') {
        descuentoTerceros -= 100
    }

    var descuentoFranquicia = descuentoTerceros + 200
    var descuentoTodoRiesgo = descuentoTerceros + 500
    res.render('presupuestos', {
        seguroTerceros: descuentoTerceros,
        seguroFranquicia: descuentoFranquicia,
        seguroTodoRiesgo: descuentoTodoRiesgo
    })
})

module.exports = router;