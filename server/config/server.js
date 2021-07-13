module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '08a0a421bf38d8c1d9d5ff0efa2d93d2'),
    },
  },
});
