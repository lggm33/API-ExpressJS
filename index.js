/* eslint-disable no-unused-vars */
const express = require('express')   
const routerAPI = require('./routes');
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/errorHandler');
const app = express()                
const cors = require('cors');
const port = 3000      

app.use(express.json())

const whitelist = ['http//localhost:8080', 'https://ejemplo_otra_direccion.com']
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Sitio no permitido'))
    }
  }
}
// app.use(cors(options))
app.use(cors())

//Pagina principal y publica
app.get('/', (req, res) => {         
  res.send('hola mundo')             
})

// Router de endpoints
routerAPI(app)

//Manejo de errores
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)


app.listen(port, () => {
  console.log('Mi port es ' + port)
})

