import * as React from "react"
import {injectIntl} from 'gatsby-plugin-react-intl'

import Social from '../social'
import Menu from "./menu"
import Newsletter from '../NewsletterFooter'
import Contact from "./contact"
import Copyright from './copyright'
import Equivalency from './equivalency'

const Footer = () => (
  <>
    <section id="footer-part" className="footer-part">
      <div className="container">
        {/* Première section : Informations principales */}
        <div className="row footer-main-section">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-50">
            <div className="footer-description">
              <div className="logo mb-30">
                <a href="/" className="footer-logo">
                  <img src="/images/logo-white.svg" alt="Africtivistes Logo"/>
                </a>
              </div>
              <div className="footer-social">
                <Social/>
              </div>
              <div className="footer-newsletter-section">
                <Newsletter/>
              </div>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 col-sm-6 mb-50">
            <div className="footer-menu">
              <h4 className="footer-section-title">Navigation</h4>
              <Menu/>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 col-sm-6 mb-50">
            <div className="footer-contact">
              <h4 className="footer-section-title">Contact</h4>
              <Contact/>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 col-sm-12 mb-50">
            <Equivalency/>
          </div>
        </div>
        
        {/* Séparateur décoratif */}
        <div className="footer-divider"></div>
      </div>
    </section>

    <Copyright/>

    <a href="#header-part" className="back-to-top">
      <i className="flaticon-chevron-up"></i>
    </a>
  </>
)

export default injectIntl(Footer)