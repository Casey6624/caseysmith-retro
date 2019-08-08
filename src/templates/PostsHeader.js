import React, { Fragment } from "react"
import Button from '@material-ui/core/Button';
import Arrow from '@material-ui/icons/KeyboardArrowLeft';
import Grid from '@material-ui/core/Grid';
import Link from "gatsby-link"

export default function PostsHeader(){
    return(
        <Fragment>
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
        </Fragment>
    )
}