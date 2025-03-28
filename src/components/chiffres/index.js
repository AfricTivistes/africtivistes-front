import React from 'react'
import {FormattedMessage } from "gatsby-plugin-react-intl"
import { useImportScript } from '../../services'

const EnChiffres = ({posts}) => {

  useImportScript("/js/load/counter.js");

  return (  
    <>
    <div id="counter-part-3" className="bg_cover pt-80 pb-120" style={{backgroundImage:`url(/images/slider/chiffres.png)`}} data-overlay="8">
    <div className="container">
    <div className="row">
            <div className="col-lg-3 col-sm-6">
                <div className="single-counter-3 text-center pt-40">
                    <div className="icon mb-25">
                        <img src="/images/PARTICIPANTS À NOS SOMMETS.png" alt="Icône qualité" style={{ width: '75px', height: '75px' }} />
                    </div>
                    <div className="content">
                        <span className="counter">550+ </span>
                        <p className="mt-15"><FormattedMessage id="participants"/></p>
                    </div>
                </div> 
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="single-counter-3 text-center pt-40">
                    <div className="icon mb-25">
                        <img src="/images/PROJETS EN COURS.png" alt="Icône qualité" style={{ width: '75px', height: '75px' }} />
                    </div>
                    <div className="content">
                        <span className="counter">12 </span>
                        <p className="mt-15"><FormattedMessage id="projets"/></p>
                    </div>
                </div> 
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="single-counter-3 text-center pt-40">
                    <div className="icon mb-25">
                        <img src="/images/MEMBRES À TRAVERS 45 PAYS.png" alt="Icône qualité" style={{ width: '75px', height: '75px' }} />
                    </div>
                    <div className="content">
                        <span className="counter">400+ </span>
                        <p className="mt-15"><FormattedMessage id="membres"/></p>
                    </div>
                </div> 
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="single-counter-3 text-center pt-40">
                    <div className="icon mb-25">
                        <img src="/images/BÉNÉFICIAIRES DE NOS FORMATIONS EN PRÉSENTIEL.png" alt="Icône qualité" style={{ width: '75px', height: '75px' }} />
                    </div>
                    <div className="content">
                        <span className="counter">1350+ </span>
                        <p className="mt-15"><FormattedMessage id="formations"/></p>
                    </div>
                </div> 
            </div>
        </div> 

        <div className="row">
            <div className="col-lg-3 col-sm-6">
                <div className="single-counter-3 text-center pt-40">
                    <div className="icon mb-25">
                        <img src="/images/APPRENANTS INSCRITS AU MOOC.png" alt="Icône qualité" style={{ width: '75px', height: '75px' }} />
                    </div>
                    <div className="content">
                        <span className="counter">2000+ </span>
                        <p className="mt-15"><FormattedMessage id="mooc"/></p>
                    </div>
                </div> 
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="single-counter-3 text-center pt-40">
                    <div className="icon mb-25">
                        <img src="/images/APPUIS TECHNIQUES AUX ÉLECTIONS PRÉSIDENTIELLES.png" alt="Icône qualité" style={{ width: '75px', height: '75px' }} />
                    </div>
                    <div className="content">
                        <span className="counter">10</span>
                        <p className="mt-15"><FormattedMessage id="appuis"/></p>
                    </div>
                </div> 
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="single-counter-3 text-center pt-40">
                    <div className="icon mb-25">
                        <img src="/images/ACTIVISTES PRO-DÉMOCRATIE ET JOURNALISTES EN DANGER APPUYÉS.png" alt="Icône qualité" style={{ width: '75px', height: '75px' }} />
                    </div>
                    <div className="content">
                        <span className="counter">07</span>
                        <p className="mt-15"><FormattedMessage id="activistes"/></p>
                    </div>
                </div> 
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="single-counter-3 text-center pt-40">
                    <div className="icon mb-25">
                    <img src="/images/COMMUNAUTÉS D’ACTEUR DE CHANGEMENT PROPULSÉES.png" alt="Icône qualité" style={{ width: '75px', height: '75px' }} />
                    </div>
                    <div className="content">
                        <span className="counter">20</span>
                        <p className="mt-15"><FormattedMessage id="communautés"/></p>
                    </div>
                </div> 
            </div>
        </div> 
    </div> 
</div>
</>
)}
export default EnChiffres
