import React from 'react'
import Layout from '../components/layout'

const Projet = () => (
  <Layout>
    <main>
      <div className="title">
        <h1>Le projet</h1>

        <style jsx>{`
          .title {
            background-image: url('../static/Leprojet.jpg');
            background-attachment: fixed;
            background-position: center -125px;
            background-size: cover;
            background-repeat: no-repeat;
            min-height: 25em;
            display: flex;
            align-items: center;
            padding: 4em 0 2em;
            justify-content: center;
            flex-direction: column;
          }

          h1 {
            font-size: 8em;
            font-weight: 600;
            text-align: center;
            margin: 0;
          }
        `}</style>
      </div>

      <div className="why">
        <div className="wrapper">
          <p>
            « Nous créons des outils pour la modernisation de l’action publique dans l’Éducation nationale »
          </p>
        </div>

        <style jsx>{`
          .why {
            background-image: url('../static/Leprojet.jpg');
            background-attachment: fixed;
            background-position: center -125px;
            background-size: cover;
            background-repeat: no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            color: white;
          }

          .wrapper {
            width: 100%;
            height: 100%;
            background-color: rgba(19, 11, 11, 0.42);
          }

          .wrapper p {
            max-width: 470px;
            margin: 38px auto;
            line-height: 1.5em;
            font-size: 1.8em;
            font-family: "Open Sans", sans-serif;
          }
        `}</style>
      </div>

      <div>
        <p>
          Open Académie est un collectif d’agents d'établissements scolaires qui produit des services numériques&nbsp;
          <strong>gratuits</strong> pour en <strong>simplifier</strong> l’administration.

          <br />
          <br />
          
          Notre préoccupation : <strong>améliorer</strong> notre <strong>service public</strong> afin de mieux répondre aux besoins des agents comme des familles.
  
          <br />
          <br /> 
  
          Open Académie est une Startup d’État développée avec le Secrétariat Général à la Modernisation de l’Action Publique (SGMAP).
        </p>
        <style jsx>{`
          p {
            max-width: 565px;
            line-height: 1.6em;
            font-size: 1.5em;
            margin: 3em auto;
          }
        `}</style>
      </div>

      <div>
        <h2>Concrètement, comment-ça marche ?</h2>

        <ul>
          <li>
            <span className="one">1</span>
            <h3>Vous êtes irrité</h3>
            <p>
              Nous partons d’une irritation, d’un <strong>dysfonctionnement</strong>&nbsp;
              au sein d’un établissement scolaire. L’impulsion est  donnée par un observateur
              de terrain, le plus apte à mesurer le problème : <strong>l’agent public lui-même</strong>,
              intendant, gestionnaire, professeur ou autre membre du personnel scolaire.


              PS : la plupart des gens en restent à cette étape. Faites la différence !
            </p>
          </li>
          <li>
            <span className="two">2</span>
            <h3>Vous devenez intrapreneur</h3>
            <p>
              L’agent observateur du problème se sent prêt à porter
              une solution au support numérique. Il la développe avec l’aide de la communauté sur une échelle de temps
              relativement courte. Il <strong>devient intrapreneur</strong> public.
            </p>
          </li>
          <li>
            <span className="three">3</span>
            <h3>Vous faites partie des open-académiciens</h3>
            <p>
              Le produit abouti est proposé aux établissements scolaires.
              L’agent public en assure la promotion et le support avec le soutien de tous. Il a <strong>rejoint une
              communauté</strong> qui oeuvre pour l’amélioration et la modernisation de leur métier.
            </p>
          </li>
        </ul>

        <style jsx>{`
          h2 {
            text-align: center;
            font-size: 2em;
          }

          h3 {
            border-top: 1px solid black;
            padding-top: 2em;
            font-family: 'Quicksand', sans-serif;
            letter-spacing: 2px;
          }

          ul {
            display: flex;
            justify-content: space-around;
            margin: 4em 0
          }

          li {
            width: 20%;
            list-style: none;
          }

          span {
            margin-left: 15px;
            font-size: 5em;
            font-weight: bold;
          }

          .one {
            color: #ffd966;
          }

          .two {
            color: #29adad;
          }

          .three {
            color: #fb2058;
          }

          p {
            font-family: "Open Sans", sans-serif;
            line-height: 1.7em;
          }
        `}</style>
      </div>
    </main>
  </Layout>
)

export default Projet
