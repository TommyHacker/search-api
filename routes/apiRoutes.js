const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();
const apiData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const apiController = require('../controllers/apiControllers');

router.get('/random', apiController.random);
router.get('/all', apiController.all);
router.get('/:id', apiController.getOne);
module.exports = router;

const app = express()

