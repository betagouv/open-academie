import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import './Menu.css'
import MenuItem from './MenuItem'
import { Products } from './constants'

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

    return <nav>
      <ul id="menu">
        <li id="nav-qui-sommes-nous"><Link to="/">Qui sommes-nous ?</Link></li>
        <li id="nav-les-outils" onMouseLeave={() => this.leaveLink()} onMouseEnter={() => this.enterLink()}><HashLink to="/#les-outils">Les outils</HashLink></li>
        <li><Link to="/">La communauté Open Académie</Link></li>
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
  }
}

export default Menu
