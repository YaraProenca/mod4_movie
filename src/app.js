// import { openDb } from "./configDB.js";
import { createTable, insertMovie, updateMovie, selectMovies, selectMovie, deleteMovie } from "./controller/movie.js";

import express from 'express'
const app = express()
app.use(express.json())

createTable()
// openDb()
// const port = 3000

app.get('/', function (req, res) {
  res.send('Hi there')
})

app.get('/movies', async function (req, res) {
  let movies = await selectMovies()
  res.json(movies)
})

app.get('/movie', async function (req, res) {
  let movie = await selectMovie(req.body.id)
  res.json(movie)
})

app.post('/movie', function (req, res) {
  // console.log(req.body);
  insertMovie(req.body)
  res.json({
    "statusCode": 200
  })
})


app.put('/movie', function (req, res) {
  if (req.body && !req.body.id) {
    res.json({
      "statusCode": 400,
      "msg": "precisa de um id"
    })
  } else {
    updateMovie(req.body)
    res.json({
      "statusCode": 200
    })
  }
})

app.delete('/movie', async function (req, res) {
  let movie = await deleteMovie(req.body.id)
  res.json(movie)
})


app.listen(3000, () => console.log('api working'))