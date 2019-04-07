module.exports = function(sequelize, DataTypes) {
    var Provider = sequelize.define("Provider", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        companyName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        servicesProvided: {
            type: DataTypes.TEXT
        },
    }, {
        timestamps: false
    });
    return Provider;
};
