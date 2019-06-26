import { Link } from 'gatsby'
import React, { Component } from 'react'
import { slide as Menu } from "react-burger-menu";

class Header extends Component {

  render() {
    return (
      <div className="MenuMasterContainer">
        <div>
          <Menu left styles={styles}>
            <a id="home" className="menu-item" href="/">HOME</a><br />
            <a id="about" className="menu-item" href="/thoughts">THOUGHTS</a><br />
            <a id="contact" className="menu-item" href="/contact">CONTACT</a>
          </Menu>
        </div>
      </div>

    )

  }


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

export default Header
