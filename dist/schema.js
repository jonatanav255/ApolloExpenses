"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
  type Query {
    users: [User]
    categories: [Category]
    expenses: [Expense]
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }

  type User {
    user_id: ID!
    name: String!
    email: String!
  }

  type Category {
    category_id: ID!
    name: String!
  }

  type Expense {
    expense_id: ID!
    user_id: ID!
    category_id: ID!
    amount: Float!
    expense_date: String! # assuming you want the date as a string
    description: String
  }
`;
