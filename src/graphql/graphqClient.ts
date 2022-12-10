import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(
  "https://api.github.com/graphql", {
  headers: {
    Authorization: 'Bearer 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'
  }
}
);