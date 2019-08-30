const delay = require('mocker-api/utils/delay')

module.exports = delay({
  'GET /common/index/': (req, res) => {
    return res.json({ a: '枯萎穿心, 败者食尘' })
  }
}, 1000)
