import { openDb } from "../configDB.js";

export async function createTable() {
  openDb().then(db => {
    db.exec('CREATE TABLE IF NOT EXISTS movie (id INTEGER PRIMARY KEY AUTOINCREMENT, filme TEXT, classificacao TEXT, sinopse TEXT, genero TEXT)')
  })
}

export async function selectMovie(req, res) {
  let id = req.body.id
  openDb().then(db => {
    db.get('SELECT * FROM movie WHERE id=?', [id])
      .then(movie => res.json(movie))
  })
}

export async function insertMovie(req, res) {
  let movie = req.body
  openDb().then(db => {
    db.run('INSERT INTO movie(filme, classificacao, sinopse, genero) VALUES (?,?,?,?)', [movie.filme, movie.classificacao, movie.sinopse, movie.genero])
  })

  res.json({
    "statusCode": 200
  })
}


export async function selectMovies(req, res) {
  openDb().then(db => {
    db.all('SELECT * FROM movie')
      .then(movies => res.json(movies))
  })
}

export async function updateMovie(req, res) {
  let movie = req.body
  openDb().then(db => {
    db.run('UPDATE movie SET filme=?, classificacao=?, sinopse=?, genero=? WHERE id=?', [movie.filme, movie.classificacao, movie.sinopse, movie.genero, movie.id])
  })

  res.json({
    "statusCode": 200
  })
}

export async function deleteMovie(req, res) {
  let id = req.body.id
  openDb().then(db => {
    db.get('DELETE FROM movie WHERE id=?', [id])
      .then(res => res)
  })

  res.json({
    "statusCode": 200
  })
}
