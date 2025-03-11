import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    "Id of the track"
    id: ID!
    "Track title"
    title: String!
    "Author of the track"
    author: Author!
    "Associated thumbnails of a given track"
    thumbnail: String
    "The length of the track as a number"
    length: Int
    "The numeric amount of modules in the track"
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;
