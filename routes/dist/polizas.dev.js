"use strict";

var express = require('express');

var router = express.Router();
router.get('/', function (req, res) {
  res.send('Listado de productos!');
});
router.get('/:P[0-9]{8}', function (req, res) {
  res.send('Poliza');
});
module.exports = router;