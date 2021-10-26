let express = require ('express');
let router = express.Router();
let mongoose= require('mongoose');

let customer = require ('../models/customer');
let bookController = require('../controllers/customer');


router.get ('/', bookController.displayCustomerList);




    router.get ('/add', bookController.displayAddPage);
    
 
router.post('/add', bookController.processAddPage);


router.get('/edit/:id', bookController.dispalyEditPage);
 router.post('/edit/:id', bookController.processEditPage);
router.get ('/delete/:id',bookController.performDelete);


module.exports= router;
