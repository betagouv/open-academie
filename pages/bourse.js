import React from 'react'
import Layout from '../components/layout'
import Timeline from '../components/timeline'
import Brief from '../components/brief'
import ProductHead from '../components/product-head'
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
    description: 'Bourse est ouvert dans 100 collèges',
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

      <section id="corporate">
        <div>
          <h2 id="simple">Simple</h2>
          <p>Comme tous les outils Open Académie, Bourse vise à simplifier concrètement vos opérations d’intendance dans les établissements scolaires. L’intégralité de l’outil est pensée pour procurer à l’utilisateur la meilleure expérience possible</p>
        </div>

        <div>
          <h2 id="gratuit">Gratuit</h2>
          <p>Elaboré par des agents, pour des agents, Bourse est libre et gratuit. Cette liberté est matérialisée par une licence GPL, utilisée par la majorité des logiciels libres (Linux, Firefox, Libre Office...)</p>
        </div>

        <div>
          <h2 id="collaboratif">Collaboratif</h2>
          <p>Nos outils sont en amélioration continue. Leur développement se construit à partir de l’expérience des utilisateurs. Dites-nous ce que vous utilisez, signalez-nous un défaut ou suggérez une amélioration … Open Académie vous appartient !</p>
        </div>

        <style jsx>{`
          section {
            width: 100%;
            margin-top: 2em;
            display: inline-flex;
            flex-wrap: wrap;
            justify-content: center;
            background-color: #f5f5f9;
            padding: 2em 0;
          }

          h2 {
            font-weight: 200;
            font-size: 2em;
          }

          p {
            width: 250px;
            font-weight: 200;
            line-height: 1.4em;
          }

          #simple {
            color: #ff7b19;
          }

          #gratuit {
            color: #29adad;
          }

          #collaboratif {
            color: #fb2058;
          }

          div {
            width: 30%;
            min-width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
        `}</style>
      </section>
    </main>
  </Layout>
)

export default Bourse
