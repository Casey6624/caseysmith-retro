import React, { useState, Fragment } from "react"

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import "./AboutMe.css"
// React 95 stuff
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, List, ListItem, Divider, Fieldset, Window, WindowContent } from "react95";

export default function AboutMe(props) {

    const [currIndex, setCurrIndex] = useState(0)

    const btnActiveColor = "black"

    const copy = [
        "I am a student from Sheffield who loves to make new things. I currently am enrolled at Sheffield Hallam studying a BSc in Computing (Web Development).",
        "I write 90% of my projects in JavaScript and C#. ",
        "I am passionate about open source"
    ]

    return (
        <Grid container>
            <Grid xs={12} md={4} className="btnContainer">
                <button className="btnAboutMe" style={{ color: currIndex === 0 ? btnActiveColor : null }} onClick={() => setCurrIndex(0)}>WHO AM I</button>
                <button className="btnAboutMe" style={{ color: currIndex === 1 ? btnActiveColor : null }} onClick={() => setCurrIndex(1)}>TECH STACK</button>
                <button className="btnAboutMe" style={{ color: currIndex === 2 ? btnActiveColor : null }} onClick={() => setCurrIndex(2)}>WHAT AM I PASSIONATE ABOUT</button>
            </Grid>
            <Grid xs={12} md={8} className="infoContainer">
                <ThemeProvider theme={themes.default}>
                    <div className="win98Container">
                        <Window>
                            <WindowContent>
                                <Fieldset label={currIndex === 0 ? "Who Am I" : currIndex === 1 ? "Tech Stack" : "My Passions"}>{copy[currIndex]}</Fieldset>
                                {currIndex === 1 ? <Fieldset>
                                    Woooo
                                </Fieldset> : null}
                            </WindowContent>
                        </Window>
                        {currIndex === 1 ? <List>
                            <ListItem>🤗 React</ListItem>
                            <ListItem>😃 Node</ListItem>
                            <ListItem>🙂 PHP</ListItem>
                            <ListItem>🤔 .Net</ListItem>
                            <ListItem>💾 Databases</ListItem>
                            <ListItem>💃🏻 Other</ListItem>
                            <Divider />
                            <ListItem disabled>😴 Angular</ListItem>
                        </List> : null}
                    </div>
                </ThemeProvider>
            </Grid>
        </Grid >
    )
}