const {Router} = require('express')
const productsRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');
const categoriesRoutes = require('./categoriesRoutes');

// Router principal del servidor

function routerAPI(app) {
  const routerV1 = Router()
  app.use('/api/v1', routerV1) // Creo un raouter con un endpoint predefenido
  routerV1.use('/users', userRoutes) //Endpoint con todos los metodos HTTP y funciones de usuarios
  routerV1.use('/products', productsRoutes) //Endpoint con todos los metodos HTTP y funciones de productos
  routerV1.use('/categories', categoriesRoutes) //Endpoint con todos los metodos HTTP y funciones de categorias

  // const routerV2 = Router()
  // app.use('/api/v2', routerV2)
  // routerV2.use('/products', productsRoutes)
  // routerV2.use('/users', userRoutes)
  // routerV2.use('/categories', categoriesRoutes)
  
}

module.exports = routerAPI