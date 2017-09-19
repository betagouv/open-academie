import React, { Component } from 'react'
import Link from 'next/link'
import MenuItem from './menu-item'
import { Products } from './constants'
// import './Menu.css'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: props.background,
      hoverDropdown: false,
      hoverLink: false
    }
  }

  enterDropdown() {
    this.setState({ hoverDropdown: true });
  }

  leaveDropdown() {
    this.setState({ hoverDropdown: false });
  }

  enterLink() {
    this.setState({ hoverLink: true });
  }

  leaveLink() {
    this.setState({ hoverLink: false });
  }

  render() {
    let dropDownClass = 'dropdown'

    if (this.state.hoverLink || this.state.hoverDropdown) {
      dropDownClass = 'dropdown dropdown-active'
    }

    return (
      <header>
        <nav className={this.state.theme}>
          <ul id="menu">
            <li><Link href="/"><a>Accueil</a></Link></li>
            <li id="les-outils" onMouseLeave={() => this.leaveLink()} onMouseEnter={() => this.enterLink()}><a href="/outils">Les outils</a></li>
            <li id="je-projet"><Link href="/projet"><a>Le projet</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
          </ul>

          <div className={dropDownClass}>
            <div className="dropdown-background"></div>
            <div className="dropdown-arrow"></div>
            <div className="dropdown-container"onMouseLeave={() => this.leaveDropdown()} onMouseEnter={() => this.enterDropdown()}>
              <ul className="tools-group">
                {
                  Products.map(product => <MenuItem key={ product.id } product={ product } />)
                }
              </ul>
            </div>
          </div>
        </nav>

        <style jsx>{`
          header {
            text-align: right;
          }

          .light {
            background-color: none;
          }

          .light ul#menu li a {
            color: #333;
          }

          .dark {
            background-color: rgba(19, 0, 0, 0.21);
          }

          .dark ul#menu li a {
            color: white;
          }

          nav {
            position: fixed;
            display: flex;
            justify-content: flex-end;
            width: 100vw;
            height: 50px;
            z-index: 1;
          }

          nav ul#menu {
            margin: 0;
            display: flex;
            list-style-type: none;
            height: 50px;
            align-items: center;
            padding: 0;
            margin-right: 70px;
          }

          nav ul#menu li {
            display: flex;
            align-items: center;
            height: 100%;
          }

          nav ul#menu li a {
            text-transform: uppercase;
            text-decoration: none;
            color: white;
            font-size: 1.2em;
            font-family: 'Open Sans', sans-serif;
          }

          nav ul#menu li+li {
            margin-left: 15px;
            padding-left: 15px;
          }

          @media (max-width: 768px) {
            nav ul#menu {
              font-size: 0.4em;
            }

            nav ul#menu li+li {
              margin-left: 5px;
              padding-left: 5px;
            }
          }

          .dropdown {
            position: absolute;
            z-index: 1000;
            right: 830px;
            top: 49px;
            pointer-events: none;
            opacity: 0;
            will-change: opacity;
            transition-property: opacity;
            transition-duration: .25s;
            display: block;
          }

          .dropdown-arrow {
            position: absolute;
            top: -6px;
            left: 465px;
            margin: 0 0 0 -6px;
            width: 12px;
            height: 12px;
            border-radius: 4px 0 0 0;
            background: #fff;
            box-shadow: -3px -3px 5px rgba(82,95,127,.04);
            transform: rotate(45deg);
          }

          .dropdown-background {
            position: absolute;
            top: 0;
            left: 0;
            background: #fff;
            border-radius: 4px;
            overflow: hidden;
            box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
            width: 590px;
            height: 340px;
          }

          .dropdown-container {
            overflow: hidden;
            position: absolute;
            top: 0;
            left: 0;
            width: 520px;
            height: 300px;
            padding: 20px 35px;
          }

          .dropdown.dropdown-active,
          .dropdown.link-active {
            opacity: 1;
            pointer-events: auto;
            transform: none;
          }

          .dropdown.dropdown-active .dropdown-background,
          .dropdown.link-active .dropdown-background {
            transform: rotate(0) scaleX(1) scaleY(1);
            transform-origin: 0 0;
          }

          .tools-group {
            display: flex;
            flex-wrap: wrap;
            margin: -5px -10px;
            list-style: none;
            padding: 0;
          }
        `}</style>
      </header>
    )
  }
}

export default Menu
