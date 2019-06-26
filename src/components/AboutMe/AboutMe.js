import React, { useState } from "react"

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import "./AboutMe.css"

export default function AboutMe(props) {

    const [currIndex, setCurrIndex] = useState(0)

    return (
        <Grid container>
            <Grid xs={4} className="btnContainer">
                <Button color="secondary" variant="contained">WHO AM I</Button> <br />
                <Button color="secondary" variant="contained">TECH STACK</Button> <br />
                <Button color="secondary" variant="contained">WHAT AM I PASSIONATE ABOUT</Button>
            </Grid>
            <Grid xs={8}>
                wooopers
            </Grid>
        </Grid >
    )
}