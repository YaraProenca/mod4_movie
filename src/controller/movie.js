import { openDb } from "../configDB.js";

export async function createTable() {
  openDb().then(db => {
    db.exec('CREATE TABLE IF NOT EXISTS movie (id INTEGER PRIMARY KEY AUTOINCREMENT, filme TEXT, classificacao TEXT, sinopse TEXT, genero TEXT)')
  })
}

export async function insertMovie(movie) {
  openDb().then(db => {
    db.run('INSERT INTO movie(filme, classificacao, sinopse, genero) VALUES (?,?,?,?)', [movie.filme, movie.classificacao, movie.sinopse, movie.genero])
  })
}

export async function updateMovie(movie) {
  openDb().then(db => {
    db.run('UPDATE movie SET filme=?, classificacao=?, sinopse=?, genero=? WHERE id=?', [movie.filme, movie.classificacao, movie.sinopse, movie.genero, movie.id])
  })
}

export async function selectMovies() {
  return openDb().then(db => {
    return db.all('SELECT * FROM movie')
      .then(res => res)
  })
}

export async function selectMovie(id) {
  return openDb().then(db => {
    return db.get('SELECT * FROM movie WHERE id=?', [id])
      .then(res => res)
  })
}

export async function deleteMovie(id) {
  return openDb().then(db => {
    return db.get('DELETE FROM movie WHERE id=?', [id])
      .then(res => res)
  })
}
