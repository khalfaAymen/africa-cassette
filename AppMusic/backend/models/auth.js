module.exports = (sequelize, DataTypes) => {
    const Auth = sequelize.define("auth", {
      token: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      expire: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    });
  
    return Auth;
  };

  