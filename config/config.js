module.exports = {
    "DATABASE":{
      host:"write here",
      port:"5432",//"3306",
      user:"write here",
      password:"write here",
      database:"Boards"
    },
    "DATABASE_URL": process.env.DATABASE_URL ||"write down",
    "SESSION_SECRET":"amollang"
  };
  