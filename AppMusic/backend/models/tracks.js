module.exports = (sequelize, DataTypes) => {
    const Track = sequelize.define("tracks", {
      trackName: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      trackDuration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Track;
  };


