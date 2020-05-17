import React, { useState, useEffect } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Email from '@material-ui/icons/Email';
import Send from '@material-ui/icons/Send';
//Components
import Layout from "../components/layout";
import Icons from "../components/Icons/Icons"
import SEO from "../components/seo";
import PostsHeader from "./PostsHeader"
import CategoryList from "../components/misc/CategoryList"

export default function PortfolioTemplate({ data: { allWordpressPage } }) {

  console.log(allWordpressPage)

    return (

        <Layout>
            <SEO title="Portfolio" keywords={[`Casey`, `Smith`, `Web`, "Mobile", `Developer`, "Sheffield"]} />
            <PostsHeader titleText="Stuff I've Created" emoji="💜"/>

            <div className="postList">
                <Grid container>
                    {allWordpressPage.edges.map(({ node }) => (<Grid item xs={12} md={4} key={node.slug}>
                        <Card key={node.slug} className="card" id="post">
                            <Link to={'project/' + node.slug}>
                                <h3 className="wpPostTitle">{node.title}</h3>
                                <div className="dateContainer">
                                  <CategoryList categories={node.categories}/>
                                </div>
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

PortfolioTemplate.propTypes = {
    //: PropTypes.object.isRequired,
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
          acf{
            project_type
            card_desc
            urlwhereaccessible
            githuburl
          }
          categories {
            name
          }
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