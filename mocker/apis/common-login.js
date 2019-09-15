const delay = require('mocker-api/utils/delay')

module.exports = delay({
  'GET /common/login': (req, res) => {
    return res.json({
      code: '1',
      data: {
        username: 'akishimo'
      }
    })
  }
}, 1000)
