const { green, red, yellow } = require('chalk')
const { db, Movies } = require('./server/db')
const movies = require('./movie-info')

const seed = async () => {
  try {
    await db.sync({ force: true })
    await Movies.bulkCreate(movies)
    console.log(green('Sucessfully Seeded Database.'))
  } catch (err) {
    console.log(red(err))
  } finally {
    console.log(yellow('Closing database connection'))
    await db.close()
  }
}

seed()
