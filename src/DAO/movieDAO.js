import { openDb } from "../infra/configDB.js";
let ok = await openDb()
await ok.exec('CREATE TABLE IF NOT EXISTS movie (id INTEGER PRIMARY KEY AUTOINCREMENT, filme TEXT, classificacao TEXT, sinopse TEXT, genero TEXT)')

export async function selectMovie(req, res) {
  let id = req.params.id

  return ok.get('SELECT * FROM movie WHERE id=?', [id])
}

export async function insertMovie(req, res) {
  let movie = req.body

  ok.run('INSERT INTO movie(filme, classificacao, sinopse, genero) VALUES (?,?,?,?)', [movie.filme, movie.classificacao, movie.sinopse, movie.genero])

  res.json({
    "statusCode": 200
  })
}

export async function selectMovies(req, res) {

  return ok.all('SELECT * FROM movie')
}

export async function updateMovie(req, res) {
  let movie = req.body
  let id = req.params.id
  return ok.run(`UPDATE movie SET filme=?, classificacao=?, sinopse=?, genero=? WHERE id=${id}`, [movie.filme, movie.classificacao, movie.sinopse, movie.genero])
}

export async function deleteMovie(req, res) {
  let id = req.params.id

  ok.get('DELETE FROM movie WHERE id=?', [id])

  return{
    id: id, 
    "status": 200
  }
}