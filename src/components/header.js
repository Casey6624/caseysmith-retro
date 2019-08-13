import { Link } from 'gatsby'
import React, { Component } from 'react'
import { slide as Menu } from "react-burger-menu";
// components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Email';
import Send from '@material-ui/icons/Send';
import Icons from "./Icons/Icons"

export default function Header(props) {

  const GITHUB_URL = "https://github.com/Casey6624"
  const TWITTER_URL = "https://twitter.com/CaseyKCSmith"

  return (
    <div className="MenuMasterContainer">
      <div>
        <Menu left styles={styles}>
          <a id="home" className="menu-item" href="/">HOME</a><br />
          <a id="about" className="menu-item" href="/thoughts">THOUGHTS</a><br />
          <div id="mc_embed_signup">
                            <form action="https://gmail.us3.list-manage.com/subscribe/post?u=760f4d6895db021cca3b4ffbc&id=2fecd0b44c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                            <div id="mc_embed_signup_scroll">
                                <p style={{
                                  textAlign: "center"
                                }}>
                                  - - - - - -
                                </p>
                              <Card className="signupCard">
                              <p id="signUpPls">
                                Join My Mailing List!
                              </p>
                            <div style={{ display: "flex" }}>
                            <TextField
                                id="mce-EMAIL"
                                label="Your Email Address"
                                name="EMAIL" 
                                placeholder="Example@123.com" 
                                required
                                className="email"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <Email />
                                    </InputAdornment>
                                ),
                                }}
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
                            </div>
                                <div aria-hidden="true"><input type="text" name="b_760f4d6895db021cca3b4ffbc_2fecd0b44c" tabIndex={-1} defaultValue style={{display: "none"}}/></div>
                            </form>
                        </div>
        </Menu>
        <div className="socialIcons">
          <p id="githubLogo" onClick={() => window.open(GITHUB_URL)}>{Icons.Github}</p>
          <p id="twitterLogo" onClick={() => window.open(TWITTER_URL)}>{Icons.Twitter}</p>
        </div>
      </div>
    </div >

  )
}
let highlightColor = "#ffc600"

let styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: highlightColor
  },
  bmBurgerBarsHover: {
    background: highlightColor
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: highlightColor
  },
  bmMenu: {
    background: '#405C72',
    padding: '2.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: highlightColor
  },
  bmItemList: {
    color: '#f2f2f2',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.5)'
  }
}
