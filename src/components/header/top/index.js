import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Social from '../../social'
import Switchlanguage from '../switchlanguage'
import {FormattedMessage, useIntl} from "gatsby-plugin-react-intl"

const Top = ({translation}) => {
  const intl = useIntl()
  const currentLocale = intl && intl.locale ? intl.locale : 'fr'
  const contactHref = currentLocale === 'fr' ? '/nous-contacter/' : '/en/contact-us/'
  const joinHref = currentLocale === 'fr' ? '/africtivistes/adherer/' : '/africtivistes-en/join/'
  const data = useStaticQuery(graphql`query {
  site{
      siteMetadata {
        email
        tels
      }
    }
  }`)
  const { email, tels } = data.site.siteMetadata
  return (
    <div className="header-top header-top--modern">
      <div className="container">
        <div className="header-top__inner">
          <div className="header-top__contact">
            <a href={`mailto:${email[0]}`} className="header-top__link" aria-label="Email">
              <i className="fa fa-envelope" aria-hidden="true" />
              <span>{email[0]}</span>
            </a>
            <span className="header-top__divider" aria-hidden="true" />
            <a href={`tel:${tels && tels[0] ? tels[0].replace(/\s/g, '') : ''}`} className="header-top__link" aria-label="Téléphone">
              <i className="fa fa-phone" aria-hidden="true" />
              <span>{tels[0]}</span>
            </a>
          </div>
          <div className="header-top__actions">
            <a href="/newsletter" className="header-top__btn header-top__btn--outline">
              <FormattedMessage id="bouton_newsletter" />
            </a>
            <a href={joinHref} className="header-top__btn header-top__btn--primary">
              <FormattedMessage id="devenir_africtivistes" />
            </a>
            <a href={contactHref} className="header-top__btn header-top__btn--outline">
              <FormattedMessage id="contactUs" />
            </a>
          </div>
          <div className="header-top__right">
            <div className="header-top__lang">
              <Switchlanguage translation={translation} />
            </div>
            <span className="header-top__divider header-top__divider--vertical" aria-hidden="true" />
            <div className="header-top__social">
              <Social />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top