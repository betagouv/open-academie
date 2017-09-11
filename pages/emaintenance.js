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

const constant = Products.find(product => product.id === 'emaintenance')

const EMaintenance = () => (
  <Layout>
    <main>
      <ProductHead constant={constant} />

      <div className="wrapper">
        <Brief
          description={constant.description}
          downloadComponent={<div>Accédez-y directement sur <a href="http://e-maintenance.aji-france.com/">le site de l’AJI.</a></div>} />

        <div className="description">
          <h2>Qui est l'AJI ?</h2>
          <p>
            L’AJI, partenaire d’Open Académie, est une “association professionnelle
            nationale des personnels d'intendance des établissements publics d'enseignement français,”
            créée en 1989. Elle vise à améliorer  la gestion des établissements scolaires par
            la mise à disposition d’information et d’outils.
          </p>
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

          h2 {
            margin-left: 100px;
          }

          p {
            margin-left: 100px;
            max-width: 500px;
            font-size: large;
          }
        `}</style>
      </div>

      <Corporate
        simple="Comme tous  les outils Open Académie, E-maintenance vise à simplifier concrètement vos opérations de gestion des établissements scolaires. Tout en gardant les outils que vous connaissez, c’est la fonctionnalité (plutôt que l’apparence) qui est repensée."
        gratuit="Elaboré par des agents du service public pour eux-mêmes et leurs collègues, E-maintenance est libre et gratuit. Cette liberté est matérialisée par la licence GPL, utilisée par la majorité des logiciels libres (Linux, Firefox, Libre Office...)"
      />
    </main>
  </Layout>
)

export default EMaintenance
