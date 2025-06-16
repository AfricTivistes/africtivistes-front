import * as React from "react"
import {graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Slider from "../components/slider"
import Partner from '../components/partner'
import About from "../components/about"
import Projects from "../components/projects"
import LatestNews from '../components/latestNews'
import CallAction from '../components/callAction'
import Counter from '../components/counter'
import EnChiffres from '../components/chiffres'
import Features from '../components/features'
import ProjectsPage from '../components/projects/page'
import NosChampions from "../components/noschampions"
import{FormattedMessage} from 'react-intl'
import Testimonial2 from "../components/testimonial/testimonial2"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title={data.allWpPage.nodes.title} />

    <Slider posts={data.allStickyPosts.edges} contacts={data.contact.nodes}/>

    <div className="row justify-content-center pt-30">
      <div className="col-lg-12">
        <div className="section-title text-center pb-10">
          <h3><FormattedMessage id="plateforme"/></h3>
          <div className="underline">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>

    <Features projects={data.plateforme.nodes}/>

    <div className="row justify-content-center pt-30">
      <div className="col-lg-12">
        <div className="section-title text-center pb-15">
          <h3><FormattedMessage id="communiques"/></h3>
          <div className="underline">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <LatestNews posts={data.communiques.edges}/>
    <div className="row">
      <div className="col-lg-12">
        <div className="project-more text-center mt-50">
          {data.communiques && data.communiques.edges && data.communiques.edges.length > 0 ? (
            <a className="main-btn" href="/communiques">
              <FormattedMessage id="more" />
            </a>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </div>

    <div className="row justify-content-center pt-30">
      <div className="col-lg-12">
        <div className="section-title text-center pb-20">
          <h3><FormattedMessage id="latestnews"/> </h3>
          <div className="underline">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <LatestNews posts={data.allWpPost.edges}/>
    <div>
      <Projects posts={data.latestnews.edges} pages={data.allWpPage.nodes}/>
      <div className="row">
        <div className="col-lg-12">
          <div className="project-more text-center mt-50">
            <a className="main-btn" href="actualites"><FormattedMessage id="more"/></a>
          </div>
        </div>
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="section-title text-center pt-10 pb-10">
          <br/>
          <a href='#'><h2><FormattedMessage id="enchiffres"/></h2></a>
          <div className="underline">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <EnChiffres posts={data.sommet.nodes}/>

    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="section-title text-center pt-10 pb-10">
          <br/>
          <a href='/nos-publications/'><h2><FormattedMessage id="publication"/></h2></a>
          <div className="underline">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <NosChampions posts={data.rapports.edges} />
    <div className="row">
      <div className="col-lg-12">
        <div className="project-more text-center">
          <a className="main-btn" href="/nos-publications"><FormattedMessage id="more"/></a>
        </div>
      </div>
    </div>
    <br/>

    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="section-title text-center pt-10 pb-10">
          <br/>
          <a href='/nos-championnes'><h2><FormattedMessage id="champions"/></h2></a>
          <div className="underline">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>

    <NosChampions posts={data.champions.edges} />
    <div className="row">
      <div className="col-lg-12">
        <div className="project-more text-center">
          <a className="main-btn" href="/nos-championnes"><FormattedMessage id="more"/></a>
        </div>
      </div>
    </div>
    <br/>

    <ProjectsPage programmes={data.allWpProgrammeType.nodes} projects={data.allWpProgramme.nodes} />

    <About posts={data.abidjan.nodes} actu={data.latestnews.edges}/>
    <Counter posts={data.sommet.nodes}/>
    
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="section-title text-center pt-10 pb-10">
          <br/>
          <a href='/nos-championnes'><h2><FormattedMessage id="learn"/></h2></a>
          <div className="underline">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>

    <Testimonial2 posts={data.learn.edges}/>

    <Partner/>
    <CallAction contacts={data.contact.nodes}/>
  </Layout>
)

export const pageQuery = graphql`
  query {
    allWpPage(filter: {slug: {eq: "accueil"}, language: {slug: {eq: "FR"}}}) {
    nodes {
      title
      translations {
        link
      }
    }
  }
    allWpCategory(sort: {fields: count, order: DESC}, limit: 35
      filter: {language: {code: {eq: FR}}}) {
      edges {
        node {
          id
          name
          count
          slug
        }
      }
    }
    allWpProgrammeType(
      filter: {language: {code: {eq: FR}}}
    ) {
      nodes {
        id
        name
        slug
      }
    }
    allWpProgramme(
      filter: {language: {code: {eq: FR}}},
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
                  width: 300, 
                  height: 280, 
                  placeholder: DOMINANT_COLOR)
              }
            }
          }
        }
        slug
        content
      }
    }
  programmeencours: allWpProgramme(
    filter: {language: {code: {eq: FR}}}
    limit: 4
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
                width: 300, 
                height: 280,
                placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
      slug
      content
    }
  }
  programmeencoursExceptThree: allWpProgramme(
    filter: {language: {code: {eq: FR}}}
    limit: 4
    skip: 4
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
                width: 300, 
                height: 280,
                placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
      slug
      content
    }
  }

  communiques :  allWpPost(
  sort: {fields: [date], order: DESC},
  limit: 3
  filter: {language: {code: {eq: FR}}, categories: {nodes: {elemMatch: {slug: {eq: "communiques"}}}}}

  ) {
    edges {
      node {
        id
        title
        date(formatString: "DD MMMM, YYYY", locale: "fr")
        excerpt
        slug
        language {
          slug
        }
        link
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width:500,
                  height: 500,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
        categories {
          nodes {
            name
            count
          }
        }
      }
    }
nodes {

  slug
  language {
    slug
  }
}
}
  latestnews: allWpPost(
    limit: 3
    skip: 3
    sort: {fields: [date], order: DESC}
    filter: {language: {code: {eq: FR}}, categories: {nodes: {elemMatch: {slug: {eq: "actualites"}}}}}

    ) {
      edges {
        node {
          id
          title
          date(formatString: "DD MMMM, YYYY", locale: "fr")
          excerpt
          content
          slug
          language {
            slug
          }
          link
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 500,
                    height: 500,
                    placeholder: DOMINANT_COLOR
                  )
                }
              }
            }
          }
          categories {
            nodes {
              name
              count
            }
          }
        }
      }
  nodes {

    slug
    language {
      slug
    }
  }
 }
 allWpPost(
  sort: {fields: [date], order: DESC},
   limit: 3
   filter: {language: {code: {eq: FR}}, categories: {nodes: {elemMatch: {slug: {eq: "actualites"}}}}}

   ) {
    edges {
      node {
        id
        title
        date(formatString: "DD MMMM, YYYY", locale: "fr")
        excerpt
        slug
        language {
          slug
        }
        link
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 500,
                  height: 500,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
        categories {
          nodes {
            name
            count
          }
        }
      }
    }
nodes {

  slug
  language {
    slug
  }
}
}
allStickyPosts: allWpPost(
      sort: {fields: [date], order: DESC},
       limit: 3
       filter: {language: {code: {eq: FR}}, isSticky: { eq: true }}

       ) {
        edges {
          node {
            title
            date(formatString: "DD MMMM, YYYY", locale: "fr")
            excerpt
            slug
            language {
              slug
            }
            link
            featuredImage {
              node {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 500,
                      height: 400,
                      placeholder: DOMINANT_COLOR
                    )
                  }
                }
              }
            }
  
          }
        }
    nodes {

      slug
      language {
        slug
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
  actu: allWpPage(filter: {slug: {eq: "actualites"}, language: {code: {eq: FR}}}) {
    nodes {
      title
      translations {
        link
      }
      link
    }
  }
  abidjan: allWpPage(filter: {slug: {eq: "discours-de-cheikh-fall-abidjan2021"}, language: {code: {eq: FR}}}) {
    nodes {
      title
      translations {
        link
      }
      link
      content
    }
  }
  sommet: allWpPage(filter: {slug: {eq: "sommet-africtivistes"}, language: {code: {eq: FR}}}) {
    nodes {
      title
      content
      link
      translations {
        link
      }
    }
  }

  rapports: allWpPost(
    sort: {fields: date, order: DESC},
    limit: 4
    filter: {language: {code: {eq: FR}}, categories: {nodes: {elemMatch: {slug: {eq: "nos-publications"}}}}}
  ) {
    edges {
      node {
        id
        title
        date(formatString: "DD MMMM, YYYY", locale: "fr")
        excerpt
        link
        featuredImage {
          node {
            altText
            big: localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 400,
                  height: 350,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
            small: localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 70,
                  height: 68,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
        categories {
          nodes {
            name
            count
          }
        }
      }
    }
  }

  champions:  allWpPost(
    sort: {fields: date, order: DESC}
    filter: {language: {code: {eq: FR}}, categories: {nodes: {elemMatch: {slug: {eq: "nos-championnes"}}}}}
  ) {
    edges {
      node {
        id
        title
        date(formatString: "DD MMMM, YYYY", locale: "fr")
        excerpt
        link
        featuredImage {
          node {
            altText
            big: localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 400,
                  height: 350,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
            small: localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 70,
                  height: 68,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
        categories {
          nodes {
            name
            count
          }
        }
      }
    }
  }

  learn: allWpPost(
    sort: {fields: date, order: DESC}
    filter: {language: {code: {eq: FR}}, categories: {nodes: {elemMatch: {slug: {eq: "learn-with-africtivistes"}}}}}
  ) {
    edges {
      node {
        id
        title
        date(formatString: "DD MMMM, YYYY", locale: "fr")
        excerpt
        link
        featuredImage {
          node {
            altText
            big: localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 89,
                  height: 89,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
            small: localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 70,
                  height: 68,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
        categories {
          nodes {
            name
            count
          }
        }
      }
    }
  }
   latestNewsExceptThree: allWpPost(
    limit: 3
    skip: 6
    sort: {fields: [date], order: DESC}
    filter: {language: {code: {eq: FR}}, categories: {nodes: {elemMatch: {slug: {eq: "actualites"}}}}}

    ) {
      edges {
        node {
          id
          title
          date(formatString: "DD MMMM, YYYY", locale: "fr")
          excerpt
          content
          slug
          language {
            slug
          }
          link
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 500,
                    height: 500,
                    placeholder: DOMINANT_COLOR
                  )
                }
              }
            }
          }
          categories {
            nodes {
              name
              count
            }
          }
        }
      }
  nodes {

    slug
    language {
      slug
    }
  }
 }
  plateforme: allWpPlateforme {
    nodes {
      id
      title
      slug
      uri
      plateforme {
        url
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 300, height: 300, placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
    }
  }
}
`
export default IndexPage
