import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Layout as AntLayout } from "antd";
import React, { useEffect, useState } from "react";

export default function privacy() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const [content, setContent] = useState("");

  const loadTerms = async () => {
    fetch("https://www.iubenda.com/api/privacy-policy/28156222/no-markup", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(({ success, content }) => {
        setContent(content);
      });
  };

  useEffect(() => {
    loadTerms();
  }, []);

  return (
    <Layout
      title={siteConfig.title}
      description="Free, open-source software for adding SAML based SSO to your application"
    >
      <AntLayout.Content className="container margin-vert--xl ">
        <div dangerouslySetInnerHTML={{ __html: content }} />;
      </AntLayout.Content>
    </Layout>
  );
}
