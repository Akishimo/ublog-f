const delay = require('mocker-api/utils/delay')
const { checkToken } = require('../tokenValidator.js')

module.exports = delay({
  'GET /common/index': (req, res) => checkToken(req, res, { a: '枯萎穿心, 败者食尘' })
}, 1000)
