// var express = require('express');
// var router = express.Router();
import express, { Router } from 'express'


const router = Router();
/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
