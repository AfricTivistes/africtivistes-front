import React from 'react'

import { useImportScript } from '../../services'

const Testimonial = () => {

  useImportScript("/js/load/testimonial.js");

  return (<section id="testimonial-part" className="pt-120 pb-130 gray-bg">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section-title text-center pb-20">
            <h3>What Says Our Clients</h3>
            <div className="underline">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="row testimonial-slide">
        <div className="col-lg-6">
          <div className="singel-testimonial text-center mt-30">
            <div className="testimonial-conent">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat volutpat odio, non sodales est. Pellentesque ullamcorper porta nulla quis egestas. In ullamcorper quam non.</p>
            </div>
            <div className="author-name mt-20">
              <h6>Jhon Deo</h6>
              <p>- Senior Engineer</p>
              <i className="flaticon-quote"></i>
            </div>
            <div className="testimonial-author mt-25">
              <img src="/images/testmonials/ts-1.jpg" alt="author"/>
                        </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="singel-testimonial text-center mt-30">
              <div className="testimonial-conent">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat volutpat odio, non sodales est. Pellentesque ullamcorper porta nulla quis egestas. In ullamcorper quam non.</p>
              </div>
              <div className="author-name mt-20">
                <h6>Jhon Deo</h6>
                <p>- Senior Engineer</p>
                <i className="flaticon-quote"></i>
              </div>
              <div className="testimonial-author mt-25">
                <img src="/images/testmonials/ts-2.jpg" alt="author"/>
                        </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="singel-testimonial text-center mt-30">
                <div className="testimonial-conent">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat volutpat odio, non sodales est. Pellentesque ullamcorper porta nulla quis egestas. In ullamcorper quam non.</p>
                </div>
                <div className="author-name mt-20">
                  <h6>Jhon Deo</h6>
                  <p>- Senior Engineer</p>
                  <i className="flaticon-quote"></i>
                </div>
                <div className="testimonial-author mt-25">
                  <img src="/images/testmonials/ts-3.jpg" alt="author"/>
                        </div>
                </div>
              </div>
            </div>
          </div>
    </section>
)}

export default Testimonial
