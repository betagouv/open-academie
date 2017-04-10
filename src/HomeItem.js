import React from 'react'
import { Link } from 'react-router-dom'

const HomeItem = ({ product }) => {
  const { id, imageSource, title, tagline, route, description } = product

  return (
    <li className={ id }>
      <Link className="logo" to={route}><img src={ imageSource } alt="" /></Link>
      <h3>{ title }</h3>
      <p className="tagline">{ tagline }</p>
      <p className="description">{ description }</p>
      <Link to={route}>En savoir plus</Link>
    </li>
  )
}

export default HomeItem
