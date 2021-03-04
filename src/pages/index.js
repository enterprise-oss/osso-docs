import BrowserOnly from "@docusaurus/BrowserOnly";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useOssoFields } from "@enterprise-oss/osso";
import useThemeContext from "@theme/hooks/useThemeContext";
import Layout from "@theme/Layout";
import { Button } from "antd";
import classnames from "classnames";
import React from "react";
import Marquee from "react-marquee-slider";

import BlogTeaser from "../components/blogTeaser";
import Separator from "../components/separator";
import AdminUI from "../components/svg/AdminUI.svg";
import Clojure from "../components/svg/clojure.svg";
import NextJS from "../components/svg/nextjs.svg";
import NodeJS from "../components/svg/nodejs.svg";
import OAuth from "../components/svg/Oauth.svg";
import OssoDiagram from "../components/svg/OssoDiagram.svg";
import PDFs from "../components/svg/PDFs.svg";
import Python from "../components/svg/python.svg";
import Rails from "../components/svg/rails.svg";
import ReactSVG from "../components/svg/react.svg";
import Ruby from "../components/svg/ruby.svg";
import SuperTokens from "../components/svg/supertokens.svg";
import Typescript from "../components/svg/typescript.svg";
import screens from "../utils/responsive";
import styles from "./styles.module.css";

const integrations = [
  Rails,
  Clojure,
  NextJS,
  Python,
  NodeJS,
  SuperTokens,
  ReactSVG,
  OAuth,
  Ruby,
  Typescript,
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
  const { isDarkTheme } = useThemeContext();
  const { providers } = useOssoFields();
  return (
    <>
      <div className={styles.heroWrapper}>
        <div className={styles.hero}>
          <h1>Add enterprise-grade SAML SSO to any application</h1>
          <div className={styles.heroButtons}>
            <Link to={useBaseUrl("pricing")}>
              <Button ghost={isDarkTheme} size="large">
                Get started
              </Button>
            </Link>

            <Link to={useBaseUrl("/docs/overview")}>
              <Button type="link" size="large" className={styles.learnMoreBtn}>
                Learn more &rarr;
              </Button>
            </Link>
          </div>
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
        <BrowserOnly>
          {() => (
            <div className={styles.providerLogos}>
              <Marquee
                velocity={15}
                minScale={1}
                maxScale={1}
                scatterRandomly={false}
              >
                {customSortedIDPs(providers).map((provider) => (
                  <div
                    key={provider.value}
                    className={styles.providerContainer}
                  >
                    <img
                      src={provider.iconUrl}
                      className={styles.providerLogo}
                      alt={provider.label}
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          )}
        </BrowserOnly>
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

        <OssoDiagram
          style={{
            backgroundColor: "var(--ifm-dark-background-color)",
            borderRadius: "50%",
          }}
        />
      </div>
      <Separator />
      <div className={styles.alt}>
        <h2>SDKs & Integrations</h2>
        <BrowserOnly>
          {() => (
            <div className={styles.integrations}>
              <Marquee
                direction="ltr"
                velocity={15}
                minScale={1}
                maxScale={1}
                scatterRandomly={false}
              >
                {integrations.map((Icon, index) => (
                  <Icon className={styles.devicon} key={index} />
                ))}
              </Marquee>
            </div>
          )}
        </BrowserOnly>
      </div>
      <Separator />

      <div className={styles.benefit}>
        <PDFs />
        <div>
          <h3>Setup for success</h3>
          <p>
            Osso helps your customer success team onboard enterprise customers
            in an intuitive UI, and generates custom documentation for each
            customer to easily set up your application in their Identity
            Provider.
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
            path="/blog/all-about-idps"
          />
          <BlogTeaser
            authorImg="https://avatars1.githubusercontent.com/u/923033?s=460&u=db9bb41f9b279750c74afc1be0ab51db05539593&v=4"
            title="SAML vs. OAuth"
            preview="OAuth and SAML are both open specifications for exchanging access credentials for a specific user between an identity provider and an application. When a user wants to sign in to an app using either SAML or OAuth, they are sent to a third party where the user must already be registered."
            path="/blog/saml-vs-oauth"
          />
        </div>
      </div>
    </>
  );
}

const WrappedHome = () => (
  <Layout title="Home" slimNavbar>
    <Home />
  </Layout>
);

export default WrappedHome;
