const express = require('express')   //modulo para crear el servidor
const faker = require('faker')

const router = express.Router();


router.get('/', (req, res) => {
  const {size} = req.query
  const limit = size || 10
  const products = []
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }
  res.json(products)
})

router.get('/filter', (req, res) => {
  res.send('Yo soy un filtro')
})

router.get('/:id', (req, res) => {
  const {id} = res.params
  res.json({
    id,
    name: 'Product2',
    price: 2000,
  })
})

module.exports = router