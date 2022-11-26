
const Pastry = require('../models/pastry')

function getAll(req, res){
    Pastry.find({}, function(err, pastries){
        if(err) throw err
    res.render('pastries/index', { 
        pastries, title: 'All Pastries',
        user: req.user
    });
    });
}


function newPastry(req, res){
    res.render('pastries/new', {
        title: 'Add New Pastry Here',
        user: req.user
    })
}

function create(req, res){
    const newProduct = new Pastry(req.body)

    newProduct.save(function(err){
        if(err) return res.render('error')
        //console.log(newProduct)
        res.redirect('/pastries')
    })
}
function getOnePastry(req, res){
    Pastry.findById(req.params.id, function(err, itemDescription){
        
        if(err) console.log(err)
            res.render('pastries/show', {
                title: 'Product Description',
                itemDescription, 
                user: req.user
            })
    })
}


function edit(req, res){
    Pastry.findById(req.params.id, function(err, itemEdit){
        if(err) console.log(err)
        res.render('pastries/edit', {
            title: 'Edit Product',
            itemEdit, 
            user: req.user
        })
    })
}   
function update(req, res){
Pastry.findById(req.params.id, function(err, updatedItemDescription){
    const obj = Object.assign({},req.body)

    console.log(obj)
const productParams = new Pastry( {
    
    title : obj.title,
    price : obj.price,
    detail : obj.detail
})
console.log(productParams.price)
console.log(productParams.detail)
console.log('body below')

    Pastry.updateOne({_id: req.params.id}, obj, function(err){
        console.log(err)
    res.redirect(`/pastries/${updatedItemDescription._id}`)
   }) 

    })

    //res.send('to be updated')
}

function deleteProduct(req, res){
    // console.log(req.params.id)
    // Pastry.deleteOne({_id: req.params.id})
    const filter = {
        _id: req.params.id
    }
    Pastry.findOneAndDelete(filter, function(err){

        res.redirect('/pastries')
    }) 
}

module.exports = {
    new: newPastry,
    create,
    getAll,
    getOnePastry,
    edit,
    update,
    delete: deleteProduct
  }