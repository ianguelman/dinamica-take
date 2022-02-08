const express = require('express')
const router = express.Router()
const functions = require('../controllers/petshop')

router.post('/marcarHorario/', functions.marcarHorario)
router.get('/verificarHorario/',functions.verificarHorario)



module.exports = router