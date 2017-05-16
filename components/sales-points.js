import { Colors } from '../components/constants'

const SalesPoints = ({ points }) => (
  <div>
    <ul>
      {
        points.map(point => (
          <li>
            <img src="static/check.png" />
            <p>{ point }</p>
          </li>
        ))
      }
      <li>
        <img src="static/check.png" />
        <p className="free">Libre et gratuit</p>
      </li>
    </ul>

    <style jsx>{`
      div {
        background-color: #eee;
        width: 50%;
        min-width: 400px;
      }

      ul {
        height: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        list-style-type: none;
      }

      li {
        margin: 1em 0;
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
        color: ${Colors.primary};
      }

      li p {
        margin: 0;
        min-height: 50px;
        display: flex;
        align-items: center;
        font-family: 'Open Sans', sans-serif;
        line-height: 26px
      }
    `}</style>
  </div>
)

export default SalesPoints
