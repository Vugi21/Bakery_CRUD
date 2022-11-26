const express = require('express');
const { route } = require('.');
const router = express.Router();
const pastriesCtrl = require('../controllers/pastries');

//get all pastries
router.get('/', pastriesCtrl.getAll)

//get new pastry
router.get('/new', pastriesCtrl.new)

//create a post route
router.post('/', pastriesCtrl.create)

//get one product
router.get('/:id', pastriesCtrl.getOnePastry)

//edit a product
router.get('/:id/edit', pastriesCtrl.edit)

//push changes (update)
router.put('/:id', pastriesCtrl.update)

//delete a product
router.delete('/:id', pastriesCtrl.delete)



module.exports = router