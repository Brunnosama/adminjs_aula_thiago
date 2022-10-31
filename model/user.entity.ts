declare
User.init({
  id: {
    type: DataTypes.INTEGER,
    autoincrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(128),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(70),
    allowNull: false
  },
  username: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  encryptedPassword: {
    type: DataTypes.STRING(256),
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'),
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true
  }
},
  {
    sequelize,
    tableName: 'users',
    modelName: 'user'
  }
)