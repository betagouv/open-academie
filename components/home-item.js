import React from 'react'
import Link from 'next/link'

const HomeItem = ({ product }) => {
  const { id, imageSource, title, tagline, page, description } = product

  return (
    <li className={ id } className='list-item'>
      <div className="wrapper">
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
      </div>

      <style jsx>{`
        .wrapper {
          max-width: 275px;
          margin: auto;
        }

        .list-item:nth-child(2n+1) .wrapper {
          margin-right: 50px;
        }

        .list-item:nth-child(2n) .wrapper {
          margin-left: 50px;
        }

        .list-item:nth-child(2n) {
          background-color: #f5f5f9;
        }

        .list-item {
          list-style-type: none;
          width: calc(50% - 50px);
          padding: 65px 25px;
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
        }

        a {
          color: #222;
        }

        a.logo img {
          width: 80px;
          height: 80px;
        }

        .tagline {
          margin: 0 0 0.6em 0;
        }

        .description {
          font-weight: 200;
          margin-top: 0;
          line-height: 1.5em;
          color: rgba(25, 10, 10, 0.68);
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
