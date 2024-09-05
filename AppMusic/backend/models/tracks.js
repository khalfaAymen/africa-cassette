module.exports = (sequelize, DataTypes) => {
    const Track = sequelize.define("tracks", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      link: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rank: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      preview: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      artist: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Track;
  };


