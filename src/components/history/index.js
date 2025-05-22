import React from 'react'
import{FormattedMessage} from 'react-intl'

const History = () => (
<section id="company-history" class="pt-30 pb-30">
        <div class="container">
        <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section-title text-center pb-15">
                        <h2><FormattedMessage id="presentation"/></h2>
                        <div className="underline">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
        </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="years-experience mt-45">
                        {/* <h4 class="mb-25"><FormattedMessage id="reseau"/></h4> */}
                        <p class="mb-10"><FormattedMessage id="presentation-reseau"/></p>
                    </div>
                </div>
                <div class="col-lg-6 pt-45">
                <div className="company-about-image">
                        <img src="/images/logoo.png" alt="company history"/>
                    </div>
                </div>
            </div>
            <div class="our-history pt-30">
                <div class="our-single-history pb-30">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="our-history-content mt-50">
                                <h4 class="mb-15"><FormattedMessage id="outil-de-transformation"/></h4>
                                <p><FormattedMessage id="desc-outil-de-transformation"/></p>
                            </div>
                        </div>
                        <div class="col-lg-6 order-last order-lg-first">
                            <div class="our-history-content mt-50">
                                <h4 class="mb-15"><FormattedMessage id="act-for-change"/></h4>
                                <p><FormattedMessage id="desc-act-for-change"/><br/></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="our-single-history pb-30">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="years-experience mt-45">
                                <h4 class="mb-15"><FormattedMessage id="reseau-dinfluence"/></h4>
                                <p><FormattedMessage id="desc-reseau-dinfluence"/></p><br></br>
                        <ul>
                            <li><FormattedMessage id="construction"/></li>
                            <li><FormattedMessage id="conception"/></li>
                            <li><FormattedMessage id="capacite"/></li>
                            <li><FormattedMessage id="influence"/></li>
                            <li><FormattedMessage id="capacitation"/></li>
                            <li><FormattedMessage id="promotion"/></li>
                            <li><FormattedMessage id="developpement"/></li>
                            <li><FormattedMessage id="realisation"/></li>
                            <li><FormattedMessage id="applications"/></li>

                        </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default History