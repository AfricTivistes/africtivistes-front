import * as React from "react"
import {FormattedMessage, injectIntl} from 'gatsby-plugin-react-intl'

const Equivalency = () => (
  <div className="footer-equivalency">
    <h4 className="equivalency-title">
      <FormattedMessage id="equivalencyDetermination" />
    </h4>
    <div className="equivalency-badge-wrapper">
      <a 
        href="https://ngosource.org" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="equivalency-link"
        aria-label="Visiter NGOsource pour l'équivalence des organisations"
      >
        <div className="equivalency-badge">
          <img 
            src="/images/NGOsource-ED.png" 
            alt="NGOsource Equivalency Determination"
            className="equivalency-image"
          />
        </div>
      </a>
    </div>
  </div>
)

export default injectIntl(Equivalency)

