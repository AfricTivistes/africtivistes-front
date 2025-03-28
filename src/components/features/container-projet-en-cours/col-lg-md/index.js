import React from 'react'
import { injectIntl } from "gatsby-plugin-react-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ColLgMd = ({ project }) => {
  return (
    <div className="card rounded-0 h-100 blog-card- mx-2">
      <div>
        <a href={project.plateforme.url} target="_blank" rel="noopener noreferrer">
          <GatsbyImage 
            image={getImage(project.featuredImage.node.localFile)} 
            alt={project.featuredImage.node.altText}
            className="img-fluid"
          />
        </a>
      </div>
      <div className="card-body-plateforme">
        <a href={project.plateforme.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
          <h6 className="card-title-plateforme">{project.title}</h6>
        </a>
      </div>
    </div>
  )
}

export default injectIntl(ColLgMd)
