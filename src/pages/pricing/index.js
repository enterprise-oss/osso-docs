import { CheckCircleTwoTone } from "@ant-design/icons";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Layout from "@theme/Layout";
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Layout as AntLayout,
  Modal,
  Row,
} from "antd";
import classnames from "classnames";
import React, { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import screens from "../../utils/responsive";
import EnterpriseModal from "./enterpriseModal";
import PaymentModal from "./paymentModal";
import { plans } from "./plans";
import styles from "./styles.module.css";

const stripePromise = loadStripe("pk_test_8VH9wndIf965pwn0l6Iz9MVV00AX0HJIEx");

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const isLargeScreen = useMediaQuery({ query: screens.large });
  const [currentPlan, setPlan] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <Layout
      title={siteConfig.title}
      description="Free, open-source software for adding SAML based SSO to your application"
    >
      <AntLayout.Content
        className={classnames("container margin-vert--xl", styles.container)}
      >
        <Row gutter={[16, 48]}>
          <Col span={24} className={styles.plansTitle}>
            <h3>Our plans</h3>
          </Col>
        </Row>
        <Row gutter={[8, 72]} width="1440px">
          {plans.map((plan) => (
            <Col key={plan.name} sm={24} md={12} lg={6}>
              <Card
                className={styles.planCard}
                hoverable
                onClick={() => setPlan(plan)}
                title={
                  <div className={styles.planHeader}>
                    <span>{plan.name}</span>
                    <span className={styles.price}>{plan.price}</span>
                  </div>
                }
                headStyle={{}}
                bodyStyle={{
                  display: "flex",
                  flexGrow: "1",
                  flexDirection: "column",
                }}
              >
                <p className={styles.planCopy}>{plan.copy}</p>
                <div className={styles.featureList}>
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li className={styles.planFeature} key={index}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  loading={loading.name === plan.name}
                  type="primary"
                  onClick={() => setPlan(plan)}
                  style={{ marginTop: "auto", marginBottom: 12 }}
                >
                  {plan.cta}
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <Col sm={24} md={{ span: 20, offset: 2 }} className={styles.features}>
            <h3>
              {isLargeScreen && <span className={styles.titleMarker} />}
              Osso is for everybody
            </h3>
            <p>
              Still not seeing a plan that’s perfect for you? Osso is and will
              remain a free, open source piece of software that anyone can use
              by deploying to their own infrastructure. Check out our{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/enterprise-oss/osso"
              >
                Github
              </a>{" "}
              for more info (and star it to keep up with updates).
            </p>
            <p>
              If we’re missing something that could be a big help to you or your
              organization, get in touch and let us know. We’re scrappy and we
              want your business.
              <br />
              <br />
              If you’d like to follow along as we release new features, give us
              your email address and we’ll keep you in the loop; no SPAM and no
              sharing of your information with any other entity.
            </p>
            <form
              name="email-list"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="email-list" />
              <Input.Group>
                <Input
                  placeholder="Your email address"
                  name="email"
                  type="email"
                  style={{ width: "282px" }}
                />
                <Button type="primary" htmlType="submit">
                  Sign up for updates
                </Button>
              </Input.Group>
            </form>
          </Col>
        </Row>
        <EnterpriseModal
          open={currentPlan.name === "Enterprise"}
          onClose={() => setPlan("")}
        />
        <Elements stripe={stripePromise}>
          <PaymentModal
            plan={currentPlan}
            open={currentPlan.name && currentPlan.name !== "Enterprise"}
            onClose={() => setPlan("")}
          />
        </Elements>
      </AntLayout.Content>
    </Layout>
  );
}

export default Home;
