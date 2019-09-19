const klaw = require('klaw')
const path = require('path')
const express = require('express')
const apiMocker = require('mocker-api')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())
const { MOCKER: CONFIG } = require('../config/index')
const apiDir = path.resolve(__dirname, `./apis`)

const getApis = () => {
  const apiFiles = []

  return new Promise((resolve, reject) => {
    klaw(apiDir).on('data', (file) => {
      if (path.extname(file.path) !== '.js') return
      apiFiles.push(file.path)
    }).on('end', () => {
      resolve(apiFiles)
    })
  })
}

getApis().then((apiFiles) => {
  apiMocker(app, apiFiles)
  app.listen(CONFIG.MOCK_PORT)
  console.log(`mocker run at http://localhost:${CONFIG.MOCK_PORT}`)
})
