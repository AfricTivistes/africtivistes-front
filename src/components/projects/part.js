import React from 'react'
import { FormattedMessage } from "gatsby-plugin-react-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useImportScript } from '../../services'
import { Link } from "gatsby"

const ProjectPart = ({projects}) => {
  // Utilisez le hook personnalisé pour importer le script
  useImportScript("/js/load/project3.js");

  return (
    <section id="project-part" className="gray-bg pt-50 pb-50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center pb-50">
              <h3><FormattedMessage id="planStrategique"/></h3>
              <div className="underline">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="row project-active">
          {projects.map(project => (
            <div 
              key={project.id} 
              className={`col-lg-4 col-md-6 ${project.programmeTypes.nodes.map(type => type.slug).join(' ')}`}
            >
              <div className="single-testimonial mt-30">
                <div className="project-image">
                  <GatsbyImage 
                    image={project.featuredImage && getImage(project.featuredImage.node.localFile)} 
                    alt={project.title} 
                  />
                </div>
                <div className="testimonial-author">
                  <div className="author-name">
                    <span>
                      <Link to={project.link}><h6>{project.title}</h6></Link><br/>{project.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectPart