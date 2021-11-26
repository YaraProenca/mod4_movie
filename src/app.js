// import { openDb } from "./configDB.js";
import { createTable } from "./controller/movie.js";

import express from 'express'
const app = express()
app.use(express.json())

createTable()
// openDb()
// const port = 3000

app.get('/', function (req, res) {
  res.send('Hi there')
})

app.post('/movie', function (req, res) {
  console.log(req.body);
  // insertMovie(req.body)
  res.json({
    "statusCode": 200
  })
})

app.listen(3000, () => console.log('api working'))