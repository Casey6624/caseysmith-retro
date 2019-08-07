import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import DateRange from '@material-ui/icons/DateRange';
//Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from '@material-ui/core/Button';
import Arrow from '@material-ui/icons/KeyboardArrowLeft';

export default function PostsTemplate({ data }) {

    return (

        <Layout>
            <SEO title="Thoughts" keywords={[`Casey`, `Smith`, `Web`, "Mobile", `Developer`, "Sheffield"]} />
            <div className="thoughtsMasterSVGContainer">
                <Grid container className="homeHeader">
                    <Grid item xs={12} md={7} className="headerIntro">
                        <div>
                            <h1 className="hi">Stuff I've Written About</h1>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} className="emojiContainer">
                        <h1 className="emojiBlurb"><span role="img">✍️</span></h1>
                    </Grid>
                </Grid>
            </div>
            <Link style={{textDecoration: "none"}} to="/">
                    <Button color="secondary">
                    <Arrow /> GO BACK
                    </Button>
                </Link>
            <p
                className="postsFoundText"
            >{data.allWordpressPost.edges.length} POSTS FOUND</p>
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
                date(formatString: "MMMM DD, YYYY")
              featured_media {
                  source_url
              }
            }
        }
    }
}
`