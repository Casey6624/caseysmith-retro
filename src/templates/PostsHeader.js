import React, { Fragment } from "react"
import Button from '@material-ui/core/Button';
import Arrow from '@material-ui/icons/KeyboardArrowLeft';
import ArrowR from '@material-ui/icons/KeyboardArrowRight';
import Grid from '@material-ui/core/Grid';
import Link from "gatsby-link"

export default function PostsHeader({ titleText = "Stuff I've Written About", emoji = "✍️" }){
    return(
        <Fragment>
            <div className="thoughtsMasterSVGContainer">
        <Grid container className="postsHeaderContainer">   

            <Grid item xs={12} md={7} className="headerIntro">
                <div>
    <h1 className="postsHeader"> {titleText} </h1>
                </div>
            </Grid>
            <Grid item xs={12} md={4} className="emojiContainer">
                <h1 className="emojiBlurb"><span role="img"> {emoji} </span></h1>
            </Grid>
        </Grid>
    </div>
        <div className="side-by-side-flex">
        <Link style={{textDecoration: "none"}} to="/">
            <Button color="secondary">
            <Arrow /> BACK TO HOME
            </Button>
    </Link>
        <Link style={{textDecoration: "none"}} to="/portfolio">
            <Button color="secondary">
            VIEW MY PORTFOLIO <ArrowR /> 
            </Button>
    </Link>
        </div>
        </Fragment>
    )
}