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

const constant = Products.find(product => product.id === 'cogefi')

const Cogefi = () => (
  <Layout>
    <main>
      <ProductHead constant={constant} />

      <div className="wrapper">
        <Brief
          description=""
          downloadComponent={<Download />} />

        <div className="description">
          <p>Développé par un collectif d’agents comptables, Cogefi est une solution au format excel qui automatise la production de rapports financiers pour les collèges et lycées, pour un gain de temps phénoménal.</p>
          <p>Cogefi ne cesse d’évoluer, et  la  version 17.07 est disponible depuis le 26.03.2017</p>
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
            margin-left: 50px;
            max-width: 230px;
          }
        `}</style>
      </div>

      <HowToSteps />

      <Corporate
        simple="Comme tous les outils Open Académie, Cogefi vise à simplifier concrètement vos opérations de gestion des établissements scolaires. Tout en gardant les outils que vous connaissez, c’est la fonctionnalité (plutôt que l’apparence) qui est repensée."
        gratuit="Elaboré par des agents, pour des agents, Cogefi est libre et gratuit. Cette liberté est matérialisée par la licence GPL, utilisée par la majorité des logiciels libres (Linux, Firefox, Libre Office...)"
      />
    </main>
  </Layout>
)

export default Cogefi
