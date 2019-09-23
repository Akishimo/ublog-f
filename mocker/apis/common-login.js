const delay = require('mocker-api/utils/delay')

const account = {
  username: 'akishimo',
  password: 'Akishimo670708',
  info: {
    username: 'akishimo',
    nickname: '闲潭梦落花',
    avatar: 'http://himg.bdimg.com/sys/portrait/item/957ee5bc82e9acbce680bbe58fb8e4bba46522.jpg'
  }
}

module.exports = delay({
  'POST /common/login': (req, res) => {
    let result = {}
    if (req.body.username === account.username && req.body.password === account.password) {
      result = {
        code: '1',
        data: account.info
      }
      res.cookie('access_token', 'akishimo', { maxAge: 86400000, httpOnly: true })
    } else {
      result = {
        code: 0,
        data: {},
        message: '用户名或密码错误'
      }
    }
    return res.json(result)
  }
}, 1000)
