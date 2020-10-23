import React from 'react';
import { CUSTOM_ENV } from './config';

const MetaData: React.FunctionComponent = () => (
  <>
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    {CUSTOM_ENV === 'staging' && (
      <meta name='robots' content='noindex, nofollow' />
    )}
    <meta httpEquiv='X-UA-Compatible' content='IE=Edge' />
    <meta name='theme-color' content='#D80098' />
    <link rel='manifest' href='/manifest.json' />

    {/* <link rel='shortcut icon' href='/favicons/favicon.ico' /> */}
    {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
    {CUSTOM_ENV === 'production' && (
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${GA_TRACKING_ID}', { 'anonymize_ip': true });
                    `,
        }}
      />
    )} */}
  </>
);
export default MetaData;
