import React, { Component } from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { graphql } from "gatsby";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Arrow from '@material-ui/icons/KeyboardArrowLeft';
import "./project.css"
// components
import ProjectLinks from "../components/misc/ProjectLinks"

class ProjectTemplate extends Component {
    render() {
        const page = this.props.data.wordpressPage

        return (
            <Layout>
                <Grid container className="homeHeader">
        
                    <Grid item xs={12} md={7} className="headerIntro">
                        <div>
                            <h1 className="postHeader" dangerouslySetInnerHTML={{ __html: page.title }}></h1>
                        </div>
                        <div className="emojiBlurb">
                        <span>☺️</span>
                        </div>
                    </Grid>
                </Grid>
                <Link style={{textDecoration: "none"}} to="/portfolio/">
                    <Button color="secondary">
                    <Arrow /> BACK TO PORTFOLIO
                    </Button>
                </Link>
                <h1 className="project-title">
                    {page.title}
                </h1>
                <div
                    style={{
                        maxWidth: "1500px",
                        margin: "0 auto"
                    }}
                    className="postContainer">
                    <div
                        style={{
                            marginLeft: "15px",
                            marginRight: "15px"
                        }}
                        className="postContent">
                        <div
                            style={{
                                width: "100%",
                                height: "auto",
                            }}
                            className="paraText" dangerouslySetInnerHTML={{ __html: page.content }} />
                    </div>
                </div>

                <ProjectLinks project={page.acf.urlwhereaccessible} github={page.acf.githuburl}/>

            </Layout>
        )
    }
}


export default ProjectTemplate

export const pageQuery = graphql`
    query currentPostQuery2($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            acf{
                project_type
                card_desc
                urlwhereaccessible
                githuburl
              }
            date(formatString: "MMMM DD, YYYY")
        }
    }
`