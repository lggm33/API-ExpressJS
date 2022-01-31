const {Router} = require('express')
const productsRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');
const categoriesRoutes = require('./categoriesRoutes');

function routerAPI(app) {
  const routerV1 = Router()
  app.use('/api/v1', routerV1)
  routerV1.use('/products', productsRoutes)
  routerV1.use('/users', userRoutes)
  routerV1.use('/categories', categoriesRoutes)

  const routerV2 = Router()
  app.use('/api/v2', routerV2)
  routerV2.use('/products', productsRoutes)
  routerV2.use('/users', userRoutes)
  routerV2.use('/categories', categoriesRoutes)
  
}

module.exports = routerAPI