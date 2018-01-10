import Link from 'next/link'
import Head from 'next/head'
import Menu from './menu'

export default ({ children, title = '', background = 'dark' }) => (
  <div>
    <Head>
      <title>{ title ? `${title} - Open Académie` : 'Open Académie'}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Marvel" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Quicksand:400,500,700" rel="stylesheet" />
    </Head>

    <Menu background={background} />

    <div>
      { children }
    </div>

    <footer>
      <p>Open Académie</p>
      <a href="mailto:contact@openacademie.beta.gouv.fr">contact@openacademie.beta.gouv.fr</a>

      <style jsx>{`
        footer {
          text-align: center;
          padding: 2em 0 4em;
          font-family: 'Quicksand', sans-serif;
          background-color: #152b29;
          color: white;
        }

        p {
          font-weight: normal;
          font-size: 2em;
        }

        a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </footer>
  </div>
)
