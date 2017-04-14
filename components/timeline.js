import React from 'react'

const Timeline = ({ title, items }) => (
  <section>
    <h2>{ title }</h2>
    <ul>
      {
        items.map(({ date, description }) => {
          return <li><strong>{ date }&nbsp;:</strong> { description }</li>
        })
      }
    </ul>
    <style jsx>{`
      section {
        padding: 25px;
        max-width: 350px;
      }

      h2 {
        padding-left: 40px;
        color: #29adad;
        margin: 0;
        font-size: 1.2em;
      }

      ul {
        padding-left: 15px;
      }

      li {
        margin: 15px 0;
        margin-left: 25px;
      }

      @media (min-width: 768px) {
        section {
          width: 50%;
        }
      }
    `}</style>
  </section>
)

export default Timeline
