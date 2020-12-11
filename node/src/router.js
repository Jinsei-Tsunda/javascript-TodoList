const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const db = require(__dirname + '/../db_connect')

//read
router.get('/', (req, res) => {})
//create
router.post('/add', (req, res) => {})
//update
router.put('/update', (req, res) => {})
//delete
router.delete('/delete', (req, res) => {})

module.exports = router
