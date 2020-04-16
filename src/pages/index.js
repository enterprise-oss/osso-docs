import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Treat SAML as OAuth</>,
    imageUrl: 'img/catch_bigger.png',
    description: (
      <>
        SAMLBox authenticates users against SAML Identity Provider services,
        normalizes user payloads, and provides an OAuth server to sign those
        users into your application.
      </>
    ),
  },
  {
    title: <>Configuration Boilerplate</>,
    imageUrl: 'img/build_vs_buy.png',
    description: (
      <>
        SAMLBox provides an admin UI, configuration API, and React components you can use in your
        own application to onboard enterprise accounts and configure their SAML Identity Provider.
      </>
    ),
  },
  {
    title: <>Docs for Your Whole Team</>,
    imageUrl: 'img/build_vs_buy.png',
    description: (
      <>
        Beyond technical docuemtnation, SAMLBox provides guides and
        docs for your sales and success teams and your enterprise
        customers to make onboarding SAML accounts smooth sailing.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description="A free open source SSO and SAML microservice">
      <header className={classnames('hero', styles.heroBanner)}>
        <div className={styles.heroCopy}>
          <p>
            Authenticate Single Sign On users via SAML.
            <br /><br />
            For free.
          </p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Get Started
            </Link>
          </div>
        </div>
        <img className={styles.heroImage} src={'img/losso.svg'} alt='background image' />
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
