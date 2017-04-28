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
          padding: 3em 0;
        }

        img {
          height: 150px
        }

        h1 {
          font-weight: 400;
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
