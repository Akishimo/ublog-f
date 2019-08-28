const delay = require('mocker-api/utils/delay')

module.exports = delay({
  'GET /common/index/': (req, res) => {
    return res.json({ b: 2 })
  }
}, 1000)
