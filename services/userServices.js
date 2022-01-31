const faker = require('faker');
class userServices {

  constructor() {
    this.products = []
    this.generate()
  }

  generate() {
    const limit = 10
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        age: faker.datatype.number(100),
        image: faker.image.imageUrl(),
      })
    }
  }

  create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newUser)
    return newUser
  }

  find() {
    return this.products
  }

  findOne(id) {
    return this.products.find(item => item.id === id)
  }

  update(data, id) {
    const indexUser = this.products.findIndex(item => item.id === id)
    if (indexUser === -1) {
      throw new Error('Product not found')
    } else {
      this.products[indexUser] = {...this.products[indexUser], ...data}
      return this.products[indexUser]
    }
  }
  
  updateAll(data, id) {
    const indexUser = this.products.findIndex(item => item.id === id)
    if (indexUser === -1) {
      throw new Error('Product not found')
    } else {
      this.products[indexUser] = data
      return this.products[indexUser]
    }
  }

  delete(id) {
    const indexUser = this.products.findIndex(item => item.id === id)
    if (indexUser === -1) {
      throw new Error('Product not found')
    } else {
      this.products.splice(indexUser, 1)
      return {message: 'delete success', id: id}
    }
  }
}

module.exports = userServices