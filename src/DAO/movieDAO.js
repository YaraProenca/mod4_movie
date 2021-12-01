import { openDb } from "../infra/configDB.js";
let iGotIt = await openDb()
await iGotIt.exec('CREATE TABLE IF NOT EXISTS movie (id INTEGER PRIMARY KEY AUTOINCREMENT, filme VARCHAR(64), classificacao VARCHAR(64), sinopse VARCHAR(64), genero VARCHAR(64))')

export async function selectMovie(req, res) {
  let id = req.params.id
  
  return iGotIt.get('SELECT * FROM movie WHERE id=?',[id])
}

export async function insertMovie(req, res) {
  let movie = req.body

  iGotIt.run('INSERT INTO movie(filme, classificacao, sinopse, genero) VALUES (?,?,?,?)', [movie.filme, movie.classificacao, movie.sinopse, movie.genero])

  res.json({
    "statusCode": 200,
    "mesage": "A movie has been inserted"
  })
}

export async function selectMovies(req, res) {

  return iGotIt.all('SELECT * FROM movie')
}

export async function updateMovie(req, res) {
  let movie = req.body
  let id = req.params.id
  return iGotIt.run(`UPDATE movie SET filme=?, classificacao=?, sinopse=?, genero=? WHERE id=${id}`, [movie.filme, movie.classificacao, movie.sinopse, movie.genero])
}

export async function deleteMovie(req, res) {
  let id = req.params.id

  iGotIt.get('DELETE FROM movie WHERE id=?', [id])

  return{
    id: id, 
    "status": 200,
    "mesage":"A movie has been deleted"
  }
}