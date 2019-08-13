import React, { useState, useEffect } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Email';
import Send from '@material-ui/icons/Send';
import DateRange from '@material-ui/icons/DateRange';
import LibraryBooks from '@material-ui/icons/LibraryBooks'
//Components
import Layout from "../components/layout";
import Icons from "../components/Icons/Icons"
import SEO from "../components/seo";
import PostsHeader from "./PostsHeader"

export default function PostsTemplate({ data }) {

    const [filter, setFilter] = useState("ALL")

    const [filteredPosts, setFilteredPosts] = useState([])

    function handleFilterChange({ target }){
        if(target.tagName !== "SPAN")return
        if(target.innerHTML === "View All"){
            setFilter("ALL")
            return
        }
        setFilter(target.innerHTML)
    }

    useEffect(() => {
        const finishedFilter = data.allWordpressPost.edges.filter(({ node }) => {
            for(let i = 0; i < node.categories.length; i++){
                if(node.categories[i].name === filter){
                    return node.categories[i].name === filter
                }
            }
        })
        setFilteredPosts(finishedFilter)
    }, [data, filter])

    if(filter !== "ALL"){
        return (
            <Layout>
                <SEO title="Thoughts" keywords={[`Casey`, `Smith`, `Web`, "Mobile", `Developer`, "Sheffield"]} />
                <PostsHeader/>
                <div className="categoryFilterContainer">
            <div>
            <Chip
            icon={<LibraryBooks style={{fontSize: 20}} />}
            label="View All"
            className="slightMarg"
            color="secondary"
            clickable
            onClick={e => handleFilterChange(e)}
            variant="outlined"
            />
            <Chip
            icon={Icons.NodeJS}
            label="NodeJS"
            color="secondary"
            clickable
            variant="outlined"
            onClick={e => handleFilterChange(e)}
            className="slightMarg"
            />
            </div>
            <div>
            <Chip
            icon={Icons.ReactJS}
            className="slightMarg"
            label="ReactJS"
            color="secondary"
            clickable
            onClick={e => handleFilterChange(e)}
            variant="outlined"
            />
            <Chip
            icon={Icons.Hosting}
            label="Hosting"
            className="slightMarg"
            color="secondary"
            clickable
            onClick={e => handleFilterChange(e)}
            variant="outlined"
            />
            </div>
            <div>
            <Chip
            icon={Icons.WordPress}
            label="WordPress"
            className="slightMarg"
            color="secondary"
            clickable
            onClick={e => handleFilterChange(e)}
            variant="outlined"
            />
            <Chip
            icon={Icons.StoryTime}
            label="Story Time"
            className="slightMarg"
            color="secondary"
            clickable
            onClick={e => handleFilterChange(e)}
            variant="outlined"
            />
            </div>
            </div>
    
                <p className="postsFoundText"> {filter} POSTS</p>
                <div className="postList">
                    <Grid container>
                        {filteredPosts.map(({ node }) => (<Grid xs={12} md={4}>
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

    return (

        <Layout>
            <SEO title="Thoughts" keywords={[`Casey`, `Smith`, `Web`, "Mobile", `Developer`, "Sheffield"]} />
            <PostsHeader/>
            <div className="categoryFilterContainer">
            <div>
            <Chip
            icon={<LibraryBooks style={{fontSize: 20}} />}
            label="View All"
            className="slightMarg"
            color="secondary"
            clickable
            onClick={e => handleFilterChange(e)}
            variant="outlined"
            />
            <Chip
            icon={Icons.NodeJS}
            label="NodeJS"
            color="secondary"
            clickable
            variant="outlined"
            onClick={e => handleFilterChange(e)}
            className="slightMarg"
            />
            </div>
            <div>
            <Chip
            icon={Icons.ReactJS}
            className="slightMarg"
            label="ReactJS"
            color="secondary"
            clickable
            onClick={e => handleFilterChange(e)}
            variant="outlined"
            />
            <Chip
            icon={Icons.Hosting}
            label="Hosting"
            className="slightMarg"
            color="secondary"
            clickable
            onClick={e => handleFilterChange(e)}
            variant="outlined"
            />
            </div>
            <div>
            <Chip
            icon={Icons.WordPress}
            label="WordPress"
            className="slightMarg"
            color="secondary"
            clickable
            onClick={e => handleFilterChange(e)}
            variant="outlined"
            />
            <Chip
            icon={Icons.StoryTime}
            label="Story Time"
            className="slightMarg"
            color="secondary"
            clickable
            onClick={e => handleFilterChange(e)}
            variant="outlined"
            />
            </div>
            </div>

            <p className="postsFoundText"> {filter} POSTS</p>
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
                   <Card className="card" id="post">
                    <div className="dateContainer">
                                    <Email />
                                    <p id="wpPostDate"> Monthly Newsletter</p>
                                </div>
                              <h3 className="wpPostTitle">Join My Mailing List!</h3>             
                            <div style={{ display: "flex" }}>
                            <TextField
                                id="mce-EMAIL"
                                label="Your Email Address"
                                name="EMAIL" 
                                placeholder="Your Email Address" 
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