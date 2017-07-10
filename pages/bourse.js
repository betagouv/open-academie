import React from 'react'
import Layout from '../components/layout'
import Timeline from '../components/timeline'
import Brief from '../components/brief'
import Corporate from '../components/corporate'
import ProductHead from '../components/product-head'
import ExternalLinks from '../components/external-links'
import { Products } from '../components/constants'

const constant = Products.find(product => product.id === 'bourse')

const timelineItems = [
  {
    date: 'Automne 2015',
    description: `la demi-douzaine de collèges qui testent le service de demande
      de bourse en ligne réussissent leur campagne annuelle dans des conditions d’efficacités inédites,
      réservant le temps gagné aux familles les plus en difficulté`,
  },
  {
    date: 'Automne 2016',
    description: 'Bourse est ouvert dans 100 établissements en France',
  },
  {
    date: 'Juillet 2017',
    description: 'Plus de 270 établissements ont déjà demandé à s’inscrire au service',
  },
]

const downloadComponent = <p>Les demandes se font directement sur <a href={ constant.downloadLink.href }>{ constant.downloadLink.label }</a></p>

const Bourse = () => (
  <Layout>
    <main>
      <ProductHead constant={constant} />

      <div>
        <Brief
          description={constant.description}
          downloadComponent={downloadComponent} />

        <Timeline title="Brève de bourse" items={timelineItems} />

        <style jsx>{`
          div {
            display: flex;
          }
        `}</style>
      </div>

      <ExternalLinks constant={constant} />

      <Corporate
        simple="Comme tous les outils Open Académie, Bourse vise à simplifier concrètement vos opérations d’intendance dans les établissements scolaires. L’intégralité de l’outil est pensée pour procurer à l’utilisateur la meilleure expérience possible."
        gratuit="Elaboré par des agents, pour des agents, Bourse est libre et gratuit. Cette liberté est matérialisée par une licence GPL, utilisée par la majorité des logiciels libres (Linux, Firefox, Libre Office...)."
      />
    </main>
  </Layout>
)

export default Bourse
