import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import HomeItem from '../components/home-item'
import SectionTitle from '../components/section-title'
import ButtonLink from '../components/button-link'
import { Products } from '../components/constants'

export default () => (
  <Layout>
    <main>
      <div className="title">
        <img src="static/logo-sgmap-hires.jpg" alt="Logo du SGMAP" />

        <h1>Open Académie</h1>

        <div className="description">
          <p>
            Des solutions <strong>numériques</strong> pour l’administration <strong>scolaire</strong>
          </p>

          <ButtonLink href="/#les-outils" text="En savoir plus" className="primary" />
        </div>

        <style jsx>{`
          .title {
            background-image: url('../static/homepage.jpg');
            background-attachment: fixed;
            background-position: top center;
            background-size: cover;
            background-repeat: no-repeat;
            min-height: 25em;
            height: 75vh;
            padding: 4em 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
          }

          img {
            position: absolute;
            right: 20px;
            height: 110px;
          }

          @media (max-width: 768px) {
            img {
              display: none;
            }
          }

          .description {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          h1 {
            font-size: 4em;
            color: #26a69a;
            font-weight: 600;
            text-align: center;
          }

          @media (min-width: 768px) {
            h1 {
              font-size: 6em;
              margin-top: 1.3em;
            }
          }

          p {
            font-size: 1.8em;
            max-width: 900px;
            text-align: center;
            color: white;
            font-family: 'Open Sans', sans-serif;
          }

          ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: inline-flex;
            flex-wrap: wrap;
            justify-content: center;
          }
        `}</style>
      </div>

      <section id="qui-sommes-nous">
        <p><strong>Open Académie</strong> est un collectif d'agents publics qui produit des services numériques gratuits pour simplifier l'administration des établissements scolaires.</p>

        <p>Envie de vous simplifier la vie ?</p>

        <ButtonLink href="/#les-outils" text="Testez nos outils" className="muted" />

        <style jsx>{`
          section {
            padding: 3em 0;
            background-color: #eeeef0;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          p {
            font-size: 1.2em;
            text-align: center;
            max-width: 620px;
          }
        `}</style>
      </section>

      <section id="les-outils">
        <SectionTitle
          title="Les outils"
          subtitle="Les outils informatiques d’Open Académie pour simplifier la vie administrative des établissements scolaires" />

        <ul>
          {
            Products.map(product => <HomeItem key={ product.id } product={ product } />)
          }
        </ul>

        <style jsx>{`
          section {
            padding: 3em 0;
          }

          ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 0;
            width: 60vw;
            margin: auto;
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
