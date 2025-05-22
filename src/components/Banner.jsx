import React from 'react'

const PageBanner = ({ title }) => (
    <section id="page-banner" className="bg_cover pt-150 pb-150" style={{ backgroundImage: `url(/images/ss.jpeg)` }} data-overlay="6">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-banner-content text-center">
                        <h2>{title}</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default PageBanner
