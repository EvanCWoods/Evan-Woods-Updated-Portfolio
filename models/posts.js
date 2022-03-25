const { model, DataType } = require("sequelize");
const sequelize = require("sequelize");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataType.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
    },
    image: DataType.STRING,
    allowNull: false,
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscore: true,
    modelName: "post",
  }
);

module.exports = Post;
