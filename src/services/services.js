import {ApolloClient, gql, HttpLink, InMemoryCache} from '@apollo/client';
import {client} from './queryClient';
export const loginAPi = (email, password) => {
  return client.mutate({
    mutation: gql`
      mutation {
        loginWithEmail(email: "john@doe.com", password: "p4SSW0rd") {
          user {
            id
            email
            name
            facebookId
            googleId
            appleId
          }
          accessToken
          refreshToken
        }
      }
    `,
  });
};

export const signupApi = (email, password, name) => {
  return client.mutate({
    mutation: gql`
      mutation {
        signUpWithEmail(
          name: "John Doe"
          email: "john@doe.com"
          password: "p4SSW0rd"
        ) {
          user {
            id
            email
            name
            facebookId
            googleId
            appleId
          }
          accessToken

          refreshToken
        }
      }
    `,
  });
};

export const cardDataGet = () => {
  return client.query({
    query: gql`
      query {
        cards {
          id
          name
        }
      }
    `,
  });
};
