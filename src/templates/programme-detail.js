import React from "react"
import { graphql } from "gatsby"
import { IntlContextConsumer, injectIntl } from "gatsby-plugin-react-intl"
import { FormattedMessage } from 'gatsby-plugin-react-intl'
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectDetail from '../components/projects/details'
import ProjectPart from '../components/projects/part'
import CallAction from "../components/callAction"
import ListePosts from "../components/ListePost/ListePost"

const ProgrammeDetail = ({ data, pageContext, intl }) =>{
    const programme = data.allWpProgramme.nodes[0];
    const translation = programme.translations.length && programme.translations[0].link;
    const image = programme.featuredImage && programme.featuredImage.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src;
    return (
      <IntlContextConsumer>
        {({ language: currentLocale }) =>
          currentLocale === pageContext.lang && <Layout translation={translation}>
            <Seo lang={intl.locale} title={programme.title} />
            {/* <PageBanner title={'Recent Projects'} /> */}
            <section id="page-banner" className="bg_cover pt-150 pb-150" style={{ backgroundImage: `url(${image})`}} data-overlay="6">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-banner-content text-center">
                        <h2>{programme.title}</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><a href="/" aria-label="button"><FormattedMessage id="home" /></a></li>
                                <li className="breadcrumb-item active" aria-current="page">{programme.title}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
            <ProjectDetail project={data.allWpProgramme.nodes[0]} />
            <ListePosts posts={data.related.edges} isBlogPostPage={true}/>
            <ProjectPart projects={data.prog.nodes} />
            <CallAction/>
        </Layout>
        }
      </IntlContextConsumer>
    )
}

export default injectIntl(ProgrammeDetail)

export const query = graphql`
  query($slug: String!, $tags: String!) {
    allWpProgramme(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        terms: programme{
            etiquette
          }
        featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                height: 280
                width: 300
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
    related:  allWpPost(
      sort: {fields: date, order: DESC}
      filter: {
      terms: { nodes: { elemMatch: { name: { eq: $tags } } } }
    }
      limit: 4
        ) {
        edges {
          node {
            id
            title
            terms {
          nodes {
            name
          }
        }
            date(formatString: "DD MMMM, YYYY", locale: "fr")
            excerpt
            link
            featuredImage {
              node {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1000, height: 800, placeholder: DOMINANT_COLOR)
                  }
                }
                small: localFile {
                  childImageSharp {
                    gatsbyImageData(width: 70, height: 68, placeholder: DOMINANT_COLOR)
                  }
                }
              }
            }
          }
        }
      }
    prog: allWpProgramme(
      sort: {fields: date, order: DESC}
      ) {
      nodes {
        id
        title
        link
        date(formatString: "DD MMMM, YYYY", locale: "fr")
        programmeTypes {
          nodes {
            slug
            name
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 360, 
                  height: 250, 
                  placeholder: DOMINANT_COLOR)
              }
            }
          }
        }
        slug
        content
      }
    }
  }
`
