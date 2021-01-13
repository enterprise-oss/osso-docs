import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Layout from "@theme/Layout";
import { Button, Card, Col, Collapse, Layout as AntLayout, Row } from "antd";
import classnames from "classnames";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import EnterpriseModal from "../../components/enterpriseModal";
import PaymentModal from "../../components/paymentModal/index";
import { plans } from "../../utils/plans";
import screens from "../../utils/responsive";
import styles from "./styles.module.css";

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

function Pricing() {
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
          <Col sm={24} md={{ span: 16, offset: 4 }} className={styles.faq}>
            <h3>
              {isLargeScreen && <span className={styles.titleMarker} />}
              Frequently asked questions
            </h3>
            <Collapse accordion bordered={false} className={styles.panel}>
              <Collapse.Panel
                header={
                  <span className={styles.panelTitle}>
                    What qualifies as a Customer?
                  </span>
                }
                key="1"
                className={styles.panel}
              >
                <p>
                  A customer is any single entity that uses Osso so that their
                  users can log into your app with SAML. For a multi-tenant SAAS
                  app, this will map directly to your notion of an account.
                  Accounts that use your existing authentication flow do not
                  count as customers for Osso.
                </p>
              </Collapse.Panel>
              <Collapse.Panel
                header={
                  <span className={styles.panelTitle}>
                    Do you charge for the number of users our Customers have?
                  </span>
                }
                key="2"
                className={styles.panel}
              >
                <p>
                  No. Whether your customer has 10 or 10,000 users, they’ll
                  still count as just one customer to us. We don’t want to
                  charge you more because your software is a daily driver, and
                  charging per customer provides a more predictable pricing for
                  your subscription.
                </p>
              </Collapse.Panel>
              <Collapse.Panel
                header={
                  <span className={styles.panelTitle}>
                    What if my customer has multiple Identity Providers?
                  </span>
                }
                key="3"
                className={styles.panel}
              >
                <p>
                  Multiple Identity Providers for a single customer are totally
                  fine; they’ll all be folded into that single customer’s
                  account and won’t count additionally against your quota.
                </p>
              </Collapse.Panel>
              <Collapse.Panel
                header={
                  <span className={styles.panelTitle}>
                    What happens when I reach the maximum number of customers in
                    my chosen tier?
                  </span>
                }
                key="4"
                className={styles.panel}
              >
                <p>
                  We understand you might have test accounts or proofs of
                  concept running with certain customers, so we won’t cut you
                  off if you surpass your limit. When that happens we’ll reach
                  out and work with you to move you to the next tier.
                </p>
              </Collapse.Panel>
              <Collapse.Panel
                header={
                  <span className={styles.panelTitle}>
                    We want to implement SAML, but don't have any active
                    customers who need it - do I still have to pay?
                  </span>
                }
                key="5"
                className={styles.panel}
              >
                <p>
                  Osso provides a{" "}
                  <a
                    href="https://demo.ossoapp.com"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    demo instance
                  </a>{" "}
                  that allows you to build and test your Osso integration
                  without needing to purchase a subscription. Once you have a
                  customer who needs SAML, you can purchase a subscription,
                  change some ENV variables and immediately start onboarding
                  customers.
                </p>
              </Collapse.Panel>
            </Collapse>
          </Col>
        </Row>
        <Row>
          <Col sm={24} md={{ span: 16, offset: 4 }} className={styles.features}>
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
              organization,{" "}
              <a href="mailto:hello@enterpriseoss.dev" target="_blank">
                get in touch
              </a>{" "}
              and let us know. We’re scrappy and we want your business.
            </p>
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

export default Pricing;
