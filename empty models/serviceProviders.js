module.exports = (sequelize, DataTypes) => {
    const Provider = sequelize.define('Provider', {
        User: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    return Provider;
}