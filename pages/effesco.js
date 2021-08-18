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

const constant = Products.find(product => product.id === 'effesco')

const effesco = () => (
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

 
      <HowToSteps
        steps={[
          'Télécharger',
          'Importer la base élèves SIECLE',
          'Indiquer les paramètres de la politique sociale de l\'établissement',
          'Saisir les demandes des familles'
          'Convoquer la commission sociale, saisir les décisions'
        ]}
      />

      <ExternalLinks constant={constant} />

      <Corporate
        simple="Comme tous les outils Open Académie, EffeSCO vise à simplifier concrètement vos opérations de gestion des établissements scolaires. EffeSCO permet de gérer sans effort l'ensemble des dispositifs d'aide sociale de l'EPLE, de manière confidentielle, sûre et rapide."
        gratuit="Elaboré par des agents du service public pour eux-mêmes et leurs collègues, EffeSCO est libre et gratuit. Cette liberté est matérialisée par la licence EUPL 1.2, validée par l'Union européenne dans ses 17 langues officielles."
      />
    </main>
  </Layout>
)

export default effesco
