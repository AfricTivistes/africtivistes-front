import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FormattedMessage } from 'gatsby-plugin-react-intl'

const Contact = () => {

  const data = useStaticQuery(graphql`query {
  site{
      siteMetadata {
        email
        tels
        adresse
      }
    }
  }`)
  const { email, tels, adresse } = data.site.siteMetadata
  
  return (<div className="footer-contact">
    <ul>
      <li>
        {tels.map(tel=><p key={tel}>{tel}</p>)}
      </li>
      <li>
        <p>{email}</p>
      </li>
      <li>
        <p>{adresse}</p>
      </li>
    </ul>
  </div>)
  }

export default Contact