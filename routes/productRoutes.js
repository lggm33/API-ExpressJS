const express = require('express');
const ProductsService = require('./../services/productServices');
const validatorHandler = require('../middlewares/validatorHandler');
const {updateProductSchema, getProductSchema, createProductSchema} = require('../schemas/productSchemas');
const router = express.Router();
const service = new ProductsService();

router.get('/', 
  async (req, res) => {
  const products = await service.find();
  res.json({
    message:'success',
    data: products
  });
});

router.get('/:id',
  validatorHandler(getProductSchema, 'params') ,
  async (req, res) => {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
});

router.post('/',
  validatorHandler(createProductSchema, 'body') , 
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
});

router.patch('/:id',
  validatorHandler(updateProductSchema, 'params') ,
  validatorHandler(getProductSchema, 'body') ,
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      res.status(404).json({
        message: error.message
      });
    }

});

router.delete('/:id', 
  async (req, res) => {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
});

module.exports = router;