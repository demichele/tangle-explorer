var express = require('express');
var router = express.Router();

var address_controller = require('../controllers/addressController');

router.get('/', address_controller.get_address);
router.post('/', address_controller.get_address);
router.get('/:id', address_controller.solve_address);




module.exports = router;
