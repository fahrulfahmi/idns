const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Product = db.define("Product", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Product;
