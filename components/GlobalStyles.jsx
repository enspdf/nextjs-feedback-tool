import React from "react";

export default ({ children }) => (
    <>
        {children}
        <style global jsx>{`
            :root {
                --foreground: #000000;
                --background: #ffffff;
                --primary: #6bc3b9;
                --secondary: #ffc12f;
                --border-radius: 0.25rem;
            }

            @font-face {
                font-family: 'Roboto Condensed';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: local('Roboto Condensed'), local('RobotoCondensed-Regular'), url(https://fonts.gstatic.com/s/robotocondensed/v18/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQk6YvM.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }

            @font-face {
                font-family: 'Roboto Condensed';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: local('Roboto Condensed Bold'), local('RobotoCondensed-Bold'), url(https://fonts.gstatic.com/s/robotocondensed/v18/ieVi2ZhZI2eCN5jzbjEETS9weq8-32meGCQYb9lecyU.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }

            h1, h2, h3, h4, h5, h6 {
                color: var(--primary);
            }

            body, html {
                box-sizing: border-box;
                font-family: 'Roboto Condensed', sans-serif;
            }

            * > * {
                box-sizing: border-box;
            }
        `}</style>
    </>
);