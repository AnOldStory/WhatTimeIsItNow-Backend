module.exports = {
  DATABASE: {
    host: "220.94.42.246",
    port: "3306",
    user: "skydb",
    password: "dbsky",
    database: "boards",
    dialect: "postgres",
    timezone: "+09:00",
  },
    "DATABASE_URL": process.env.DATABASE_URL ||"write down",
    "SESSION_SECRET":"amollang",
    "API_PORT": 7001,
  };
  