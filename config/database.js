const parse = require("pg-connection-string").parse;

module.exports = ({ env }) => {
  if (env["NODE_ENV"] === "production") {
    const config = parse(process.env.HEROKU_POSTGRESQL_AMBER_URL);

    return {
      defaultConnection: "default",
      connections: {
        default: {
          connector: "bookshelf",
          settings: {
            client: "postgres",
            host: config.host,
            port: config.port,
            database: config.database,
            username: config.user,
            password: config.password,
          },
          options: {
            ssl: false,
          },
        },
      },
    };
  }

  return {}
};