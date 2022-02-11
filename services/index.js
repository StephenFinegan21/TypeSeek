import {request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {

    const query = gql`
    query MyQuery {
    postsConnection {
      edges {
        node {
          createdAt
          description
          id
          slug
          title
          content {
            html
            text
            markdown
            raw
          }
          image {
            url
          }
          categories {
            slug
            name
            id
          }
        }
      }
    }
  }
    `
    const results = await request(graphqlAPI, query)

    return results.postsConnection.edges;
}