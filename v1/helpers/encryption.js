const bcrypt = require("bcrypt");

function encrypt(text) {
  try {
    return bcrypt.hashSync(text, 10);
  } catch (e) {
    console.error(e);
  }
  return;
}

function compare(text, encodedText) {
  try {
    return bcrypt.compareSync(text, encodedText);
  } catch (e) {
    console.error(e);
  }
  return false;
}

module.exports = { encrypt, compare };
