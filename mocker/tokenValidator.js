module.exports = {
  checkToken: (req, res, jsonObject) => {
    if (req.cookies && req.cookies.access_token === 'akishimo') {
      return res.json(jsonObject)
    }

    return res.json({
      code: 'need_login'
    })
  }
}