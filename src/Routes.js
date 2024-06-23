import express from 'express'
import { createModel, deleteModel, getAllModels, getModel, updateModel } from './Controller.js'
const router = express.Router()

router.get('/', getAllModels)
router.get('/:id', getModel)
router.post('/', createModel)
router.put('/:id', updateModel)
router.delete('/:id', deleteModel)

export default router






/*
const express = require('express');
const router = express.Router();
const connection = require('./database');

// Ruta /api/ahorros
router.get('/ahorros', (req, res) => {
  res.send("Estas en /api/ahorros");
});

// Ruta /api/movimientos
router.get('/movimientos', (req, res) => {
  res.send("Estas en /api/movimientos");
});

// Ruta /api/ahorro
router.get('/ahorro', (req, res) => {
  console.log('Ruta /ahorro ha sido llamada');
  connection.query('SELECT * FROM hennacontrol.ahorro', (err, results, fields) => {
    if (err) {
      console.error('Error executing query: ' + err.stack);
      res.status(500).send('Error executing query: ' + err.stack);
      return;
    }
    console.log('Results: ', results);
    res.json(results);
  });
});

module.exports = router;
*/