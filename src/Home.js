import React from 'react'
import './Home.css'
import HomeItem from './HomeItem'
import { Products } from './constants'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Home = () => (
  <main>
    <div className="title">
      <img src="img/logo-sgmap-hires.jpg" alt="Logo du SGMAP" />

      <h1>Open Académie</h1>

      <div className="title-description">
        <p>
          Des <strong>outils numériques d’administration scolaire</strong> créés par des agents, pour des agents
        </p>
        <ul>
          <li>
            <Link className="btn" to="/">Télécharger</Link>
          </li>
          <li>
            <HashLink className="btn" to="/#les-outils">En savoir plus</HashLink>
          </li>
        </ul>
      </div>
    </div>

    <section id="qui-sommes-nous">
      <h2>Qui sommes-nous ?</h2>

      <p>Usagers ou professionels des services de l’éducation nationale, parents d’élèves ou ...</p>

      <p>Alors, envie de vous simplifier la vie ? <br/> Testez nos outils ! </p>

      <svg id="arrow-down" xmlns="http://www.w3.org/2000/svg" version="1.1"
        viewBox="0 0 512 512" width="512px" height="512px">
        <path fill="white" d="M383.6,322.7L278.6,423c-5.8,6-13.7,9-22.4,9c-8.7,0-16.5-3-22.4-9L128.4,322.7c-12.5-11.9-12.5-31.3,0-43.2  c12.5-11.9,32.7-11.9,45.2,0l50.4,48.2v-217c0-16.9,14.3-30.6,32-30.6c17.7,0,32,13.7,32,30.6v217l50.4-48.2  c12.5-11.9,32.7-11.9,45.2,0C396.1,291.4,396.1,310.7,383.6,322.7z"/>
       </svg>
    </section>

    <section id="les-outils">
      <h2>Les outils</h2>

      <p className="subtitle">Les outils informatiques d’Open Académie pour simplifier la vie administrative des établissements scolaires</p>

      <ul className="outils">
        {
          Products.map(product => <HomeItem key={ product.id } product={ product } />)
        }
      </ul>
    </section>
  </main>
)

export default Home
