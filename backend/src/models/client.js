const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Client = db.define(
    "Client",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: { msg: "Client name cannot be empty" },
            },
        },
        logo: {
            type: DataTypes.STRING,
            allowNull: true, // Biarkan null agar tidak error jika tidak upload gambar
        },
    },
    {
        tableName: "clients",
        timestamps: false, // Menambahkan createdAt dan updatedAt
    }
);

module.exports = Client;
