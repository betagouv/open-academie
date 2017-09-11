import React from 'react'

const ExternalLinks = ({constant, title, customStyle}) => {
  const colorStyle = {borderColor: constant.color};
  return (
    <div className="links" style={customStyle}>
      <h2>{title ? title : "Pour + d'infos"}</h2>

      <div className="wrapper">
        {
          constant.externalLinks.map((link, idx) => (
            <a style={colorStyle} key={idx} href={link.href} target="_blank">
              <img src={link.icon} alt="" />
              {link.label}
            </a>
          ))
        }
      </div>

      <style jsx>{`
        .links {
          padding: 4em 0;
        }

        h2 {
          text-align: center;
          margin-top: 0;
          margin-bottom: 2em;
          font-size: 2em;
          font-weight: 500;
          font-family: 'Quicksand', sans-serif;
        }

        .wrapper {
          display: flex;
          flex-wrap: wrap;
          max-width: 600px;
          margin: auto;
          justify-content: center;
        }

        img {
          max-height: 20px;
          margin-right: 20px;
        }

        .wrapper a {
          width: calc(49% - 3px);
          border: 1px solid white;
          text-align: center;
          padding: 1em 0;
          text-decoration: none;
          font-family: 'Marvel', sans-serif;
          text-transform: uppercase;
          color: #333;
          font-size: 1.4em;
        }

        .wrapper a.right {
          border-left: none;
        }
      `}</style>
    </div>
  )
}

export default ExternalLinks
