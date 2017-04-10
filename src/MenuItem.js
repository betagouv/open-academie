import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = ({ product }) => {
  const { id, imageSource, title, tagline, route } = product

  return (
    <li className={ id }>
      <Link className="link-container" to={route}>
        <img src={ imageSource } alt="" />
        <div className="link-content">
          <h3>{ title }</h3>
          <p className="tagline">{ tagline }</p>
        </div>
      </Link>
    </li>
  )
}

export default MenuItem
