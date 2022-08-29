module.exports = ({ env }) => ({
    config: {
        jwtSecret: env('JWT_SECRET'),
    }
})