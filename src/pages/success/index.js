import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import { useMediaQuery } from "react-responsive";

import screens from "../../utils/responsive";

function Success() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const isLargeScreen = useMediaQuery({ query: screens.large });

  return (
    <Layout
      title={siteConfig.title}
      description="Free, open-source software for adding SAML based SSO to your application"
    >
      Thanks! We're deploying your instance. Once it's ready, you'll receive an
      invitation via email.
    </Layout>
  );
}

export default Success;
