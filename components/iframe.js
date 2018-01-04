import React from 'react'

const Iframe = ({ title, url }) => (
  <div>
    <h2>{ title }</h2>

    <div className="container">
      <iframe src={url} allowfullscreen></iframe>
    </div>

    <style jsx>{`
      h2 {
        text-align: center;
        margin: 5em 0 2em;
        font-size: 2em;
        font-weight: 500;
        font-family: 'Quicksand', sans-serif;
      }

      .container {
        position: relative;
        height: 0;
        overflow: hidden;
        padding-bottom: 36vw;
        width: 64vw;
        margin: auto;
      }

      iframe {
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
)

export default Iframe
