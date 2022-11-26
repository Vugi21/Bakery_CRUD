const Pastry = require('../models/pastry')

  
  function create(req, res) {
    
    Pastry.findById(req.params.id, function(err, itemDescription) {
        itemDescription.reviews.push(req.body);
        itemDescription.save(function(err) {
        console.log(itemDescription)
        res.redirect(`/pastries/${itemDescription._id}`);
      });
    });
  }


module.exports = {
    create
  };