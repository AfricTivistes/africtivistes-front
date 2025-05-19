import React from 'react'
import {FormattedMessage, IntlContextConsumer } from "gatsby-plugin-react-intl"
import {useContactPageEN} from "../../hooks/query/contactPage/EN"
import {useContactPageFR} from "../../hooks/query/contactPage/FR"

const getPublicLink = (link) => link.replace(/^https?:\/\/update\.africtivistes\.org/, '/fr');

const Action = ({page}) => 
(<section id="call-to-action" className="pt-30 pb-30 gray-bg">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-xl-10 col-lg-6 col-md-12 col-sm-12">
          <div className="call-action-cont pt-30 text-center">
            <h2><FormattedMessage id ="callAction"/></h2>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
          <div className="call-action-btn pt-30 text-center">
          <a  className="main-btn" data-animation="fadeInUp" data-delay="2s" key={page.id} data-filter={`.${page.slug}`} href={getPublicLink(page.link)}><FormattedMessage id ="contactUs"/></a>
        </div>
        </div>
      </div>
    </div>
  </section>
)


const CallAction = () => {
  
  const pageEN = useContactPageEN()
  const pageFR = useContactPageFR()

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === 'fr' ? <Action page={pageFR} /> : <Action page={pageEN} />}
    </IntlContextConsumer>
  )
}

export default CallAction