
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: 'ec2-44-195-100-240.compute-1.amazonaws.com',
      port: '5432',
      database: 'd82ognctalc4k4',
      username: 'wumfvzfytypskv',
      password: 'aa6de3cb30839ef7d1b296159130680bf4a23dce4b2ed9bf056066b866bff7d5',
      ssl: { rejectUnauthorized: false },
    },
    debug: false
  },
});