import React, { Component } from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { graphql } from "gatsby";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Arrow from '@material-ui/icons/KeyboardArrowLeft';

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost

        return (
            <Layout>
                <Grid container className="homeHeader">
                    <Grid item xs={12} md={7} className="headerIntro">
                        <div>
                            <h1 className="hi" dangerouslySetInnerHTML={{ __html: post.title }}></h1>
                        </div>
                        <div class="emojiBlurb">
                        <span>🤔</span>
                        </div>
                    </Grid>
                </Grid>
                <Link style={{textDecoration: "none"}} to="/thoughts/">
                    <Button color="secondary">
                    <Arrow /> BACK TO POSTS
                    </Button>
                </Link>
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
                            className="paraText" dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                </div>
            </Layout>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
        }
    }
`