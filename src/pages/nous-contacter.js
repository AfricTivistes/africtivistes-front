import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Contact from '../components/contact'
import { FormattedMessage } from 'gatsby-plugin-react-intl'

const ContactPage = ({data}) => {
  const { title, translations} = data.allWpPage.nodes[0]
  const link = translations ? translations[0].link : ''
  return (<Layout translation={link}>
      <Seo title={data.allWpPage.nodes.title} />
      {/* <PageBanner title={title} /> */}
      <section id="page-banner" className="bg_cover pt-200 pb-200" style={{ backgroundImage: `url(/images/localisation.png`}} data-overlay="6">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-banner-content text-center">
                        <h2>{title}</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><a href="/" aria-label="button"><FormattedMessage id="home" /></a></li>
                                <li className="breadcrumb-item active" aria-current="page">{title}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <Contact />
      <div className="container mb-50">
      <div className="row align-items-center justify-content-center">
        <div className="col-xl-10 col-lg-6 col-md-12 col-sm-12">
          <div className="call-action-cont pt-30 text-center">
            <h2><FormattedMessage id ="callAction"/></h2>
          </div>
        </div>
      </div>
    </div>    
    </Layout>)
}
export default ContactPage

export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "nous-contacter"}}) {
    nodes {
      title
      content
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 555,
                placeholder: DOMINANT_COLOR
              )
            }
          }
        }
      }
      translations {
        link
      }
    }
  }
}
`