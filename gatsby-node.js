const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { paginate } = require('gatsby-awesome-pagination')

const getOnlyPublished = edges =>
    _.filter(edges, ({ node }) => node.status === 'publish')

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    const result = await graphql(`
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

      {
        allWordpressPage{
        edges{
          node{
            id
            title
            content
            excerpt
            slug
            date(formatString: "MMMM DD, YYYY")
            featured_media {
              source_url
            }
          }
        }
      }
    }
      `)


      if(result.errors){
        console.log(result.errors)
        return Promise.reject(result.errors)
      }

            const portfolioTemplate = path.resolve(`./src/templates/portfolio.js`)
            const projectTemplate = path.resolve(`./src/templates/project.js`)
            const postTemplate = path.resolve(`./src/templates/post.js`)
            const postsTemplate = path.resolve(`./src/templates/posts.js`)

            const {allWordpressPost, allWordpressPage} = result.data

            allWordpressPage.edges.forEach(edge => {
              // Gatsby uses Redux to manage its internal state.
              // Plugins and sites can use functions like "createPage"
              // to interact with Gatsby.
                            // custom
              createPage({
                // Each page is required to have a `path` as well
                // as a template component. The `context` is
                // optional but is often necessary so the template
                // can query data specific to each page.
                path: `/project/${edge.node.slug}/`,
                component: projectTemplate,
                context: {
                  id: edge.node.id,
                },
              })
            })

            createPage({
              path: `/portfolio/`,
              component: portfolioTemplate
          });

          allWordpressPost.edges.forEach(edge => {
            // Gatsby uses Redux to manage its internal state.
            // Plugins and sites can use functions like "createPage"
            // to interact with Gatsby.
                          // custom
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