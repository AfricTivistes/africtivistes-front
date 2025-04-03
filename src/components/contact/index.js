import React from 'react'
import { injectIntl } from "gatsby-plugin-react-intl"
import {FormattedMessage} from "gatsby-plugin-react-intl"


const Contact = ({intl}) => {
  return(
  <section id="contact-page" className="pt-30 pb-30">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="contact-form mt-20">
            <form              
            onSubmit="submit"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              name="contact"
              id="contact-form" 
              data-toggle="validator">
              <input type="hidden" name="form-name" value="contact"/>
              <div className="row">
                <div className="col-md-6">
                  <div className="single-form form-group">
                    <input name="name"  type="text" placeholder= {intl.formatMessage({id:"name"})} data-error="Name is required." required="required"/>
                      <div className="help-block with-errors"></div>
                                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-form form-group">
                      <input name="email" type="email" placeholder= {intl.formatMessage({id:"email"})} data-error="Valid email is required." required="required"/>
                        <div className="help-block with-errors"></div>
                                    </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form form-group">
                        <input name="subject" type="text" placeholder= {intl.formatMessage({id:"subject"})} data-error="Subject is required." required="required"/>
                          <div className="help-block with-errors"></div>
                                    </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-form form-group">
                          <input name="phone" type="text" placeholder= {intl.formatMessage({id:"phone"})} data-error="Phone is required." required="required"/>
                            <div className="help-block with-errors"></div>
                                    </div>
                        </div>
                        <div className="col-md-12">
                          <div className="single-form form-group">
                            <textarea name="message" placeholder= {intl.formatMessage({id:"message"})} data-error="Please,leave us a message." required="required"></textarea>
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <p className="form-message"></p>
                        <div className="col-md-12">
                          <div className="single-form">
                            <button type="submit" className="main-btn"><FormattedMessage id="submit"/></button>
                          </div>
                        </div>
                      </div>
                        </form>
                  </div>
                </div>
                <div className="col-lg-4 offset-lg-1 col-md-5 col-sm-8">
                  <div className="contact-info mt-50">
                    <ul>
                      <li>
                        <div className="single-info d-flex">
                          <div className="icon">
                            <i className="flaticon-placeholder"></i>
                          </div>
                          <div className="content pl-15">
                            <p>Liberté 6 extention, Villa Numéro 263, Dakar - SENEGA</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-info d-flex">
                          <div className="icon">
                            <i className="flaticon-phone-call"></i>
                          </div>
                          <div className="content pl-15">
                            <p>(+221) 33 837 51 24</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-info d-flex">
                          <div className="icon">
                            <i className="flaticon-envelope"></i>
                          </div>
                          <div className="content pl-15">
                            <p>info@africtivistes.org</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul className="social mt-25">
                      <li><a href="https://web.facebook.com/africtivistes/"><i className="fa fa-facebook-f"></i></a></li>
                      <li><a href="https://twitter.com/AFRICTIVISTES"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="https://sn.linkedin.com/in/africtivistes"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
        </div>
    </section>
)
  }

export default injectIntl(Contact)