import React from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-react-intl'

const Newsletter = ({intl}) => (
      <div className="footer-subscribe pt-45">
        <div className="title mb-35">
          <h4><FormattedMessage id="subscribe"/></h4>
        </div>
        <span><FormattedMessage id="newsletter"/></span>
        <div className="subscribe-form mt-25">        
        <form
              method="post"
              action="https://newsletter.infomaniak.com/external/submit"
              className="inf-form"
              target="_blank"
            >
              <input type="email" name="email" style={{ display: "none" }} />
              <input
                type="hidden"
                name="key"
                defaultValue="eyJpdiI6IkNZVnAzWGs4ZndqdHRQd1lMdFFiTktaaWdSWGlYQ2NGaUs0UkpHaVV3RDg9IiwidmFsdWUiOiJtZm5hTDd0enFWZG9LQ1pcL3NzZFc5cEpJdnVheFFnMVhQaU92REZrTmZpVT0iLCJtYWMiOiJmMmEzMGVmNDc0MzdmY2ZlOGQ5ZTM1OTMzNTI2NjA2ZTA0MzNjN2FhNTEyNDliZWQ3YmIyOWIwMTU2N2M2NzlmIn0="
              />
              <input type="hidden" name="webform_id" defaultValue={12761} />
                <div className="inf-success" style={{ display: "none" }}>
                  <h4>Votre inscription a été enregistrée avec succès !</h4>
                  <p>
                    {" "}
                    <a href="#" className="inf-btn">
                      «
                    </a>{" "}
                  </p>
                </div>
                <div className="inf-content">
                  <div className="inf-input inf-input-text">
                    {" "}
                    <input
                      type="text"
                      name="inf[1]"
                      data-inf-meta={1}
                      data-inf-error="Merci de renseigner une adresse email"
                      required="required"
                      placeholder="Email"
                    />{" "}
                  </div>
                  <div className="inf-submit">
                    {" "}
                    <button type="submit"><i className="flaticon-send" defaultValue="Valider" />{" "}</button>
                </div>
              </div>
          </form>
          </div>
  </div>
)


export default injectIntl(Newsletter)
