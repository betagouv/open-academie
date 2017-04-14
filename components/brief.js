import React from 'react'

const Brief = ({ description, downloadLink }) => (
  <section>
    <p>
      { description }
    </p>

    <p>
      Les demandes se font directement sur <a href={ downloadLink.href }>{ downloadLink.label }</a>
    </p>

    <style jsx>{`
      p {
        margin: 0;
        margin-top: 65px;
        max-width: 350px;
        margin-left: auto;
        margin-right: 35px;
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
