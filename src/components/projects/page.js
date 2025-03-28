import React from 'react'
import { Link } from "gatsby"
import { FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { useImportScript } from '../../services'

const ProjectsPage = ({programmes, projects}) => {

  useImportScript("/js/load/project2.js");

  return (
  <section id="project-page" className="pt-30 pb-30">
    <div className="container" style={{ maxWidth: '1300px' }}>
    <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="section-title text-center pb-15">
                        <h3><FormattedMessage id="planStrategique"/></h3>
                        <div className="underline">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
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
        {projects.map(project=>(
 <div key={project.id} className={`col-lg-3 col-md-6 ${project.programmeTypes.nodes.map(type => type.slug).join(' ')}`}>
 <div className="card rounded-0 h-100 blog-card mt-30 text-center shadow-sm">
   <div className="project-image mx-auto" style={{ height: '200px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
     {project.featuredImage ? (
       <GatsbyImage 
         image={getImage(project.featuredImage.node.localFile)} 
         alt={project.title}
         style={{ width: '100%', height: '100%', objectFit: 'cover' }}
       />
     ) : (
       <div style={{ width: '100%', height: '100%', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <span>No Image</span>
       </div>
     )}
   </div>
   <div className="card-body p-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '80px', backgroundColor: '#a63117' }}>
     <Link to={project.link} className="text-decoration-none">
       <h6 className="card-title mb-0 text-center" style={{ fontSize: '16px', fontWeight: '600', lineHeight: '1.4', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', color: '#fff' }}>
         {project.title}
       </h6>
     </Link>
   </div>
 </div>
</div>

        ))}
    
      </div>
      
    </div>
    
  </section>
)}

export default injectIntl(ProjectsPage)
