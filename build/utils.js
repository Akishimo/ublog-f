const path = require('path')
const fs = require('fs')

const { DEFAULT_ENTRIES, ASSETS, PORTAL_BASE_PATH } = require('./config')

const moduleName = (() => {
  const lastArg = process.argv.pop()
  let directory = /^--MODULE=/.test(lastArg) ? lastArg.replace(/^--MODULE=/, '') : ''
  directory = directory || process.env.MODULE || ''
  
  if (!directory) {
    os.platform().toUpperCase().includes('WIN') ? console.info('Please use command like npm run dev -- --MODULE=<module>') :
    console.info('Please use command like MODULE=<module> npm run dev') 
    process.exit()
  }

  return directory
})()

const entries = (() => {
  const entries = DEFAULT_ENTRIES
  ASSETS.forEach(function (asset) {
    if (fs.existsSync(path.join(PORTAL_BASE_PATH, moduleName, asset))) {
      entries.push([PORTAL_BASE_PATH, moduleName, asset].join('/'))
    } else {
      console.info(`Cannot found ${moduleName} module`)
      process.exit()
    }
  })

  return entries
})()

module.exports = {
  entries,
  moduleName
}