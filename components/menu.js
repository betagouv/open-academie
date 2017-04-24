import React, { Component } from 'react'
import Link from 'next/link'
import MenuItem from './menu-item'
import { Products } from './constants'
// import './Menu.css'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
        <nav>
          <ul id="menu">
            <li id="nav-qui-sommes-nous"><Link href="/"><a>Qui sommes-nous ?</a></Link></li>
            <li id="nav-les-outils" onMouseLeave={() => this.leaveLink()} onMouseEnter={() => this.enterLink()}><Link href="/#les-outils"><a>Les outils</a></Link></li>
            <li><Link href="/"><a>La communauté Open Académie</a></Link></li>
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
          nav {
            position: fixed;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid gainsboro;
            align-items: center;
            width: 100vw;
            background-color: white;
            height: 50px;
          }

          nav ul#menu {
            margin: 0;
            display: flex;
            list-style-type: none;
            height: 50px;
            align-items: center;
          }

          nav ul#menu li {
            display: flex;
            align-items: center;
            height: 100%;
          }

          nav ul#menu li a {
            text-transform: uppercase;
            text-decoration: none;
            color: darkslategrey;
          }

          nav ul#menu li+li {
            margin-left: 15px;
            padding-left: 15px;
          }

          nav ul#menu li#nav-qui-sommes-nous a {
            color: orange;
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
            left: 200px;
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
            left: 75px;
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
