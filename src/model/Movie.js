import { insertMovie, updateMovie, selectMovies, selectMovie, deleteMovie } from "../DAO/movieDAO.js";

class Movie {
    static async selectMovie(req, res) {
    try {
      let deuBom = await selectMovie(req, res)
      res.status(200).json(deuBom) 
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message)
    }
  }

  static async insertMovie(req, res) {
    try {
      res.status(200).json(await insertMovie(req, res))
    } catch (error) {
      res.status(404).json(error.message)
    }
  }

  static async selectMovies(req, res) {
    try {
      res.status(200).json(await selectMovies(req, res))
    } catch (error) {
      res.status(404).json(error.message)
    }
  }

  static async updateMovie(req, res) {
    try {
      res.status(200).json(await updateMovie(req, res))
    } catch (error) {
      res.status(404).json(error.message)
    }
  }

  static async deleteMovie(req, res) {
    try {
      res.status(200).json(await deleteMovie(req, res))
    } catch (error) {
      res.status(404).json(error.message)
    }
  }
}

export default Movie;