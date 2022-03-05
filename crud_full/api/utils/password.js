const bcrypt = require("bcrypt");

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync();

  return bcrypt.hashSync(password, salt);
};

module.exports = { encryptPassword };
