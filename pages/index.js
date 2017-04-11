import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import HomeItem from '../components/home-item'
import { Products } from '../components/constants'

export default () => (
  <Layout>
    <main>
      <div className="title">
        <img src="static/logo-sgmap-hires.jpg" alt="Logo du SGMAP" />

        <h1>Open Académie</h1>

        <div className="title-description">
          <p>
            Des <strong>outils numériques d’administration scolaire</strong> créés par des agents, pour des agents
          </p>
          <ul>
            <li>
              <Link href="/"><a className="btn">Télécharger</a></Link>
            </li>
            <li>
              <Link href="/#les-outils"><a className="btn">En savoir plus</a></Link>
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

    <style jsx>{`
      .title {
        background-image: url('../static/homepage.jpg');
        background-attachment: fixed;
        background-position: top center;
        background-size: cover;
        background-repeat: no-repeat;
        min-height: 25em;
        height: 75vh;
        padding: 4em 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
      }

      .title img {
        position: absolute;
        right: 20px;
        height: 110px;
      }

      @media (max-width: 768px) {
        .title img {
          display: none;
        }
      }

      .title-description {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .title h1 {
        font-size: 4em;
        color: #26a69a;
        font-weight: 600;
        text-align: center;
      }

      @media (min-width: 768px) {
        .title h1 {
          font-size: 6em;
          margin-top: 1.3em;
        }
      }

      .title p {
        font-size: 1.4em;
        max-width: 900px;
        text-align: center;
        color: white;
      }

      .title ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: center;
      }

      .title .btn {
        margin: 10px 20px;
        color: #fff;
        background-color: #26a69a;
        text-decoration: none;
        text-align: center;
        letter-spacing: .5px;
        transition: .2s ease-out;
        cursor: pointer;
        outline: 0;
        border: none;
        border-radius: 2px;
        display: inline-block;
        min-height: 45px;
        line-height: 45px;
        padding: 0 2rem;
        text-transform: uppercase;
        vertical-align: middle;
        -webkit-tap-highlight-color: transparent;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
      }

      section {
        padding: 3em 0;
      }

      section h2 {
        font-size: 4em;
        font-weight: 400;
        text-align: center;
      }

      section p.subtitle {
        font-size: 2em;
        font-weight: 200;
        color: #999999;
        width: 70vw;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2em;
        text-align: center;
      }

      section#qui-sommes-nous {
        background-color: dimgrey;
        text-align: center;
      }

      section#qui-sommes-nous h2 {
        color: orange;
        font-weight: 300;
        letter-spacing: 3px;
      }

      section#qui-sommes-nous p {
        color: white;
        letter-spacing: 2px;
      }

      #arrow-down {
        width: 100px;
        height: 100px;
      }

      .outils {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0;
        width: 60vw;
        margin: auto;
      }

      @media (max-width: 768px) {
        .outils {
          width: 90vw;
        }
      }
    `}</style>
  </Layout>
)
