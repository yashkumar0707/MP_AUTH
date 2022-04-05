module.exports = {
    HOST: "localhost",
    USER: "xbroz",
    PASSWORD: "Mentalcase@1234",
    DB: "mp",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };