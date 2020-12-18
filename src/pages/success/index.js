import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Col, Layout as AntLayout, Row } from "antd";
import classnames from "classnames";
import React from "react";
import { useMediaQuery } from "react-responsive";

import SAMLSvg from "../../components/svg/saml";
import screens from "../../utils/responsive";
import styles from "./styles.module.css";

function Success() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const isLargeScreen = useMediaQuery({ query: screens.large });

  return (
    <Layout
      title={siteConfig.title}
      description="Free, open-source software for adding SAML based SSO to your application"
    >
      <AntLayout.Content className={classnames("container", styles.container)}>
        <Row>
          <Col span={24}>
            <Row gutter={[80, 0]} className={styles.success}>
              <Col span={8}>
                <SAMLSvg />
              </Col>
              <Col span={16}>
                <div>
                  <h2>You’ve signed up for the Bootstrap plan</h2>
                  <p>Welcome to Osso! We’re so excited that you chose us.</p>
                  <p>
                    You’ll receive an email from welcome@ossoapp.com with
                    instructions for how to start using Osso to sign your
                    customers into your app via SAML SSO.
                  </p>
                  <p>
                    If you have any questions, we’re here to help. We can be
                    reached via email at help@ossoapp.com, or via chat on the
                    bottom right of this page.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </AntLayout.Content>
    </Layout>
  );
}

export default Success;
