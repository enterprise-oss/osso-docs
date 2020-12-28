import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Layout as AntLayout } from "antd";
import React, { useEffect, useState } from "react";

export default function privacy() {
  useEffect(() => {
    const script = document.createElement("script");

    script.type = "text/javascript";
    script.innerHTML =
      '(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);';
    script.async = true;

    if (document.body != null) document.body.appendChild(script);
  }, []);
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={siteConfig.title}
      description="Free, open-source software for adding SAML based SSO to your application"
    >
      <AntLayout.Content className="container margin-vert--xl ">
        <a
          href="https://www.iubenda.com/privacy-policy/28156222/cookie-policy"
          className="iubenda-white no-brand iubenda-embed iub-body-embed"
          title="Cookie Policy"
        >
          Cookie Policy
        </a>
      </AntLayout.Content>
    </Layout>
  );
}
