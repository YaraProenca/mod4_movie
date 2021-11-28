import { Router } from "express";
import { createTable, insertMovie, updateMovie, selectMovies, selectMovie, deleteMovie } from "./controller/movieDAO.js";

const router = Router()

router.get('/', (req, res) => {
  res.json({
    "statusCode": 200,
    " msg": "API Working"
  })
})

router.get('/movies', selectMovies)
router.get('/movie', selectMovie)
router.post('/movie', insertMovie)
router.put('/movie', updateMovie)
router.delete('/movie', deleteMovie)

export default router