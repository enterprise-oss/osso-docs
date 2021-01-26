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
    >
      <AntLayout.Content
        className={classnames("container margin-vert--xl", styles.container)}
      >
        <Row>
          <Col sm={24} md={{ span: 16, offset: 4 }} className={styles.features}>
            <h3>
              {isLargeScreen && <span className={styles.titleMarker} />}
              About Osso
            </h3>
            <p>
            You've worked hard building your product. Your customers want SAML sign-on, but it’s complex and time-consuming to build and support. Osso was made so that you and your team can focus on the stuff you love, without getting bogged down by the details of SAML integration.
            </p>
          </Col>
        </Row>

        <Row>
          <Col sm={24} md={{ span: 16, offset: 4 }} className={styles.features}>
            <h3>
              {isLargeScreen && <span className={styles.titleMarker} />}
              About Us-so
            </h3>
            <p>
            After losing work due to the pandemic, we founded Osso with the goal of working together on something that could help other business owners as they grew their own companies. After a few months of user research, development time, and QA, we launched to help make SAML SSO more accessible to startups at all stages of growth. 
            </p>
            <p>
            We have led and delivered complex product launches for companies like WeWork, Clearbit, imgix, VaynerMedia, and Vistaprint. We’re also hopelessly addicted to side projects. 
            </p>            
          </Col>
        </Row>
        <Row gutter={[16, 48]}>
          <Col span={24} className={styles.plansTitle}>
            <h3>The team</h3>
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
              </Card>
            </Col>
          ))}
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
