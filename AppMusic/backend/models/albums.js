module.exports = (sequelize, DataTypes) => {
    const Album = sequelize.define("albums", {
      albumName: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      albumDate: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Album;
  };
