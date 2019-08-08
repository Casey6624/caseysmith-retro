import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import DateRange from '@material-ui/icons/DateRange';
//Components
import Layout from "../components/layout";
import Icons from "../components/Icons/Icons"
import SEO from "../components/seo";
import PostsHeader from "./PostsHeader"

export default function PostsTemplate({ data }) {

    return (

        <Layout>
            <SEO title="Thoughts" keywords={[`Casey`, `Smith`, `Web`, "Mobile", `Developer`, "Sheffield"]} />
            <PostsHeader/>

            <div className="categoryFilterContainer">
            <h3 className="postsFoundText">Filter: </h3>
            <Chip
            icon={Icons.NodeJS}
            label="NodeJS"
            color="secondary"
            clickable
            variant="outlined"
            className="slightMarg"
            />
            <Chip
            icon={Icons.ReactJS}
            className="slightMarg"
            label="ReactJS"
            color="secondary"
            clickable
            variant="outlined"
            />
            <Chip
            icon={Icons.Hosting}
            label="Hosting"
            className="slightMarg"
            color="secondary"
            clickable
            variant="outlined"
            />
            <Chip
            icon={Icons.WordPress}
            label="WordPress"
            className="slightMarg"
            color="secondary"
            clickable
            variant="outlined"
            />
            </div>

            <p className="postsFoundText">{data.allWordpressPost.edges.length} POSTS FOUND</p>
            <div className="postList">
                <Grid container>
                    {data.allWordpressPost.edges.map(({ node }) => (<Grid xs={12} md={4}>
                        <Card key={node.slug} className="card" id="post">
                            <Link to={'thought/' + node.slug}>
                                <div className="dateContainer">
                                    <DateRange />
                                    <p id="wpPostDate">{node.date}</p>
                                </div>
                                <h3 className="wpPostTitle">{node.title}</h3>

                                <div className="paraText" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                                <img className="featuredWPImage" alt={node.title} src={node.featured_media.source_url} />
                            </Link>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </div>

        </Layout>
    )
}

PostsTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export const pageQuery = graphql`
query postsQuery{
    allWordpressPost{
        edges{
            node{
                id
                title
                excerpt
                slug
              categories {
                name
              }
                date(formatString: "MMMM DD, YYYY")
              featured_media {
                  source_url
              }
            }
        }
    }
}
`