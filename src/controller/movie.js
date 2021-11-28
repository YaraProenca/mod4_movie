import { Router } from "express";
import Movie from "../model/Movie.js"

const router = Router()

router.get('/', (req, res) => {
  res.json({
    "statusCode": 200,
    " msg": "API Working"
  })
})

router.get('/movie', (req, res) => {
  Movie.selectMovies(req, res)
})

router.get('/movie/:id', (req, res) => {
  Movie.selectMovie(req, res)
})

router.post('/movie', (req, res) => {
  Movie.insertMovie(req, res)
})

router.patch('/movie/:id', (req, res) => {
  Movie.updateMovie(req, res)
})

router.delete('/movie/:id', (req, res) => {
  Movie.deleteMovie(req, res)
})

export default router