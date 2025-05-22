import React from 'react'

import { useImportScript } from '../../services'

const Counter2 = () => {

  useImportScript("/js/load/counter.js");

  return (<div id="counter-part-3" className="bg_cover pt-80 pb-120" style={{backgroundImage: `url(/images/bg-4.jpg)`}} data-overlay="5">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="single-counter-3 text-center pt-50">
            <div className="icon mb-25">
              <i className="flaticon-emoji"></i>
            </div>
            <div className="content">
              <span className="counter">750</span>
              <p className="mt-15">Happy clients</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="single-counter-3 text-center pt-50">
            <div className="icon mb-25">
              <i className="flaticon-experiment-results"></i>
            </div>
            <div className="content">
              <span><span className="counter">7</span>+</span>
              <p className="mt-15">Years of experience</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="single-counter-3 text-center pt-50">
            <div className="icon mb-25">
              <i className="flaticon-briefing"></i>
            </div>
            <div className="content">
              <span><span className="counter">250</span>+</span>
              <p className="mt-15">Project Completed</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="single-counter-3 text-center pt-50">
            <div className="icon mb-25">
              <i className="flaticon-quality"></i>
            </div>
            <div className="content">
              <span className="counter">17</span>
              <p className="mt-15">Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

export default Counter2
