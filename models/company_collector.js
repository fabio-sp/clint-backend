export default function (sequelize, DataTypes) {
  const CompanyCollector = sequelize.define('COMPANY_COLLECTORS', {
    ID_COMPANY_COLLECTOR: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

  },
  {
    createdAt: 'DATE_REC_INS',
    updatedAt: 'DATE_LAST_UPDATE',
    tableName: 'COMPANY_COLLECTORS',
  });

  return CompanyCollector;
}
