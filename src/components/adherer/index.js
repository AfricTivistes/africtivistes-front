import React, { useState } from 'react';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-react-intl';
import NewsletterFooter from '../NewsletterFooter';

const Adherer = ({ intl, content }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = <FormattedMessage id="nameRequired" />;
    if (!formData.phone) newErrors.phone = <FormattedMessage id="phoneRequired" />;
    if (!formData.email) newErrors.email = <FormattedMessage id="emailRequired" />;
    if (!formData.pays) newErrors.pays = <FormattedMessage id="countryRequired" />;
    if (!formData.ville) newErrors.ville = <FormattedMessage id="cityRequired" />;
    if (!formData.profession) newErrors.profession = <FormattedMessage id="professionRequired" />;
    if (!formData.biographie) newErrors.biographie = <FormattedMessage id="biographyRequired" />;
    if (!formData.subject) newErrors.subject = <FormattedMessage id="subjectRequired" />;
    if (!formData.message) newErrors.message = <FormattedMessage id="messageRequired" />;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle form submission
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="contact-page" className="pt-10 pb-10">
      <div className="container">
        <div className="row justify-content">
          <div className="col-lg-6">
            <div className="section-title pt-10 pb-10">
              <br></br>
              <h1 className="mt-15 mb-15" dangerouslySetInnerHTML={{ __html: content }}></h1>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form mt-20">
              <form onSubmit={handleSubmit} method="post" data-netlify="true" data-netlify-honeypot="bot-field" name="adherer" id="contact-form" data-toggle="validator">
                <input type="hidden" name="form-name" value="adherer" />
                <div hidden>
                  <input name="bot-field" />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-form form-group">
                      <input name="name" type="text" placeholder={intl.formatMessage({ id: "name" })} data-error={errors.name} required="required" onChange={handleInputChange} />
                      <div className="help-block with-errors">{errors.name}</div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="single-form form-group">
                      <input name="phone" type="text" placeholder={intl.formatMessage({ id: "phone" })} data-error={errors.phone} required="required" onChange={handleInputChange} />
                      <div className="help-block with-errors">{errors.phone}</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-form form-group">
                      <input name="email" type="email" placeholder={intl.formatMessage({ id: "email" })} data-error={errors.email} required="required" onChange={handleInputChange} />
                      <div className="help-block with-errors">{errors.email}</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-form form-group">
                      <input name="pays" type="text" placeholder={intl.formatMessage({ id: "pays" })} data-error={errors.pays} required="required" onChange={handleInputChange} />
                      <div className="help-block with-errors">{errors.pays}</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-form form-group">
                      <input name="ville" type="text" placeholder={intl.formatMessage({ id: "villederesidence" })} data-error={errors.ville} required="required" onChange={handleInputChange} />
                      <div className="help-block with-errors">{errors.ville}</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-form form-group">
                      <input name="profession" type="text" placeholder={intl.formatMessage({ id: "profession" })} data-error={errors.profession} required="required" onChange={handleInputChange} />
                      <div className="help-block with-errors">{errors.profession}</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-form form-group">
                      <input name="biographie" type="text" placeholder={intl.formatMessage({ id: "biographie" })} data-error={errors.biographie} required="required" onChange={handleInputChange} />
                      <div className="help-block with-errors">{errors.biographie}</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-form form-group">
                      <input name="compte-twitter" type="text" placeholder={intl.formatMessage({ id: "comptetwitter" })} onChange={handleInputChange} />
                      <div className="help-block with-errors">{errors["compte-twitter"]}</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-form form-group">
                      <input name="compte-facebook" type="text" placeholder={intl.formatMessage({ id: "comptefacebook" })} onChange={handleInputChange} />
                      <div className="help-block with-errors">{errors["compte-facebook"]}</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-form form-group">
                      <input name="lien-de-blog-ou-site-web" type="text" placeholder={intl.formatMessage({ id: "liendeblog" })} onChange={handleInputChange} />
                      <div className="help-block with-errors">{errors["lien-de-blog-ou-site-web"]}</div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="single-form form-group">
                      <h6 name="subject" type="text" placeholder={intl.formatMessage({ id: "objet" })} data-error={errors.subject}>
                        <FormattedMessage id="subject" /> :
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label required="required">
                        <br></br>
                        <label htmlFor="contactChoice1">
                          <FormattedMessage id="personne" /> : 
                        </label>
                        <input type="radio" id="personne" placeholder={intl.formatMessage({ id: "personne" })} name="subject" value="personne" required="required" onChange={handleInputChange} />
                        <br></br>
                        <label htmlFor="contactChoice2">
                          <FormattedMessage id="organisation" /> : 
                        </label>
                        <input type="radio" id="organisation" placeholder={intl.formatMessage({ id: "organisation" })} name="subject" value="organisation" required="required" onChange={handleInputChange} />
                        <br></br>
                        <label htmlFor="contactChoice3">
                          <FormattedMessage id="mouvement" /> : 
                        </label>
                        <input type="radio" id="mouvement" placeholder={intl.formatMessage({ id: "mouvement" })} name="subject" value="mouvement" required="required" onChange={handleInputChange} />
                      </label>
                      <div className="help-block with-errors">{errors.subject}</div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-form form-group">
                      <textarea name="message" placeholder={intl.formatMessage({ id: "message" })} data-error={errors.message} required="required" onChange={handleInputChange}></textarea>
                      <div className="help-block with-errors">{errors.message}</div>
                    </div>
                  </div>
                  <p className="form-message"></p>
                  <div className="col-md-6">
                    <div className="single-form form-group">
                      <button type="submit" className="main-btn" id="form-submit">
                        <FormattedMessage id="envoyer" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

            <div className="col-lg-6">
              <div className="contact-info mt-50">
                <ul>
                  <li>
                    <div className="single-info d-flex">
                      <div className="icon">
                        <i className="flaticon-placeholder"></i>
                      </div>
                      <div className="content pl-15">
                        <p>Liberté 6 extension villa N°263, Dakar, Sénégal</p>
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
                  <li>
                    <a href="https://web.facebook.com/africtivistes/">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/AFRICTIVISTES">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://sn.linkedin.com/in/africtivistes">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
            <div className="col-lg-6">
              <NewsletterFooter />
            </div>
        </div>
      </div>
    </section>
  );
};

export default injectIntl(Adherer);
