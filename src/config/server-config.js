const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    URI : process.env.URI,
    SET_ROUNDS : process.env.SET_ROUNDS
}