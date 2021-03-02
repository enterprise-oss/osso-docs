import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useOssoFields } from "@enterprise-oss/osso";
import Layout from "@theme/Layout";
import { Button } from "antd";
import classnames from "classnames";
import React from "react";
import { useMediaQuery } from "react-responsive";

import AdminUI from "../components/svg/AdminUI.svg";
import OssoDiagram from "../components/svg/OssoDiagram.svg";
import PDFs from "../components/svg/PDFs.svg";
import screens from "../utils/responsive";
import styles from "./styles.module.css";

const Separator = () => (
  <svg width="100%" height="2px" className={styles.separator}>
    <line x1="0" x2="100%" strokeWidth="1" strokeDasharray="25" />
  </svg>
);

function Home() {
  const isLargeScreen = useMediaQuery({ query: screens.large });
  const { providers } = useOssoFields();
  return (
    <Layout title="Home" noNavbar>
      <div className={styles.hero}>
        <h1>Add enterprise-grade SSO to any application</h1>
        <Link to={useBaseUrl("docs/quick-start")}>
          <Button ghost size="large" className={styles.heroBtn}>
            Get started
          </Button>
        </Link>
      </div>

      <div className={styles.benefit}>
        <AdminUI />
        <div>
          <h3>Get Enterprise-ready</h3>
          <p>
            Enterprise customers want to sign in to your application using their
            centralized Identity Provider. Osso offers first-class support for
            leading IDPs and can integrate any IDP that uses SAML 2.0.
          </p>
        </div>
      </div>

      <Separator />
      <div className={styles.alt}>
        <h2>Supported Identity Providers</h2>
        <div className={styles.providerLogos}>
          {providers.map((provider) => (
            <div key={provider.value}>
              <img
                src={provider.iconUrl}
                className={styles.providerLogo}
                alt={provider.label}
              />
            </div>
          ))}
        </div>
      </div>
      <Separator />

      <div className={classnames(styles.benefit, styles.benefitReverse)}>
        <div>
          <h3>Painless integration in any language</h3>
          <p>
            Integrate Osso into any application using an OAuth 2.0 flow. Osso
            handles the ugly SAML parts directly with IDPs and provides
            normalized JSON user profiles to your app. Osso offers client SDKs,
            example apps and tutorials, a React library for deeper client
            integrations, and developer support to help you implement SAML SSO
            yesterday.
          </p>
        </div>

        <OssoDiagram />
      </div>
      <Separator />
      <div className={styles.alt}></div>
      <Separator />

      <div className={styles.benefit}>
        <PDFs />
        <div>
          <h3>Impress your customers</h3>
          <p>
            Osso helps your customer success team onboard enterprise customers
            in an intuitive UI, and generates custom documentation for each
            customer to set up your application in their Identity Provider.
          </p>
        </div>
      </div>
      <Separator />
    </Layout>
  );
}

export default Home;
