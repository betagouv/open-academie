import React from 'react'
import Layout from '../components/layout'
import Brief from '../components/brief'
import ProductHead from '../components/product-head'
import Download from '../components/download'
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

        <div className="sales-point">
          <ul>
            <li>
              <img src="static/check.png" />
              <p>Inscription des élèves aux voyages et édition des lettres d'engagement des familles</p>
            </li>
            <li>
              <img src="static/check.png" />
              <p>Edition des budgets, bilan financier, justificatif des ordres de recettes et documents en tout genre</p>
            </li>
            <li>
              <img src="static/check.png" />
              <p>Suivi des encaissements sur un document unique</p>
            </li>
            <li>
              <img src="static/check.png" />
              <p className="free">Libre et gratuit</p>
            </li>
          </ul>
        </div>

        <style jsx>{`
          .wrapper {
            display: flex;
            flex-wrap: wrap;
          }

          .sales-point {
            background-color: #eee;
            width: 50%;
            min-width: 400px;
          }

          ul {
            height: 100%;
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            list-style-type: none;
          }

          li {
            margin: 2em 0;
            font-size: 1.1em;
            max-width: 400px;
            display: inline-block;
            position: relative;
            padding-left: 23px;
          }

          li img {
            height: 50px;
            width: auto;
            position: absolute;
            left: -50px;
          }

          li.free {
            color: Colors.primary;
          }

          li p {
            margin: 0;
            min-height: 50px;
            display: flex;
            align-items: center;
          }
        `}</style>
      </div>
    </main>
  </Layout>
)

export default Mobilisco
