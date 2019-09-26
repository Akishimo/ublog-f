const delay = require('mocker-api/utils/delay')

module.exports = delay({
  'POST /common/register': (req, res) => {
    return res.json({
      code: '1',
      data: {},
      msg: 'register success'
    })
  }
}, 1000)
