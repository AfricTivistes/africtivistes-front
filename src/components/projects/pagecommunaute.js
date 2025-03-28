import React from 'react'
import { FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { useImportScript } from '../../services'

const PageCommunaute = ({programmes, projects}) => {

  //ImportScript("/js/load/project2.js");
  useImportScript("/js/load/project3.js");


  return (
  <section id="project-page" className="pt-30 pb-30">
    <div className="container">

      <div className="row">
        <div className="col-lg-12">
          <div className="project-2-menu text-center mt-20">
            <ul>
              <li data-filter="*" className="active"><FormattedMessage id="all"/></li>
                {programmes.map(programme=>(
                  <li key={programme.id} data-filter={`.${programme.slug}`} >{programme.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="row grid">
    {projects.map(project => {
          const { facebook, twitter, linkedin, instagram} = project.communaute
          const image = getImage(project.featuredImage.node.localFile)
        return (
        // <div className="col-lg-3 col-md-6 col-sm-8">
          <div key={project.id} className={`col-lg-3 col-md-6 col-sm-8 ${project.communauteTypes.nodes.map(type => type.slug).join(' ')}`}>

          <div className="single-team text-center mt-80">
            <div className="author-thumb pb-25">
              {/* <img src="/images/team/t-1.jpg" alt="Author" /> */}
              <GatsbyImage image={image} alt={project.title} />
            </div>
            <div className="author-content">
              <a><h6>{project.title}</h6></a>
              <span dangerouslySetInnerHTML={{ __html: project.content }}/>
              {/* <p className="mt-20">Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum.</p> */}
              <ul className="mt-15">
                {facebook && <li><a href={facebook} aria-label="button"><i className="flaticon-facebook"></i></a></li>}
                {twitter && <li><a href={twitter} aria-label="button"><i className="flaticon-twitter-logo-silhouette"></i></a></li>}
                {linkedin && <li><a href={linkedin} aria-label="button"><i className="flaticon-linkedin-logo"></i></a></li>}
                {instagram && <li><a href={instagram} aria-label="button"><i className="flaticon-instagram-social-network-logo-of-photo-camera"></i></a></li>}
              </ul>
            </div>
          </div>
        </div>)})}
      </div>
      
    </div>
    
  </section>
)}

export default injectIntl(PageCommunaute)