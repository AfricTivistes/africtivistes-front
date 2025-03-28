import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        // jquery js
        <script
            key="js-01"
            src="/js/vendor/modernizr-3.6.0.min.js"
        />,
        <script
            key="js-02"
            src="/js/vendor/jquery-1.12.4.min.js"
        />,
        // Bootstrap js
        <script
            key="js-03"
            src="/js/bootstrap.min.js"
        />,
        // Slick js
        <script
            key="js-04"
            src="/js/slick.min.js"
        />,
        // Magnific Popup js
        <script
            key="js-05"
            src="/js/jquery.magnific-popup.min.js"
        />,
        // Isotope js
        <script
            key="js-06"
            src="/js/isotope.pkgd.min.js"
        />,
        // Images Loaded js
        <script
            key="js-07"
            src="/js/imagesloaded.pkgd.min.js"
        />,
        // Counter Up js
        <script
            key="js-08"
            src="/js/waypoints.min.js"
        />,
        <script
            key="js-09"
            src="/js/jquery.counterup.min.js"
        />,
        // Nice Number js
        <script
            key="js-10"
            src="/js/jquery.nice-number.min.js"
        />,
        // Validator js
        <script
            key="js-11"
            src="/js/validator.min.js"
        />,
        // Ajax Contact js
        <script
            key="js-12"
            src="/js/ajax-contact.js"
        />,
        // // Main js
        // <script
        //     key="js-13"
        //     src="/js/main.js"
        // />,
        // Map js
        <script
            key="js-14"
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDC3Ip9iVC0nIxC6V14CKLQ1HZNF_65qEQ"
        />,
        <script
            key="js-15"
            src="/js/map-script.js"
        />
    ])
}
