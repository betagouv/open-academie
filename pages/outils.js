import React from 'react'
import Layout from '../components/layout'
import { Products } from '../components/constants'
import SectionTitle from '../components/section-title'
import HomeItem from '../components/home-item'

const Outils = () => (
  <Layout>
    <main>
      <section id="les-outils">
       <SectionTitle
         title="Les outils"
         subtitle="Les outils informatiques d’Open Académie pour simplifier la vie administrative des établissements scolaires" />
       <ul>
         {
           Products.map(product => <HomeItem key={ product.id } product={ product } />)
         }
       </ul>
       <style jsx>{`
         section {
           padding: 3em 0;
         }
         ul {
           display: flex;
           flex-wrap: wrap;
           justify-content: center;
           padding: 0;
           width: 60vw;
           margin: auto;
         }
         @media (max-width: 768px) {
           ul {
             width: 90vw;
           }
         }
       `}</style>
      </section>
    </main>
  </Layout>
)

export default Outils
