import express from 'express'
import https from 'https'
import cors from 'cors'


const PORT = process.env.PORT || 3003
const app = express()
app.use(express.json())
app.use(cors())

import router from './controller/movie.js'
app.use(router)

app.listen(PORT, () => console.log('API working'))

https.createServer({
  cert: process.env.CODE_CRT,
  key: process.env.CODE_KEY,
}, app).listen(3001, () => console.log('Running https'))