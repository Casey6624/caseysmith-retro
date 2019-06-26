import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"

//Components
import Layout from "../components/layout";
import SEO from "../components/seo";

class PostsTemplate extends Component {

    render() {
        const data = this.props.data;

        return (

            <Layout>
                <SEO title="Thoughts" keywords={[`Casey`, `Smith`, `Web`, "Mobile", `Developer`, "Sheffield"]} />
                <div className="thoughtsMasterSVGContainer">
                </div>
                <p
                    style={{
                        textAlign: "center",
                    }}
                >{data.allWordpressPost.edges.length} POSTS FOUND</p>
                <div
                    className="postList"
                    style={{
                        flexWrap: "wrap !important",
                        flexFlow: "flex-wrap",
                        display: "flex"
                    }}
                >
                    {data.allWordpressPost.edges.map(({ node }) => (
                        <div key={node.slug} className="card" id="post" style={{ marginBottom: 50 }}>
                            <Link to={'thought/' + node.slug}>
                                <p id="wpPostDate">{node.date}</p>
                                <h3 className="wpPostTitle">{node.title}</h3>

                                <div className="paraText" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                                <img className="featuredWPImage" alt={node.title} src={node.featured_media.source_url} />
                            </Link>
                        </div>
                    ))}
                </div>

            </Layout>
        )
    }
}

PostsTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default PostsTemplate

export const pageQuery = graphql`
query postsQuery{
    allWordpressPost{
        edges{
            node{
                id
                title
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
`