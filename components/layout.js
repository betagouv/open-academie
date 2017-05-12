import Link from 'next/link'
import Head from 'next/head'
import Menu from './menu'

export default ({ children, title = 'Open Académie' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Marvel" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Quicksand:400,500,700" rel="stylesheet" />
    </Head>

    <Menu />

    <div>
      { children }
    </div>
  </div>
)
