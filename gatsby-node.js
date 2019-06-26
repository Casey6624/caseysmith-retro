const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { paginate } = require('gatsby-awesome-pagination')

const getOnlyPublished = edges =>
    _.filter(edges, ({ node }) => node.status === 'publish')

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    return graphql(`
      {
        allWordpressPost {
          edges {
            node {
              id
              slug
              status
            }
          }
        }
      }
      `)
        .then(result => {
            if (result.errors) {
                result.errors.forEach(e => console.error(e.toString()))
                return Promise.reject(result.errors)
            }

            const postTemplate = path.resolve(`./src/templates/post.js`)
            const postsTemplate = path.resolve(`./src/templates/posts.js`)

            // In production builds, filter for only published posts.
            const allPosts = result.data.allWordpressPost.edges
            const posts =
                process.env.NODE_ENV === 'production'
                    ? getOnlyPublished(allPosts)
                    : allPosts

            // Iterate over the array of posts
            _.each(posts, ({ node: post }) => {
                // Create the Gatsby page for this WordPress post
                createPage({
                    path: `/thought/${post.slug}/`,
                    component: postTemplate,
                    context: {
                        id: post.id,
                    },
                })
                // Create Posts (thoughts)
                createPage({
                    path: `/thoughts/`,
                    component: postsTemplate
                });
            })

            // Create a paginated blog, e.g., /, /page/2, /page/3
            paginate({
                createPage,
                items: posts,
                itemsPerPage: 10,
                pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `/` : `/page`),
                component: postTemplate,
            })
        })

}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}