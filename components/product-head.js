import React from 'react'

const ProductHead = ({ constant }) => {
  const { imageSource, title, tagline, color, background } = constant

  return (
    <div>
      <img src={ imageSource } alt="" />
      <h1 style={{ color }}>{ title }</h1>
      <p>{ tagline }</p>
      <style jsx>{`
        div {
          text-align: center;
          padding-top: 100px;
          padding-bottom: 3em;
        }

        img {
          height: 150px
        }

        h1 {
          font-weight: 400;
          font-family: 'Quicksand', sans-serif;
          font-size: 2.8em
        }

        p {
          color: #797979;
          font-size: 1.3em;
        }
      `}</style>
    </div>
  )
}

export default ProductHead
