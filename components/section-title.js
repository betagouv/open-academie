import React from 'react'

const SectionTitle = ({ title, subtitle }) => (
  <div>
    <h2>{ title }</h2>

    {
      subtitle && <p>{ subtitle }</p>
    }

    <style jsx>{`
      h1 {
        font-size: 8em;
        font-weight: 600;
        text-align: center;
        font-family: 'Open Sans', sans-serif;
      }

      p {
        font-size: 2em;
        font-weight: 200;
        color: #999999;
        width: 70vw;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2em;
        text-align: center;
      }`}
    </style>
  </div>
)

export default SectionTitle
