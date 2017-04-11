import React from 'react'
import Link from 'next/link'

const HomeItem = ({ product }) => {
  const { id, imageSource, title, tagline, page, description } = product

  return (
    <li className={ id } className='list-item'>
      <Link href={page}>
        <a className="logo">
          <img src={ imageSource } alt="" />
        </a>
      </Link>
      <Link href={page}>
        <a className="title">
          <h3>{ title }</h3>
        </a>
      </Link>
      <p className="tagline">{ tagline }</p>
      <p className="description">{ description }</p>
      <Link href={page}>
        <a>En savoir plus</a>
      </Link>

      <style jsx>{`
        .list-item:nth-child(2n+1) {
          padding-right: 65px;
        }

        .list-item:nth-child(2n) {
          padding-left: 65px;
        }

        .list-item {
          list-style-type: none;
          width: 22vw;
          padding-bottom: 65px;
        }

        .list-item h3 {
          font-weight: 400;
          font-size: 1.6em;
        }

        .list-item div.logo-title {
          width: 30%;
          text-align: center;
        }

        .list-item div.content {
          width: 50%;
        }

        a.title {
          text-decoration: none;
          color: #222;
        }

        a.logo img {
          width: 100px;
          height: 100px;
        }

        .tagline {
          font-weight: 200;
          margin: 0 0 0.6em 0;
        }

        .description {
          margin-top: 0;
        }

        @media (max-width: 768px) {
          .list-item {
            width: 100%;
            text-align: center;
          }

          .list-item:nth-child(2n+1) {
            padding-right: 0;
          }

          .list-item:nth-child(2n) {
            width: 100%;
            padding-left: 0;
          }
        }
      `}</style>
    </li>
  )
}

export default HomeItem
