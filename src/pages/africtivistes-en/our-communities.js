import * as React from "react"
import { graphql } from "gatsby"
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { FormattedMessage } from 'gatsby-plugin-react-intl'
import PageCommunaute from "../../components/projects/pagecommunaute"

const Communities = ({ data }) => {
  const { title, translations } = data.allWpPage.nodes[0]
  const link = translations ? translations[0].link : ''
  return (
    <IntlContextConsumer>
    {({ language: currentLocale }) =>
      currentLocale === 'en' && <Layout translation={link}>
      <Seo title={title} />
      <section id="page-banner" className="bg_cover pt-200 pb-200" style={{ backgroundImage: `url(/images/communautess.jpeg`}} data-overlay="6">
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
      <PageCommunaute programmes={data.allWpCommunauteType.nodes} projects={data.allWpCommunaute.nodes} />
    </Layout>
    }
    </IntlContextConsumer>
  )}
export default Communities
export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "our-communities"}}) {
    nodes {
      title
      translations {
        link
      }
    }
  }
  allWpCommunauteType(
    filter: {language: {code: {eq: FR}}}

  ) {
    nodes {
      id
      name
      slug
    }
  }
  allWpCommunaute(filter: {language: {code: {eq: FR}}}) {
    nodes {
      id
      title
      content
      link
      communauteTypes {
        nodes {
          slug
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 89,
                height: 89, 
              placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
      communaute {
        facebook
        instagram
        linkedin
        twitter
      }
      
    }
  }
  contact: allWpPage(filter: {slug: {eq: "contact-us"}}) {
    nodes {
      title
      content
      slug
      link
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