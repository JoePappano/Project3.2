module.exports = (sequelize, DataTypes) => {
    const Listing = sequelize.define('Listing', {
        User: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        City: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ProjectType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        DescriptionOfWorkToBeDone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Phone: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    // Listing.associate = function(models) {
    //     Listing.belongsTo(models.User, {
    //         onDelete: "cascade"
    //     });
    // };
    return Listing;
}