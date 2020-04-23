import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useMediaQuery } from 'react-responsive'
import styles from './styles.module.css';
import screens from '../utils/responsive';

const features = [
  {
    title: <>Treat SAML as OAuth</>,
    description: (
      <>
        Osso authenticates users against SAML Identity Provider services,
        normalizes user payloads, and provides an OAuth server to sign those
        users into your application.
      </>
    ),
  },
  {
    title: <>Configuration Boilerplate</>,
    description: (
      <>
        Osso provides an admin UI, configuration API, and React components you can use in your
        own application to onboard enterprise accounts and configure their SAML Identity Provider.
      </>
    ),
  },
  {
    title: <>Docs for Your Whole Team</>,
    description: (
      <>
        Beyond technical docuemtnation, Osso provides guides and
        docs for your sales and success teams and your enterprise
        customers to make onboarding SAML accounts smooth sailing.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const isLargeScreen = useMediaQuery({ query: screens.large })

  return (
    <Layout
      title={siteConfig.title}
      description="A free open source SSO and SAML microservice">
      <div className={styles.heroContainer}>
        <header className={classnames('hero', styles.heroBanner)}>
          <div className={styles.heroCopy}>
            <p>
              Authenticate<br />
              Single Sign On users<br />
              via SAML with free,<br />
              open source software
          </p>
            <div className={styles.buttons}>
              <Link
                className={classnames(
                  'button button--secondary button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('guides/what-is-saml')}>
                Get Started
            </Link>
            </div>
          </div>
          {isLargeScreen && <img className={styles.heroImage} src={'img/losso.svg'} alt='background image' />}
        </header>
      </div>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className='col col--6'>
                <div className={styles.featureList}>
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
              <div className={classnames("col col--5 col--offset-1", styles.imageContainer)} >
                <img src='img/lander.png' alt='background image' />
              </div>
            </div>

          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
