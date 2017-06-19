import React from 'react'
import Layout from '../components/layout'
import Brief from '../components/brief'
import ProductHead from '../components/product-head'
import Download from '../components/download'
import SalesPoints from '../components/sales-points'
import Corporate from '../components/corporate'
import HowToSteps from '../components/how-to-steps'
import { Products } from '../components/constants'
import { Colors } from '../components/constants'

const constant = Products.find(product => product.id === 'gemasco')

const Gemasco = () => (
  <Layout>
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

      <HowToSteps
        steps={[
          'Installez la police code barre *',
          'Importer la base élève',
          'Saisir les constantes de l\'établissement',
          'Saisir la liste des manuels prêtés dans votre établissement',
          'Création des étiquettes code barre'
        ]}
      />

      <div>
        <p>* (Placer le fichier .TTF dans le dossier "Fonts" du répertoire Windows: "C:\Windows\Fonts")</p>

        <style jsx>{`
          p {
            margin-left: 10vw;
            margin-top: 2em;
            color: #555;
          }
        `}</style>
      </div>

      <div>
        <h2>Avec quel matériel utiliser Gemasco ?</h2>
        <ul>
          <li>Lecteur optique de code barre (ou "douchette") avec port USB <span className="muted">environ 60 €</span></li>
          <li>Etiquettes autocollantes 63.5 x 33.9 mm, coins arrondis <span className="muted">6 €HT le paquet de 2400 étiquettes</span></li>
          <li>Etiquettes plastiques pour protéger les codes-barre 50 x 100 mm <span className="muted">26 €HT les 500</span></li>
        </ul>

        <h2>Puis-je utiliser Gemasco en réseau ?</h2>
        <p>Nous recommandons même que le fichier soit placé sur un lecteur réseau accessible par plusieurs utilisateurs. En revanche, Mobilisco reste un outil mono-utilisateur : plusieurs personnes ne peuvent pas saisir ou modifier les informations en même temps.</p>

        <h2>Je n'ai pas les droits pour extraire la base élèves dans SIECLE</h2>
        <p>Demandez-le à votre chef d'établissement, ce qu'il fera à l'aide de l'application DELEG-CE (dans Sconet-Arena).</p>

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
          }

          li {
            margin-bottom: 20px;
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
    </main>
  </Layout>
)

export default Gemasco
