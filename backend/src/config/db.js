const { Sequelize } = require("sequelize");

const db = new Sequelize("idnscoid_compro_db", "idnscoid_idnscoid", "D;hsdwJl}*eY", {
    host: "api2.idns.co.id",
    dialect: "mysql"
});

// const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     dialect: "mysql",
//     logging: false,
// });

db.authenticate()
    .then(() => console.log("Database Connected"))
    .catch(err => console.error("Connection Error:", err));

module.exports = db;
