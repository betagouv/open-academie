import React from 'react'
import Layout from '../components/layout'
import Brief from '../components/brief'
import ProductHead from '../components/product-head'
import Download from '../components/download'
import SalesPoints from '../components/sales-points'
import Corporate from '../components/corporate'
import HowToSteps from '../components/how-to-steps'
import ExternalLinks from '../components/external-links'
import Iframe from '../components/iframe'
import { Products } from '../components/constants'
import { Colors } from '../components/constants'

const constant = Products.find(product => product.id === 'mobilisco')

const Mobilisco = () => (
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

      <Iframe title="Qui utilise MobiliSCO ?" url={constant.mapUrl} />

      <HowToSteps
        steps={[
          'Télécharger',
          'Importer la base élèves',
          'Saisir les constantes de l\'établissement',
          'Saisir les données du voyage'
        ]}
      />

      <ExternalLinks constant={constant} />

      <Corporate
        simple="Comme tous les outils Open Académie, MobiliSCO vise à simplifier concrètement vos opérations de gestion des établissements scolaires. Tout en gardant les outils que vous connaissez, c’est la fonctionnalité (plutôt que l’apparence) qui est repensée."
        gratuit="Elaboré par des agents du service public pour eux-mêmes et leurs collègues, MobiliSCO est libre et gratuit. Cette liberté est matérialisée par la licence GPL, utilisée par la majorité des logiciels libres (Linux, Firefox, Libre Office...)."
      />
    </main>
  </Layout>
)

export default Mobilisco
