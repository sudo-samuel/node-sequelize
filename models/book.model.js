const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    // Defining book model
    const Book = sequelize.define("Books", {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            releaseDate: {
                type: DataTypes.DATEONLY,
            },
            subject: {
                type: DataTypes.INTEGER,
            },
            published: {
                type: DataTypes.BOOLEAN,
            }
        })
        
    return Book

}



