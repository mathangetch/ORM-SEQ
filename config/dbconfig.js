module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "password",
  DB: "seq",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    accquire: 30000,
    idle: 10000,
  },
};
