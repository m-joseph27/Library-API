const jwt = require('jsonwebtoken');

module.exports={
  verify: (req, res, next)=>{
    const token = req.headers['x-access-token'];

    try {
      let decoded = jwt.verify(token, process.env.SECRET_KEY);
      console.log(decoded)
      req.id_user = decoded.id
      next();
    } catch (err) {
      res.json({
        msg: 'token invalid'
      })
    }
  }
}