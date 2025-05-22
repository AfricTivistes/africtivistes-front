import React from 'react'
import ColLgMd from './col-lg-md'
import { useImportScript } from '../../../services'

const ContainerPEC = ({projects}) => {
    // Use the custom hook directly
    useImportScript("/js/load/plateforme-slider.js")

    return (
        <div className="container custom-container px-0">
            <div className="plateforme-slider position-relative">
                <div className="row plateforme-active">
                    {projects && projects.map(project => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 pb-30" key={project.id}>
                            <ColLgMd project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContainerPEC
