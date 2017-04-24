import React from 'react'

const SectionTitle = ({ title, subtitle }) => (
  <div>
    <h2>{ title }</h2>

    {
      subtitle && <p>{ subtitle }</p>
    }

    <style jsx>{`
      h2 {
        font-size: 4em;
        font-weight: 400;
        text-align: center;
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
