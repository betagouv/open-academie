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

const constant = Products.find(product => product.id === 'prepasco')

const prepasco = () => (
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
          'Saisir les mentions et confirmer les points ECTS',
          'Editer des certificats d\'équivalence conformes'
        ]}
      />

      <ExternalLinks constant={constant} />

      <Corporate
        simple="Comme tous les outils Open Académie, PrépaSCO vise à simplifier concrètement vos opérations de gestion des établissements scolaires. PrépaSCO permet de générer sans effort des certificats d'équivalence ECTS propres et conformes."
        gratuit="Elaboré par des agents du service public pour eux-mêmes et leurs collègues, PrépaSCO est libre et gratuit. Cette liberté est matérialisée par la licence EUPL 1.2, validée par l'Union européenne dans ses 17 langues officielles."
      />
    </main>
  </Layout>
)

export default prepasco
