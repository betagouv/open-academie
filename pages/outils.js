import React from 'react'
import Layout from '../components/layout'
import { Products } from '../components/constants'
import SectionTitle from '../components/section-title'
import HomeItem from '../components/home-item'

const Outils = () => (
  <Layout>
    <main>
      <section id="les-outils">
        <div className="title">
          <h1>Les outils</h1>
        </div>

        <div className="why">
          <div className="wrapper">
            <p>
              Open Académie est un collectif d’agents publics qui produit des services numériques gratuits pour faciliter l’administration des établissements scolaires.
            </p>
            <p className="cta">
              Envie de vous simplifier la vie ? Testez nos outils !
            </p>
          </div>
        </div>

        <div className="grid">
          <ul>
            {
              Products.map(product => <HomeItem key={ product.id } product={ product } />)
            }
          </ul>
        </div>
        <style jsx>{`
          .title {
            background-image: url('../static/les-outils.jpg');
            background-attachment: fixed;
            background-position: center -125px;
            background-size: cover;
            background-repeat: no-repeat;
            min-height: 25em;
            display: flex;
            align-items: center;
            padding: 4em 0 2em;
            justify-content: center;
            flex-direction: column;
            color: white;
          }

          .why {
            background-image: url('../static/les-outils.jpg');
            background-attachment: fixed;
            background-position: center -125px;
            background-size: cover;
            background-repeat: no-repeat;
            display: flex;
            align-items: center;
            padding: 2em 0 0;
            justify-content: center;
            flex-direction: column;
            color: white;
          }

          .wrapper {
            width: 100%;
            height: 100%;
            background-color: rgba(19, 11, 11, 0.42);
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }

          h1 {
            font-size: 8em;
            font-weight: 600;
            text-align: center;
            margin: 0;
          }

          p {
            max-width: 720px;
            margin: 4em auto 1em;
            line-height: 1.6em;
            font-size: 1.5em;
            font-family: "Open Sans", sans-serif;
          }

          p.cta {
            font-weight: bold;
            margin-top: 0;
            margin-bottom: 4em;
            text-align: center;
          }

          ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 0;
            margin: 0;
          }

          @media (max-width: 768px) {
            ul {
              width: 90vw;
            }
          }
        `}</style>
      </section>
    </main>
  </Layout>
)

export default Outils
