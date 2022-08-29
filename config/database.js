const { parse } = require("pg-connection-string");
const config = parse(process.env.HEROKU_POSTGRESQL_AMBER_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      username: config.user,
      password: config.password,
      ssl: { rejectUnauthorized: false },
    },
    debug: false
  },
});