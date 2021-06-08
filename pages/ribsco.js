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

const constant = Products.find(product => product.id === 'ribsco')

const ribsco = () => (
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
          'Soumettre un fichier de paiement ou prélèvement XML à vérification',
          'Obtenir un rapport sur les éventuelles erreurs de coordonnées bancaires',
          'Co-construire une base des codes BIC à jour'
        ]}
      />

      <ExternalLinks constant={constant} />

      <Corporate
        simple="Comme tous les outils Open Académie, RibSCO vise à simplifier concrètement vos opérations de gestion des établissements scolaires. RibSCO permet de vérifier en un instant que votre travail ne comporte pas d'erreur de coordonnées bancaires."
        gratuit="Elaboré par des agents du service public pour eux-mêmes et leurs collègues, RibSCO est libre et gratuit. Cette liberté est matérialisée par la licence EUPL 1.2, validée par l'Union européenne dans ses 17 langues officielles."
      />
    </main>
  </Layout>
)

export default ribsco
