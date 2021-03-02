import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useOssoFields } from "@enterprise-oss/osso";
import Layout from "@theme/Layout";
import { Button } from "antd";
import classnames from "classnames";
import DevIcon from "devicon-react-svg";
import React from "react";
import { useMediaQuery } from "react-responsive";

import BlogTeaser from "../components/blogTeaser";
import AdminUI from "../components/svg/AdminUI.svg";
import OAuth from "../components/svg/Oauth.svg";
import OssoDiagram from "../components/svg/OssoDiagram.svg";
import PDFs from "../components/svg/PDFs.svg";
import Python from "../components/svg/python.svg";
import SuperTokens from "../components/svg/supertokens.svg";
import screens from "../utils/responsive";
import styles from "./styles.module.css";

const Separator = () => (
  <svg width="100%" height="2px" className={styles.separator}>
    <line x1="0" x2="100%" strokeWidth="1" strokeDasharray="25" />
  </svg>
);

const integrations = [
  "ruby",
  "ror",
  "clojure",
  Python,
  "nodejs_small",
  "react",
  OAuth,
  "typescript_badge",
  SuperTokens,
];

const customSortedIDPs = (idps) => {
  const ordering = {};
  const sortOrder = [
    "AZURE",
    "OKTA",
    "ONELOGIN",
    "SALESFORCE",
    "GOOGLE",
    "PING",
    "OTHER",
  ];

  for (var i = 0; i < sortOrder.length; i++) ordering[sortOrder[i]] = i;

  return idps.sort((a, b) => ordering[a.value] - ordering[b.value]);
};

function Home() {
  const isLargeScreen = useMediaQuery({ query: screens.large });
  const { providers } = useOssoFields();
  return (
    <Layout title="Home" noNavbar={isLargeScreen}>
      <div className={styles.heroWrapper}>
        <div className={styles.hero}>
          <h1>Add enterprise-grade SSO to any application</h1>
          <Link to={useBaseUrl("docs/quick-start")}>
            <Button ghost size="large" className={styles.heroBtn}>
              Get started
            </Button>
          </Link>
        </div>
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
          {customSortedIDPs(providers).map((provider) => (
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
      <div className={styles.alt}>
        <h2>SDKs & Integrations</h2>
        <div className={styles.providerLogos}>
          {integrations.map((Lang) =>
            typeof Lang === "string" ? (
              <DevIcon className={styles.devicon} key={Lang} icon={Lang} />
            ) : (
              <Lang className={styles.devicon} key={Lang} />
            )
          )}
        </div>
      </div>
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
      <div className={classnames(styles.alt, styles.blogRoll)}>
        <h2>Recent Blog Posts</h2>
        <div className={styles.blogTeasers}>
          <BlogTeaser
            authorImg="https://avatars1.githubusercontent.com/u/923033?s=460&u=db9bb41f9b279750c74afc1be0ab51db05539593&v=4"
            title="Add SAML SSO to a Rails 6 App"
            preview="SAML SSO refers to an authentication mechanism preferred by enterprise companies. The SSO part stands for Single Sign-On. From the enterprise’s perspective, they desire a centralized service where their employees can authenticate, which then provides authenticated access to the... "
            path="/blog/saml-sso-rails"
          />
          <BlogTeaser
            authorImg="https://avatars0.githubusercontent.com/u/5394293?s=460&u=03bbc0c5174d8341157e4cddb3252b74f33b2482&v=4"
            title="The ABCs of IDPs"
            preview="Identity Providers (IDPs) are a category of software applications responsible for managing employee access to the various third party applications (AKA Service Providers) that modern enterprise companies rely on."
          />
          <BlogTeaser
            authorImg="https://avatars1.githubusercontent.com/u/923033?s=460&u=db9bb41f9b279750c74afc1be0ab51db05539593&v=4"
            title="SAML vs. OAuth"
            preview="OAuth and SAML are both open specifications for exchanging access credentials for a specific user between an identity provider and an application. When a user wants to sign in to an app using either SAML or OAuth, they are sent to a third party where the user must already be registered."
          />
        </div>
      </div>
      <Separator />
    </Layout>
  );
}

export default Home;
