import { graphql } from "@/gql";

export const createUser = graphql(`
  #graphql
  mutation createUser($payload: CreateUserPayload) {
    createUser(payload: $payload) {
      user {
        email
        id
      }
      userExist
    }
  }
`);