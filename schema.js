export default `
  type Query {
    getCompanyById(id: Int!): Company
    getCollectors: [Collector]!
    getCompanies: [Company]!
  }

  type Collector {
    ID_COLLECTOR: Int!
    TXT_COLLECTOR_NAME: String!
    VAL_COLLECTOR_LEVEL: Int
    TXT_COLLECTOR_LEVEL: String
    COD_COLLECTOR_REFERENCE: String
    ID_PARENT_COLLECTOR: Int
    COLLECTOR: Collector
  }

  type Company {
    ID_COMPANY: Int!
    COD_COMPANY: String!
    FLAG_COLLECTION: Boolean!
    USER_LAST_UPDATE: String
    ID_COLLECTOR: Int
    DATE_REC_INS: String
  }

  type Mutation {
    createCollector(name: String!, parentId: Int, collectorReference: String): Collector
    createCompany(id: Int!, codCompany: String!, idCollector: Int!): Company
    updateCollector(parentId: Int): [Int!]!
    updateCompanyCollector(collectorId: Int): [Int!]!
  }
`;
