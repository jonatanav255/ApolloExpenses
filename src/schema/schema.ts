import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    users: [User]
    categories: [Category]
    expenses: [Expense]
    userById(user_id: String!): [User]
    usersByName(name: String!): [User]
    usersByEmail(email: String!): [User]
    search(term: String!): [SearchResult]
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    deleteUser(user_id: ID!): User
    updateUser(user_id: ID!, name: String, email: String): User
  }

  union SearchResult = User | Category

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
