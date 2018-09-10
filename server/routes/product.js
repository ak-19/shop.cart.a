const productRouter = require('express').Router();
const Product = require('../models/product');

productRouter.get('/getall', (req,res) => {
  Product.find({})
         .then(products => {
           res.json(products);
         })
         .catch(e => res.send(e))
});


module.exports = productRouter;
