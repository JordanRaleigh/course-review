const { green, red, yellow } = require('chalk')
const { db } = require('./server/db')

const seed = async () => {
  try {
    await db.sync({ force: true })

    console.log(green('Sucessfully Seeded Database.'))
  } catch (err) {
    console.log(red(err))
  } finally {
    console.log(yellow('Closing database connection'))
    await db.close()
  }
}

seed()
