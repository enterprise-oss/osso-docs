import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Button } from "antd";
import classnames from "classnames";
import React from "react";
import { useMediaQuery } from "react-responsive";

import BoilerplateSvg from "../components/svg/boilerplate";
import SAMLSvg from "../components/svg/saml";
import TeamDocsSvg from "../components/svg/team_docs";
import screens from "../utils/responsive";
import styles from "./styles.module.css";

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
    Component: SAMLSvg,
  },
  {
    title: <>SAML Config Wherever You Want It</>,
    description: (
      <>
        Get started quickly by configuring your customers&apos; SAML providers
        in the Osso Admin UI, or allow your customers to perform configuration
        themselves in your UI with hooks and components from our React library.
      </>
    ),
    Component: BoilerplateSvg,
  },
  {
    title: <>Docs for Your Whole Team</>,
    description: (
      <>
        Beyond technical documentation, Osso provides guides and docs for your
        sales and success teams and your enterprise customers to make onboarding
        SAML accounts smooth sailing.
      </>
    ),
    Component: TeamDocsSvg,
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const isLargeScreen = useMediaQuery({ query: screens.large });

  return (
    <Layout
      title={siteConfig.title}
      description="Free, open-source software for adding SAML based SSO to your application"
    >
      <div className={styles.heroContainer}>
        <header className={classnames("hero", styles.heroBanner)}>
          <div className={styles.heroCopy}>
            <p>
              Authenticate Single Sign-On users with free, open source software
            </p>
            <div className={styles.buttons}>
              <Button size="large" href={useBaseUrl("docs/quick-start")}>
                Get started
              </Button>
            </div>
          </div>
          {isLargeScreen && (
            <img
              className={styles.heroImage}
              src={"img/losso2.svg"}
              alt="background image"
            />
          )}
        </header>
      </div>
      <main>
        <section className={styles.features}>
          <div className="container">
            {features.map(({ title, description, Component }, idx) => (
              <div key={idx} className={classnames("row", styles.row)}>
                <div className="col">
                  <h3>
                    {isLargeScreen && <span className={styles.titleMarker} />}
                    {title}
                  </h3>
                  <p>{description}</p>
                </div>
                <div className={classnames("col", styles.imageContainer)}>
                  <Component />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
