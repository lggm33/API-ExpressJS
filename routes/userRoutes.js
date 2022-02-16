const express = require('express'); 
const userServices = require('../services/userServices');
const router = express.Router();
const service = new userServices()

router.get('/', async (req, res) => {
  const users = await service.find()
  res.json({
    message: 'success',
    data: users
  })
})

router.get('/:id', (req, res) => {
  const {id} = req.params
  const user = service.findOne(id)
  res.json({
    message: 'success',
    data: user
  })
})

router.post('/', (req, res) => {
  const body = req.body
  const newUser = service.create(body)
  res.json({
    message: 'created',
    data: newUser
  })
})

router.put('/:id', (req, res) => {
  const {id} = req.params
  const body = req.body
  const updateUser = service.updateAll(body, id)
  res.json({
    message: 'el metodo put necesita todos los elementos del objeto',
    data: updateUser,
  })
})

router.patch('/:id', (req, res) => {
  const {id} = req.params
  const body = req.body
  const updateUser = service.update(body, id)
  res.json({
    message: 'el metodo patch no necesita todos los elementos del objeto',
    data: updateUser
  })
})

router.delete('/:id', (req, res) => {
  const {id} = req.params
  const deleteUser = service.delete(id)
  res.json({
    message: 'delete elimina un objeto',
    deleteUser
  })
})


module.exports = router;