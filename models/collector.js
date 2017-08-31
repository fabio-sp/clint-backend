export default function (sequelize, DataTypes) {
  const Collector = sequelize.define('COLLECTORS', {
    ID_COLLECTOR: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    TXT_COLLECTOR_NAME: DataTypes.STRING,
    VAL_COLLECTOR_LEVEL: DataTypes.INTEGER,
    TXT_COLLECTOR_LEVEL: DataTypes.STRING,
    COD_COLLECTOR_REFERENCE: DataTypes.STRING,
  },
  {
    createdAt: 'DATE_REC_INS',
    updatedAt: 'DATE_LAST_UPDATE',
    tableName: 'COLLECTORS',
  });

  Collector.associate = function (models) {
    Collector.belongsToMany(models.Company, { through: models.CompanyCollector, foreignKey: 'ID_COLLECTOR', as: 'Company', otherKey: 'ID_COMPANY' });
    Collector.hasOne(models.Collector, { foreignKey: 'ID_PARENT_COLLECTOR', as: 'ParentCollector' });
  };

  return Collector;
}
