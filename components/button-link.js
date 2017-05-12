import React from 'react'
import { Colors } from '../components/constants'

const ButtonLink = ({ href, text, className }) => (
  <div>
    <a href={ href } className={className}>{ text }</a>

    <style jsx>{`
      a {
        font-family: 'Marvel', sans-serif;
        margin: 10px 20px;
        color: #fff;
        font-size: 1.4em;
        text-decoration: none;
        font-weight: bold;
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

      .primary {
        background-color: ${Colors.primary};
      }

      .muted {
        color: #000;
        background-color: #fff;
      }

      .votre-projet {

      }
    `}</style>
  </div>
)

export default ButtonLink
