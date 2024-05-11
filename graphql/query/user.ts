import { graphql } from "@/gql";


export const authenticateUser = graphql(`
  #graphql
  query Authenticate($payload: LoginPayload) {
    authenticate(payload: $payload) {
      success
      token
      url
    }
  }
`);


export const verifyToken = graphql(`
  #graphql
  query VerifyToken{
    verifyToken{
      success
    }
  }
`);
