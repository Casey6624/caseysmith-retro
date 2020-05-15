import React, { useState, useEffect } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Email from '@material-ui/icons/Email';
import AccessTime from '@material-ui/icons/AccessTime';
import Send from '@material-ui/icons/Send';
import DateRange from '@material-ui/icons/DateRange';
import LibraryBooks from '@material-ui/icons/LibraryBooks'
//Components
import Layout from "../components/layout";
import Icons from "../components/Icons/Icons"
import SEO from "../components/seo";
import PostsHeader from "./PostsHeader"
// Libraries
const striptags = require('striptags');

export default function PortfolioTemplate({ data }) {

    return (

        <Layout>
            <SEO title="Thoughts" keywords={[`Casey`, `Smith`, `Web`, "Mobile", `Developer`, "Sheffield"]} />
            <PostsHeader/>

            <div className="postList">
                <Grid container>
                    {data.allWordpressPost.edges.map(({ node }) => (<Grid item xs={12} md={4} key={node.slug}>
                        <Card key={node.slug} className="card" id="post">
                            <Link to={'thought/' + node.slug}>
                                <div className="dateContainer">
                                    <DateRange />
                                    <p id="wpPostDate">{node.date}</p>
                                </div>
                                <h3 className="wpPostTitle">{node.title}</h3>

                                <div className="paraText" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                                <img className="featuredWPImage" alt={node.title} src={node.featured_media.source_url} />
                                <div className="timeToRead"> <p><AccessTime /></p> <p>{generateReadingTimes(node.content)} Minute Read</p></div>
                            </Link>
                        </Card>
                    </Grid>
                    ))}

                   <Card className="card" id="post">
                    <div className="dateContainer">
                                    <Email />
                                    <p id="wpPostDate"> Monthly Newsletter</p>
                                </div>
                              <h3 className="wpPostTitle">Join My Mailing List!</h3>             
                            <div style={{ display: "flex" }}>
                            <TextField
                                id="mce-EMAIL"
                                label="Email Address"
                                name="EMAIL" 
                                placeholder="Bob@test.com" 
                                required
                                className="email"
                            />
                                <Button 
                                defaultValue="Subscribe" 
                                name="subscribe"
                                color="secondary"
                                id="mc-embedded-subscribe"
                                type="submit"
                                ><Send/></Button>
                            </div>
                            </Card>
                </Grid>
            </div>
        </Layout>
    )
}

PortfolioTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export const pageQuery = graphql`
query pageQuery{
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
  
`