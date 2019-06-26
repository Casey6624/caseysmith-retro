import React, { Component } from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { graphql } from "gatsby";

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost

        return (
            <Layout>
                <Link
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        textDecoration: "none",
                        margin: "15px"
                    }}
                    to="/thoughts/">
                    <button className="backButton">GO BACK</button>
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
                        <h1
                            style={{
                                textAlign: "center",
                                fontWeight: "bold",
                                margin: "15px",
                            }}
                            dangerouslySetInnerHTML={{ __html: post.title }} />
                        <div
                            style={{
                                width: "100%",
                                height: "auto"
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