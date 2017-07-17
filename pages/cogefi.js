import React from 'react'
import Layout from '../components/layout'
import Brief from '../components/brief'
import ProductHead from '../components/product-head'
import Download from '../components/download'
import SalesPoints from '../components/sales-points'
import Corporate from '../components/corporate'
import HowToSteps from '../components/how-to-steps'
import ExternalLinks from '../components/external-links'
import { Products } from '../components/constants'
import { Colors } from '../components/constants'

const constant = Products.find(product => product.id === 'cogefi')

const Cogefi = () => (
  <Layout>
    <main>
      <ProductHead constant={constant} />

      <div className="wrapper">
        <Brief
          description=""
          downloadComponent={<Download constant={constant} />} />

        <div className="description">
          <p>Développé par un collectif d’agents comptables, Cogefi est une solution au format excel qui automatise la production de rapports financiers pour les collèges et lycées, pour un gain de temps phénoménal.</p>
          <p>Cogefi ne cesse d’évoluer, et la version 17.07 est disponible depuis le 26.03.2017</p>
        </div>

        <style jsx>{`
          .wrapper {
            display: flex;
            flex-wrap: wrap;
          }

          .description {
            background-color: #eee;
            width: 50%;
            min-width: 400px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-family: 'Open Sans', sans-serif;
            line-height: 26px;
          }

          p {
            margin-left: 100px;
            max-width: 500px;
            font-size: large;
          }
        `}</style>
      </div>

      <ExternalLinks constant={constant} title="Comment ça marche ?" />

      <p>
        Pour plus d’informations, vous pouvez également vous rendre sur 
        <a href="http://www.espaceple.org/spip.php?article272&artsuite=#paragraphe_article_2">le site</a>
         de l’association des agents comptables d’EPLE. Ils y partagent conseils d’utilisations, vidéos et
        tutoriels d’utilisation de Cogefi.

        <style jsx>{`
          p {
            max-width: 65%;
            margin: 0 auto 2em;
            font-size: 1.4em;
            line-height: 1.5em;
          }
        `}</style>
      </p>

      <Corporate
        simple="Comme tous les outils Open Académie, Cogefi vise à simplifier concrètement vos opérations de gestion des établissements scolaires. Tout en gardant les outils que vous connaissez, c’est la fonctionnalité (plutôt que l’apparence) qui est repensée."
        gratuit="Elaboré par des agents du service public pour eux-mêmes et leurs collègues, Cogefi est libre et gratuit. Cette liberté est matérialisée par la licence GPL, utilisée par la majorité des logiciels libres (Linux, Firefox, Libre Office...)."
      />


    </main>
  </Layout>
)

export default Cogefi
