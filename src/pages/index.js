import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import { Button } from "antd";
import classnames from "classnames";
import React from "react";
import { useMediaQuery } from "react-responsive";

import BoilerplateSvg from "../components/svg/boilerplate";
import SAMLSvg from "../components/svg/saml";
import TeamDocsSvg from "../components/svg/team_docs";
import TitleWithMarker from "../components/titleWithMarker/index";
import screens from "../utils/responsive";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Sell to enterprise, fast</>,
    description: (
      <>
        Want to sell to Enterprise customers? SAML-based SSO is a requirement.
        Osso integrates with all of the most popular Identity Providers so that
        you can check off another box on your sales pitch and start closing
        bigger deals.
      </>
    ),
    Component: SAMLSvg,
  },
  {
    title: <>Ship, faster</>,
    description: (
      <>
        Osso's SAML-based solution lets your customers use their preferred
        Identity Providers to sign into your application. It's quick to
        integrate, too: what is typically a multi-week project can be deployed
        in just a few hours.
      </>
    ),
    Component: BoilerplateSvg,
  },
  {
    title: <>Free up your dev team</>,
    description: (
      <>
        With its intuitive UI and custom docs, Osso will enable your customer
        success teams (or users!) to handle onboarding and support, freeing up
        your developers to focus on higher-priority work.
      </>
    ),
    Component: TeamDocsSvg,
  },
];

function Home() {
  const isLargeScreen = useMediaQuery({ query: screens.large });

  return (
    <Layout title="Home">
      <div className={styles.heroContainer}>
        <header className={classnames("hero", styles.heroBanner)}>
          <div className={styles.heroCopy}>
            <p>Add enterprise-grade SSO to your application today</p>
            <div className={styles.buttons}>
              <Link to={useBaseUrl("docs/quick-start")}>
                <Button ghost size="large" className={styles.heroBtn}>
                  Get started
                </Button>
              </Link>
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
                  <TitleWithMarker title={title} />
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
