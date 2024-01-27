import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    users: [User]
    categories: [Category]
    expenses: [Expense]
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
