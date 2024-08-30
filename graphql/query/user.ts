import { graphql } from "../../gql";

export const verifyUserGoogleTokenQuery = graphql(`
  #graphql
  query VerifyUserGoogleToken($token: String!) {
    verifyGoogleToken(token: $token)
  }
`);

export const getCurrentUserQuery = graphql(`
  #graphql
  query GetCurrentUser {
    getCurrentUser {
      id
      profileImageUrl
      firstName
      lastName
      email
      tweets {
        id
        content
        author {
          firstName
          lastName
          profileImageUrl
        }
      }
    }
  }
`);
//
