import React from 'react'
import Link from 'next/link'

const MenuItem = ({ product }) => {
  const { id, imageSource, title, tagline, page } = product

  return (
    <li className={ id } className="list-item">
      <Link href={page}>
        <a className="link-container">
          <img src={ imageSource } alt="" />
          <div className="link-content">
            <h3>{ title }</h3>
            <p className="tagline">{ tagline }</p>
          </div>
        </a>
      </Link>

      <style jsx>{`
        .list-item {
          text-align: left;
          display: flex;
          flex: 1 0 50%;
        }

        h3 {
          color: #222;
        }

        .link-container {
          padding: 18px 10px;
          flex: 1;
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .link-container img {
          min-width: 50px;
          min-height: 50px;
          width: 50px;
          height: 50px;
        }

        .link-content {
          margin-left: 20px;
        }

        .link-content h3 {
          margin: 0;
          font-weight: 400;
        }

        .link-content p {
          color: #797979;
          margin-top: 10px;
          margin-bottom: 0;
        }
      `}</style>
    </li>
  )
}

export default MenuItem
