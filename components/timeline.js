import React from 'react'

const Timeline = ({ title, items }) => (
  <section>
    <div>
      <h2>{ title }</h2>
      <ul>
        {
          items.map(({ date, description }, idx) => {
            return <li key={ idx }><strong>{ date }&nbsp;:</strong> { description }</li>
          })
        }
      </ul>
    </div>
    <style jsx>{`
      section {
        padding: 25px;
        background-color: #f5f5f9;
      }

      div {
        max-width: 350px;
      }

      h2 {
        padding-left: 40px;
        color: #29adad;
        margin: 0;
        font-size: 1.2em;
        font-family: 'Quicksand', sans-serif;
      }

      ul {
        padding-left: 15px;
        font-family: 'Open Sans', sans-serif;
        line-height: 26px
      }

      li {
        margin: 15px 0;
        margin-left: 25px;
        font-family: 'Open Sans', sans-serif;

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
