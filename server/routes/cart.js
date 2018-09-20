const cartRouter = require('express').Router();
const Product = require('../models/product');
const Cart = require('../models/cart');
const productValidation = require('../validation/product');

cartRouter.post('/', (req,res) => {
  const cart = req.body;

  const newCart = new Cart(cart);
  newCart
  .save()
  .then(res => {
    res.send('Hello');

  })
  .catch(e => {
    console.log(e);
    res.send('Hello');
  })
  // const {error, isValid} = productValidation(product);
  // if (!isValid) {
  //   return res.json({error})
  // }
  // const {name} = product;
  // Product.find({name})
  // .then(foundProduct => {
  //   if (foundProduct && foundProduct.length) {
  //     const error = {name: 'Product with that name already exists'};
  //     return res.json({error})
  //   }
  //   new Product(product)
  //   .save()
  //   .then(r => {
  //     res.json(r);
  //   })
  //   .catch(e => {
  //     res.send(e);
  //   });
  // })
  // .catch(e => {
  //   console.log(e);
  //   res.send(e);
  // })
});

module.exports = cartRouter;
