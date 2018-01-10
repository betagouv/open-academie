import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'

export default () => (
  <Layout title='Contactez-nous' background={'light'}>
    <main>
      <h1>Idée, problème, ou simple envie de discuter, nous sommes à votre écoute.</h1>

      <div>
        <a href="mailto:contact@openacademie.beta.gouv.fr?subject='Contact Open Académie'">
          <img  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzIwMCcgZmlsbD0iIzAwMDAwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cG9seWdvbiBwb2ludHM9IjM2LjMsNTcuOSAxMS41LDgxIDg2LjUsODEgNjEuNSw1Ny42IDY0LjIsNTQuNyA5MCw3OC44IDkwLDIzLjIgNDksNjIuNCA4LDIzLjIgOCw3OC44IDMzLjYsNTUgICIvPjxwb2x5Z29uIHBvaW50cz0iODYuNiwyMSAxMS40LDIxIDQ5LDU2LjkgICIvPjwvZz48L3N2Zz4=" />
          openacademie<br/>@beta.gouv.fr
        </a>
      </div>

      <style jsx>{`
        main {
          padding: 12em 0;
        }

        h1 {
          max-width: 900px;
          margin: 0 auto 3em;
          font-family: 'Quicksand', sans-serif;
          text-align: center;
          letter-spacing: 3px;
        }

        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #333;
          text-decoration: none;
          font-family: 'Quicksand', sans-serif;
          font-size: 1.5em;
        }

        img {
          width: 100px;
          height: auto;
        }
      `}</style>
    </main>
  </Layout>
)
