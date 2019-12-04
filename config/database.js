const {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_USER_USER,
  DATABASE_PASSWORD
} = require('./environment')

module.exports = {
  development: {
    username: DATABASE_USER_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: DATABASE_HOST,
    dialect: "mysql",
    operatorsAliases: false
  },
  test: {
    username: DATABASE_USER_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: DATABASE_HOST,
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    username: DATABASE_USER_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: DATABASE_HOST,
    dialect: "mysql",
    operatorsAliases: false
  }
};
