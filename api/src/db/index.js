const { join } = require('path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')


const adapter = new FileSync(join(__dirname, 'db.json'))
const db = low(adapter)

const createPetModel = require('./pet')
const createUserModel = require('./user')

module.exports = {
  models: {
    Pet: createPetModel(db),
    User: createUserModel(db),
  },
  db
}
