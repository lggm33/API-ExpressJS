const boom = require('@hapi/boom');
const faker = require('faker');
class userServices {

  constructor() {
    this.usersList = []
    this.generate()
  }

  generate() {
    const limit = 10
    for (let i = 0; i < limit; i++) {
      this.usersList.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        age: faker.datatype.number(100),
        image: faker.image.imageUrl(),
        block: faker.datatype.boolean(),
      })
    }
  }

  create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.usersList.push(newUser)
    return newUser
  }

  find() {
    return this.usersList
  }

  findOne(id) {
    const findedUser = this.usersList.find(item => item.id === id)
    if (!findedUser) {
      throw boom.notFound('product not found')
    } else if (findedUser.block) {
      throw boom.conflict('user is block')
    }
    return findedUser
  }

  update(data, id) {
    const indexUser = this.usersList.findIndex(item => item.id === id)
    if (indexUser === -1) {
      throw boom.notFound('product not found')
    } else {
      this.usersList[indexUser] = {...this.usersList[indexUser], ...data}
      return this.usersList[indexUser]
    }
  }
  
  updateAll(data, id) {
    const indexUser = this.usersList.findIndex(item => item.id === id)
    if (indexUser === -1) {
      throw boom.notFound('product not found')
    } else {
      this.usersList[indexUser] = data
      return this.usersList[indexUser]
    }
  }

  delete(id) {
    const indexUser = this.usersList.findIndex(item => item.id === id)
    if (indexUser === -1) {
      throw boom.notFound('product not found')
    } else {
      this.usersList.splice(indexUser, 1)
      return {message: 'delete success', id: id}
    }
  }
}

module.exports = userServices