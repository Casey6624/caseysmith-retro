import { Link } from 'gatsby'
import React, { Component } from 'react'
import { slide as Menu } from "react-burger-menu";
// components
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
          <a id="contact" className="menu-item" href="/contact">CONTACT</a>
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
