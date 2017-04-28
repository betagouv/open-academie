import { Colors } from '../components/constants'

const Corporate = ({ simple, gratuit, collaboratif }) => (
  <section>
    <div>
      <h2 id="simple">Simple</h2>
      <p>{ simple }</p>
    </div>

    <div>
      <h2 id="gratuit">Gratuit</h2>
      <p>{ gratuit }</p>
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
)

export default Corporate
