import React from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-react-intl'

const Newsletter = ({intl}) => {
  const logDebug = (hypothesisId, message, data) => {
    // #region agent log
    fetch('http://127.0.0.1:7927/ingest/4904cff7-09ff-474b-aa2b-cf78f520317b',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'f4202d'},body:JSON.stringify({sessionId:'f4202d',runId:'pre-fix',hypothesisId,location:'src/components/NewsletterFooter.jsx',message,data,timestamp:Date.now()})}).catch(()=>{});
    // #endregion
  };

  const handleNewsletterSubmit = (event) => {
    const form = event.currentTarget;
    const newsletterInput = form.querySelector('input[name="inf[1]"]');
    const honeypotInput = form.querySelector('input[name="email"]');
    const keyInput = form.querySelector('input[name="key"]');
    const webformIdInput = form.querySelector('input[name="webform_id"]');

    logDebug('H3', 'Footer newsletter submit triggered', {
      path: typeof window !== 'undefined' ? window.location.pathname : 'ssr',
      action: form.getAttribute('action') || '',
      target: form.getAttribute('target') || '',
      hasNewsletterField: Boolean(newsletterInput),
      newsletterLength: newsletterInput?.value?.trim().length || 0,
      honeypotLength: honeypotInput?.value?.trim().length || 0,
    });

    logDebug('H4', 'Footer newsletter hidden fields snapshot', {
      keyLength: keyInput?.value?.length || 0,
      webformId: webformIdInput?.value || '',
      keyHasBooleanJsAttribute: keyInput?.hasAttribute('js') || false,
    });
  };

  return (
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
              onSubmit={handleNewsletterSubmit}
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
}


export default injectIntl(Newsletter)
