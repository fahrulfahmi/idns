const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Blog = db.define("Blog", {
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.TEXT, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: true }
}, { tableName: "blogs", timestamps: true });

module.exports = Blog;
