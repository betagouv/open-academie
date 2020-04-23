import React from 'react'
import Layout from '../components/layout'
import Brief from '../components/brief'
import ProductHead from '../components/product-head'
import Download from '../components/download'
import SalesPoints from '../components/sales-points'
import Corporate from '../components/corporate'
import HowToSteps from '../components/how-to-steps'
import Iframe from '../components/iframe'
import ExternalLinks from '../components/external-links'
import { Products } from '../components/constants'
import { Colors } from '../components/constants'

const constant = Products.find(product => product.id === 'gemasco')

const Gemasco = () => (
  <Layout title={constant.title}>
    <main>
      <ProductHead constant={constant} />

      <div className="wrapper">

        <Brief
          description={constant.description}
          downloadComponent={<Download constant={constant} />} />

        <SalesPoints points={constant.salesPoints} />

        <style jsx>{`
          .wrapper {
            display: flex;
            flex-wrap: wrap;
          }
        `}</style>
      </div>

      <Iframe title="Qui utilise GemaSCO ?" url={constant.mapUrl} />

      <HowToSteps
        steps={[
          'Importer la base élève',
          'Saisir les constantes de l\'établissement',
          'Saisir la liste des manuels prêtés dans votre établissement',
          'Installer la police code-barres et créer les étiquettes code-barres'
        ]}
      />

      <div>
        <h2>Comment installer la police code barre ?</h2>
        <p>Un bouton dans le menu des Paramètres de GemaSCO vous permet de l\'installer en quelques clics</p>

        <h2>Avec quel matériel utiliser GemaSCO ?</h2>
        <ul>
          <li>Lecteur optique de code-barres (ou "douchette") avec port USB <span className="muted">environ 40 €</span></li>
          <li>Etiquettes autocollantes 63.5 x 33.9 mm, coins arrondis <span className="muted">6 €HT le paquet de 2400 étiquettes</span></li>
          <li>Etiquettes plastiques pour protéger les codes-barre 50 x 100 mm <span className="muted">26 €HT les 500</span></li>
        </ul>

        <h2>Puis-je utiliser GemaSCO en réseau ?</h2>
        <p>Les fonctions réseau peuvent être activées par une personne sachant comment agir. Explications en vidéo : https://tube.ac-lyon.fr/video-channels/openacademie_channel/videos</p>

        <h2>Je n'ai pas les droits pour extraire la base élèves dans SIECLE</h2>
        <p>Demandez-le à votre chef d\'établissement, ce qu\'il fera à l'aide de l\'application DELEG-CE (dans Sconet-Arena).</p>

        <style jsx>{`
          div {
            margin: 4em 0;
          }

          ul {
            margin: auto;
            max-width: 460px;
          }

          h2 {
            max-width: 500px;
            margin: 2em auto;
            font-family: 'Quicksand', sans-serif;
          }

          li {
            margin-bottom: 20px;
            font-family: 'Open Sans', sans-serif;
          }

          p {
            margin: auto;
            max-width: 460px;
            color: #555;
            line-height: 1.6em;
          }

          .muted {
            color: #888;
          }
        `}</style>
      </div>

      <ExternalLinks constant={constant} customStyle={{backgroundColor: 'whitesmoke'}} />

    </main>
  </Layout>
)

export default Gemasco
