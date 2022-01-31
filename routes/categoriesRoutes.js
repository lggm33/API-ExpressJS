const express = require('express');
const router =  express.Router()

router.get('/:categoryId/products/:productsId', (req, res) => {   // :param = parametro mediante la url
  const { categoryId, productsId} = req.params
  res.json({
    productsId,
    categoryId
  })
})

module.exports = router