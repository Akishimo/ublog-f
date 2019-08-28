const path = require('path')
const fs = require('fs')
const os = require('os')

const { BUILD } = require('../config/index')

const moduleName = (() => {
  const lastArg = process.argv.pop()
  let directory = /^--MODULE=/.test(lastArg) ? lastArg.replace(/^--MODULE=/, '') : ''
  directory = directory || process.env.MODULE || ''

  if (!directory) {
    os.platform().toUpperCase().includes('WIN') ? console.info('Please use command like npm run dev -- --MODULE=<module or all>')
      : console.info('Please use command like MODULE=<module or all> npm run dev')
    process.exit()
  }

  return directory
})()

const entries = (() => {
  const entries = {}
  if (moduleName === 'all') {
    const modulesPath = path.resolve(__dirname, '../src/modules')
    const dirs = fs.readdirSync(modulesPath)
    dirs.forEach((dir) => {
      const currentPath = `${modulesPath}/${dir}`
      let stat = fs.lstatSync(currentPath)
      if (stat.isDirectory()) {
        entries[dir] = [BUILD.DEFAULT_ENTRIES]
        BUILD.ASSETS.forEach(function (asset) {
          if (fs.existsSync(path.join(BUILD.PORTAL_BASE_PATH, dir, asset))) {
            entries[dir].push([BUILD.PORTAL_BASE_PATH, dir, asset].join('/'))
          } else {
            console.info(`Cannot found ${moduleName} module`)
            process.exit()
          }
        })
      }
    })
  } else {
    entries[moduleName] = [BUILD.DEFAULT_ENTRIES]
    BUILD.ASSETS.forEach(function (asset) {
      if (fs.existsSync(path.join(BUILD.PORTAL_BASE_PATH, moduleName, asset))) {
        entries[moduleName].push([BUILD.PORTAL_BASE_PATH, moduleName, asset].join('/'))
      } else {
        console.info(`Cannot found ${moduleName} module`)
        process.exit()
      }
    })
  }

  return entries
})()

module.exports = {
  entries,
  moduleName
}
