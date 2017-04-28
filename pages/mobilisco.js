import React from 'react'
import Layout from '../components/layout'
import Brief from '../components/brief'
import ProductHead from '../components/product-head'
import Download from '../components/download'
import SalesPoints from '../components/sales-points'
import { Products } from '../components/constants'
import { Colors } from '../components/constants'

const constant = Products.find(product => product.id === 'mobilisco')

const Mobilisco = () => (
  <Layout>
    <main>
      <ProductHead constant={constant} />

      <div className="wrapper">
        <Brief
          description={constant.description}
          downloadComponent={<Download />} />

        <SalesPoints />

        <style jsx>{`
          .wrapper {
            display: flex;
            flex-wrap: wrap;
          }
        `}</style>
      </div>
    </main>
  </Layout>
)

export default Mobilisco
