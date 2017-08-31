export default function (sequelize, DataTypes) {
  const Company = sequelize.define('COMPANIES', {
    ID_COMPANY: { type: DataTypes.INTEGER, primaryKey: true },
    COD_COMPANY: DataTypes.STRING,
    FLAG_COLLECTION: DataTypes.BOOLEAN,
    USER_LAST_UPDATE: DataTypes.STRING,
  },
  {
    createdAt: 'DATE_REC_INS',
    updatedAt: 'DATE_LAST_UPDATE',
  });

  Company.associate = function (models) {
    Company.belongsToMany(models.Collector, { through: models.CompanyCollector, foreignKey: 'ID_COMPANY', as: 'Collector', otherKey: 'ID_COLLECTOR' });
  };

  return Company;
}
