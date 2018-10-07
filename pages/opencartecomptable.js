import React from 'react'
import Layout from '../components/layout'
import Brief from '../components/brief'
import ProductHead from '../components/product-head'
import SalesPoints from '../components/sales-points'
import ButtonLink from '../components/button-link'
import { Products } from '../components/constants'
import { Colors } from '../components/constants'

const constant = Products.find(product => product.id === 'opencartecomptable')

const OpenCarteComptable = () => (
  <Layout title={constant.title}>
    <main>
      <ProductHead constant={constant} />

      <div className="wrapper">


        <Brief
          description={constant.description}
          downloadComponent={<ButtonLink href="http://www.opencartecomptable.fr" text="Open Carte Comptable" className="primary" />} />

        <SalesPoints points={constant.salesPoints} />


        <style jsx>{`
          .wrapper {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 4em;
          }
        `}</style>
      </div>
    </main>
  </Layout>
)

export default OpenCarteComptable
