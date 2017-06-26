import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import HomeItem from '../components/home-item'
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

          <div className="buttons">
            <ButtonLink href="/outils" text="Les outils" className="primary" />
            <ButtonLink href="/projet" text="Le projet" className="primary" />
          </div>
        </div>

        <style jsx>{`
          .title {
            background-image: url('../static/home.jpeg');
            background-attachment: fixed;
            background-position: center -125px;
            background-size: cover;
            background-repeat: no-repeat;
            min-height: 35em;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            position: relative;
          }

          img {
            position: absolute;
            top: 70px;
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

          .buttons {
            display: flex;
          }

          h1 {
            color: white;
            font-weight: 400;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 4px;
            font-family: 'Open Sans', sans-serif;
            margin-bottom: 30px;
          }

          @media (min-width: 768px) {
            h1 {
              font-size: 7em;
              margin-top: 2em;
            }
          }

          p {
            font-size: 2em;
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
    </main>
  </Layout>
)
