export default {
  Query: {
    getCompanies: (parent, args, {
      models,
    }) => models.Company.findAll({ include: ['Collector'] }),
    getCollectors: (parent, args, {
      models,
    }) => models.Collector.findAll({ include: ['Company'] }),
    getCompanyById: (parent, {
      id,
    }, {
      models,
    }) =>
      models.Company.findOne({
        where: {
          ID_COMPANY: id,
        },
        include: ['Collector'],
      }),
  },
  Mutation: {
    createCollector: (parent, {
      name,
      parentId,
      collectorReferece,
    }, {
      models,
    }) => models.Collector.create({
      TXT_COLLECTOR_NAME: name,
      ID_PARENT_COLLECTOR: parentId,
      COD_COLLECTOR_REFERENCE: collectorReferece,
    }),
    createCompany: (parent, {
      id,
      codCompany,
      idCollector,
    }, {
      models,
    }) => {
      models.Company.create({
        ID_COMPANY: id,
        COD_COMPANY: codCompany,
      }).then((company) => {
        return company.setCollector(idCollector);
      });
    },
  },
};
