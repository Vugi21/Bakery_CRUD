const Pastry = require('../models/pastry')


function getAll(req, res) {
    Pastry.find({}, function(err, pastries){
        if(err) throw err
    res.render('index', { 
      title: 'Gogal Bakery',
      pastries,
      user: req.user } );
  });
}
 

  module.exports = {
    getAll
  }