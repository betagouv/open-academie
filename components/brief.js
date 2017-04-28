import React from 'react'

const Brief = ({ description, downloadComponent }) => (
  <section>
    <p>
      { description }
    </p>

    <div>
      { downloadComponent }
    </div>

    <style jsx>{`
      p,
      div {
        margin: 0;
        margin-top: 65px;
        max-width: 350px;
        margin-left: auto;
        margin-right: 125px;
        font-size: 1.1em;
      }

      @media (min-width: 768px) {
        section {
          width: 50%;
        }
      }
    `}</style>
  </section>
)

export default Brief
