import React from 'react'
import './Bourse.css'

const Bourse = () => (
  <main>
    <div className="outil-title bourse">
      <img src="img/hat.png" alt="" />
      <h1>Bourse</h1>
      <p>Vos demandes de bourse gérées sans la moindre feuille de papier</p>
    </div>

    <div id="brief-timeline">
      <section id="brief">
        <p>Bourse est outil de demande en ligne de bourse de collège, pour le bonheur des parents comme des intendants.</p>
        <p>Les demandes se font directement sur <a href="bourse.beta.gouv.fr" className="bourse">bourse.beta.gouv.fr</a></p>
      </section>

      <section id="timeline">
        <h2>Brève de bourse</h2>
        <ul>
          <li>
            <strong>Automne 2015&nbsp;:</strong> la demi-douzaine de collèges qui testent le service de demande de bourse en ligne réussissent leur campagne annuelle dans des conditions d’efficacités inédites, réservant le temps gagné aux familles les plus en difficulté
          </li>
          <li>
            <strong>Automne 2016&nbsp;:</strong> Bourse est ouvert dans 100 collèges
          </li>
        </ul>
      </section>
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
    </section>
  </main>
)

export default Bourse
