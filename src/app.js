import express from 'express'
import fs from 'fs'
import https from 'https'
import cors from 'cors'

const PORT = process.env.PORT || 3003
const app = express()
app.use(express.json())
app. use(cors())

import router from './routes.js'
app.use(router)

app.listen(PORT, () => console.log('api working'))

https.createServer({
  cert: fs.readFileSync('src/SSL/code.crt'),
  key: fs.readFileSync('src/SSL/code.key'),
}, app).listen(3001,()=>console.log('Running https'))