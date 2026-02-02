import React from 'react'
import ColLgMd from './col-lg-md'

const ContainerPEC = ({projects}) => {
    return (
        <div className="container custom-container px-0">
            <div className="row row-cols-1 row-cols-md-5 g-4 mb-4">
                {projects && projects.slice(0, 5).map(project => (
                    <div className="col" key={project.id}>
                        <ColLgMd project={project} />
                    </div>
                ))}
            </div>
            <div className="row row-cols-1 row-cols-md-5 g-4 mb-4">
                {projects && projects.slice(5, 10).map(project => (
                    <div className="col" key={project.id}>
                        <ColLgMd project={project} />
                    </div>
                ))}
            </div>
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {projects && projects.slice(10, 15).map(project => (
                    <div className="col" key={project.id}>
                        <ColLgMd project={project} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContainerPEC