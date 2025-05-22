import React from 'react'
import ContainerPEC from './container-projet-en-cours'

const Features = ({projects}) => (
  <section id="features-part-2" className="featuera-2 py-4 py-md-5">
    <div id="counter-part-3" className="bg_cover py-4 py-md-5" style={{backgroundImage:`url(/images/slider/backgroundplateforme.png)`}}>
      <div className="container-fluid px-3 px-md-4 px-lg-5">
        <ContainerPEC projects={projects}/>
      </div>
    </div>
  </section>
)

export default Features
