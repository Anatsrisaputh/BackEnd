module.exports = (sequelize, DataType) => {
  const Students = sequelize.define(
    'Student', {
    name: {
      type: DataType.STRING,

    },
    age: {
      type: DataType.INTEGER,
    },
    number_phone: {
      type: DataType.STRING(10)
    },
   
  },
  {
    timestamps: false,
    tableName: "students",
  }
 
  );

  return Students;
}