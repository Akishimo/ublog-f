const Base64 = require('js-base64').Base64

module.exports = {
  checkToken: (req, res, jsonObject) => {
    if (req.cookies && req.cookies[Base64.encode('access_token')] === Base64.encode('akishimo')) {
      return res.json(jsonObject)
    }

    return res.json({
      code: 'need_login'
    })
  }
}