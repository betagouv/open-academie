import { Colors } from '../components/constants'

const HowToSteps = () => (
  <div>
    <h2>Comment ça marche ?</h2>

    <ul>
      <li className="inverted">Télécharger</li>
      <li>Importer la base</li>
      <li>Saisir les constantes de l'établissement</li>
      <li>Saisir les données du voyage</li>
    </ul>

    <style jsx>{`
      h2 {
        text-align: center;
        margin: 3em 0;
        font-size: 2em;
        font-weight: 500;
        font-family: 'Quicksand', sans-serif;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        list-style: none;
        background-color: #eee;
        padding: 2em;
      }

      li {
        border-radius: 50%;
        width: 200px;
        height: 200px;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        background-color: ${Colors.primary};
        color: white;
        line-height: 1.4em;
        font-size: 1.2em;
        font-family: 'Open Sans', sans-serif;
      }

      li.inverted {
        background-color: #fff;
        color: ${Colors.primary};
      }
    `}</style>
  </div>
)

export default HowToSteps
