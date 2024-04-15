const bcrypt = require('bcrypt')

async function crypto(pwd) {
  return bcrypt.genSalt().then(
    salt => bcrypt.hash(pwd, salt)
  )
}

module.exports = {
  crypto,
}