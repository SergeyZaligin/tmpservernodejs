var express = require('express');
var router = express.Router();
const controller = require('../controllers/admin');
//const guardRouter = require('../middleware/guardRouter');

router.get('/', controller.index);

module.exports = router;