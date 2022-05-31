const express = require('express');
const router = express.Router();
const apiData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const apiController = require('../controllers/apiControllers');

router.get('/:id', apiController.getOne);


module.exports = router;
