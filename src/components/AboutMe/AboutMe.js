import React, { useState, Fragment } from "react"
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import "./AboutMe.css"
// copy
import Copy from "./Copy"
// React 95 stuff
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, List, ListItem, Divider, Fieldset, Window, WindowContent, WindowHeader } from "react95";

export default function AboutMe(props) {

    const [currIndex, setCurrIndex] = useState(0)
    const [currTechIndex, setCurrTechIndex] = useState(0)

    const LABELS = ["React", "NodeJS", ".Net", "PHP", "Databases", "Other"]
    const btnActiveColor = "black"

    return (
        <Grid container>
            <Grid xs={12} md={4} className="btnContainer">

                <button className="btnAboutMe" style={{ color: currIndex === 0 ? btnActiveColor : null }} onClick={() => setCurrIndex(0)}>TECH STACK</button>
                <button className="btnAboutMe" style={{ color: currIndex === 1 ? btnActiveColor : null }} onClick={() => setCurrIndex(1)}>WHO AM I</button>
                <button className="btnAboutMe" style={{ color: currIndex === 2 ? btnActiveColor : null }} onClick={() => setCurrIndex(2)}>My Passions</button>
                <Link to="/thoughts/" style={{ textAlign: "center" }}><button className="btnAboutMe">My Thoughts</button></Link >
            </Grid>
            <Grid xs={12} md={8} className="infoContainer">
                <ThemeProvider theme={themes.default}>
                    <div className="win98Container">
                        <Window>
                            <WindowHeader>aboutkc.exe</WindowHeader>
                            <WindowContent>
                                <Fieldset label={currIndex === 0 ? "Tech Stack" : currIndex === 1 ? "Who Am I" : "My Passions"}>{Copy.overview[currIndex]}</Fieldset>
                                {currIndex === 0 ? <Fieldset label={LABELS[currTechIndex]}>
                                    {Copy.moreInfo[currTechIndex]}
                                </Fieldset> : null}
                            </WindowContent>
                        </Window>
                        {currIndex === 0 ? <List style={{ display: "table" }}>
                            <ListItem style={{ background: currTechIndex === 0 ? "#000080" : null, color: currTechIndex === 0 ? "white" : null }} onClick={() => setCurrTechIndex(0)}>🤗 React</ListItem>
                            <ListItem style={{ background: currTechIndex === 1 ? "#000080" : null, color: currTechIndex === 1 ? "white" : null }} onClick={() => setCurrTechIndex(1)}>😃 NodeJS</ListItem>
                            <ListItem style={{ background: currTechIndex === 2 ? "#000080" : null, color: currTechIndex === 2 ? "white" : null }} onClick={() => setCurrTechIndex(2)}>🙂 .Net</ListItem>
                            <ListItem style={{ background: currTechIndex === 3 ? "#000080" : null, color: currTechIndex === 3 ? "white" : null }} onClick={() => setCurrTechIndex(3)}>🤔 PHP</ListItem>
                            <ListItem style={{ background: currTechIndex === 4 ? "#000080" : null, color: currTechIndex === 4 ? "white" : null }} onClick={() => setCurrTechIndex(4)}>💾 Databases</ListItem>
                            <ListItem style={{ background: currTechIndex === 5 ? "#000080" : null, color: currTechIndex === 5 ? "white" : null }} onClick={() => setCurrTechIndex(5)}>💃🏻 Other</ListItem>
                            <Divider />
                            <ListItem disabled>😴 Angular</ListItem>
                        </List> : null}
                    </div>
                </ThemeProvider>
            </Grid>
        </Grid >
    )
}