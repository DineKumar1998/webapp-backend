const parse = require("pg-connection-string").parse;

module.exports = ({ env }) => {
  console.log("dinesh");
  if (env["NODE_ENV"] === "production") {
    console.log("Dinesh");
    const config = parse(process.env.HEROKU_POSTGRESQL_AMBER_URL);
    // connection: {
    //   client: 'postgres',
    //   connection: {
    //     host: env('DATABASE_HOST', '127.0.0.1'),
    //     port: env.int('DATABASE_PORT', 5432),
    //     database: env('DATABASE_NAME', 'strapi'),
    //     user: env('DATABASE_USERNAME', 'strapi'),
    //     password: env('DATABASE_PASSWORD', 'strapi'),
    //     schema: env('DATABASE_SCHEMA', 'public'), // Not required
    //     ssl: {
    //       rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
    //     },
    //   },
    //   debug: false,
    // },
    return {
      defaultConnection: "default",
      connection: {
        client: "postgres",
        connection: {
          host: config.host,
          port: config.port,
          database: config.database,
          username: config.user,
          password: config.password,
          ssl: {
            rejectUnauthorized: true,
          },
        },
        debug: false,
      },
    };
  }

  return {
    connection: {
      client: "sqlite",
      connection: {
        filename: env("DATABASE_FILENAME", ".tmp/data.db"),
      },
      useNullAsDefault: true,
      debug: false,
    },
  };
};
