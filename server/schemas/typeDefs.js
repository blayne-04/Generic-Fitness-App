// set types of data using apollo-server-express
const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  Values: [Values]
}
type Values { 
  _id: ID
  _sets: Int
  _reps: Int
  _weight: Int
}
`
//const typeDefs = gql` type User {_id: ID\\ username:String}
module.exports = typeDefs