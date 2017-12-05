import React from 'react'
import Link from 'next/link'
import { Colors } from '../components/constants'

const ButtonLink = ({ href, text, className }) => (
  <div>
    <Link href={ href } >
      <a className={className}>{ text }</a>
    </Link>

    <style jsx>{`
      a {
        font-family: 'Marvel', sans-serif;
        text-transform: uppercase;
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
    `}</style>
  </div>
)

export default ButtonLink
