module.exports = (sequelize, DataTypes) => {
    const Album = sequelize.define("albums", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      link: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cover: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genres: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nb_tracks: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fans: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      release_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      tracklist: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Album;
  };
