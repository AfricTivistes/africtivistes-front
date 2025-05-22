import * as React from "react"
import { graphql } from "gatsby"
import { FormattedMessage } from 'gatsby-plugin-react-intl'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import About3 from "../../components/about/about3"
import Intervention from '../../components/intervention'
import Team from '../../components/team'
import CallAction from "../../components/callAction"

const AfrictivistesPage = ({data}) => {
  const { title, content, translations, featuredImage} = data.allWpPage.nodes[0]
  const link = translations ? translations[0].link : ''
  return (<Layout translation={link}>
      <Seo title={title}/>
      {/* <PageBanner title={title} /> */}
      <section id="page-banner" className="bg_cover pt-200 pb-200" style={{ backgroundImage: `url(/images/logo_africtivistes.png`}} data-overlay="6">
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
    <About3 content={content} valeurs={data.valeurs.nodes} histoire={data.histoire.nodes} picture={featuredImage.node.localFile}/>
      <Intervention/>
      <Team teams={data.allWpTeam.nodes}/>
      <CallAction contacts={data.contact.nodes}/>
      {/* <Counter2/> */}
      {/* <Testimonial2/> */}
      {/* <CallAction2/> */}
    </Layout>)
}
export default AfrictivistesPage

export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "africtivistes"}}) {
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
  allWpTeam {
    nodes {
      title
      excerpt
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 89,
                placeholder: DOMINANT_COLOR
              )
            }
          }
        }
      }
      social {
        facebook
        instagram
        linkedin
        twitter
      }
    }
  }
  contact: allWpPage(filter: {slug: {eq: "nous-contacter"}}) {
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
  valeurs: allWpPage(filter: {slug: {eq: "valeurs"}}) {
    nodes {
      link
    }
  }
  histoire: allWpPage(filter: {slug: {eq: "histoire"}}) {
    nodes {
      link
    }
  }
}
`