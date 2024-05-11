import { GraphQLClient, gql } from "graphql-request";
import Cookies from "universal-cookie";
const isClient = typeof window !== "undefined";
export const gqlClient = new GraphQLClient("http://localhost:8000/graphql", {
  headers: () => {
    const cookies = new Cookies();
    return {
      authorization: isClient ? `Bearer ${cookies.get("access_token")}` : "",
    };
  },
});

export const gqlServerClient = (token: string) => {
  const gqlClient = new GraphQLClient("http://localhost:8000/graphql", {
    headers: {
      authorization: `Bearer ${token}`,
    },
    fetch: fetch,
  });
  return gqlClient;
};
