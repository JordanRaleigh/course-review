const router = require('express').Router()
const { Movies } = require('../db')

router.get('/', async (req, res, next) => {
  const movies = await Movies.findAll()

  res.status(200).json(movies)
})

module.exports = router
