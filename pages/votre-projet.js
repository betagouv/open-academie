import React from 'react'
import Layout from '../components/layout'
import { Products } from '../components/constants'
import ButtonLink from '../components/button-link'

const constant = Products.find(product => product.id === 'votre-projet')

const VotreProjet = () => (
  <Layout>
    <main>
      <div className="title" style={{ backgroundImage:  `url(${constant.background})`}}>
        <h1>{ constant.title }</h1>
      </div>

      <section className="description">
        <h2>{ constant.tagline }</h2>

        <p>
          La collaboration est une des valeurs clés d'Open Académie.
          Nous partons de l'expérience concrète du personnel des
          établissements scolaires et de leurs idées pour développer
          nos outils.
        </p>
      </section>

      <section className="call-to-action">
        <p>
          Vous voulez moderniser votre profession ?
        </p>
        <p>
          Vous avez une idée que vous aimeriez développer et pour laquelle vous êtes prêt à vous investir ?
        </p>
        <p>
          On vous attendait.
        </p>
      </section>

      <div className="call-to-action-button">
        <ButtonLink href="https://openacademie.typeform.com/to/AfMzhW" text="Je partage mon projet" className="primary" />
      </div>

      <style jsx>{`
        h1 {
          font-size: 8em;
          font-weight: 600;
          text-align: center;
          color: #03a492;
          margin: 0;
        }

        .title {
          background-attachment: fixed;
          background-position: top center;
          background-size: cover;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          flex-direction: column;
          padding: 4em 0 2em;
          height: 25em;
        }

        h2 {
          text-align: center;
          font-weight: 400;
          font-family: 'Quicksand', sans-serif;
          font-weight: 600;
        }

        .description {
          margin: 3em 0;
          padding: 0em 0;
        }

        p {
          font-size: 1.2em;
          line-height: 1.3em;
          max-width: 620px;
          margin: 1em auto;
          font-family: 'Quicksand', sans-serif;
          line-height: 26px;
        }

        .call-to-action {
          padding: 2em 0;
          background-color: #f5f5f9;
          font-weight: 600;
          font-family: 'Quicksand', sans-serif;
        }

        .call-to-action-button {
          text-align: center;
          margin: 3em 0;
        }
      `}</style>
    </main>
  </Layout>
)

export default VotreProjet
