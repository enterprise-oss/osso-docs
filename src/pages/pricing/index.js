import { CheckCircleFilled } from "@ant-design/icons";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
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
import styles from "./styles.module.css";

const plans = [
  {
    name: "Community",
    price: "$0",
    className: "",
    cta: "Start for free",
    features: [
      "Deploy on your own infrastructure",
      "Community support via community.ossoapp.com",
      "Customized onboarding docs for new customers",
      "Admin UI to manage Enterprise SSO users",
    ],
    styles: {
      borderRadius: 4,
    },
    titleStyles: {
      borderRadius: "4px 4px 0 0 ",
    },
    markerColor: "#4E61A5",
  },
  {
    name: "Business",
    price: "$249/mo",
    className: "businessCard",
    cta: "Get started",
    features: [
      "Everything in the Community plan",
      "Quick start: deploy on our infrastructure",
      "Email support",
      "Regular updates",
      "Up to 5 Enterprise accounts",
      "Custom sub-domain: YOURCO.ossoapp.io",
    ],
    styles: {
      borderColor: "#4E61A5",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
      borderRadius: 4,
    },
    titleStyles: {
      borderRadius: "4px 4px 0 0 ",
    },
    markerColor: "#4E61A5",
  },
  {
    name: "Enterprise",
    price: "Custom",
    className: "enterpriseCard",
    cta: "Contact us",
    features: [
      "Everything in the Business plan",
      "Video & phone support",
      "Unlimited Enterprise accounts",
      "Bespoke middleware for all necessary integrations",
      "Custom domain",
      "Hands-on training sessions for your sales & success teams",
      "White label customer onboarding & support",
      "Ops integrations",
      "Service level agreements",
    ],
    styles: {
      backgroundColor: "#4E61A5",
      color: "white",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
      borderRadius: 4,
    },
    titleStyles: {
      color: "white",
      borderRadius: "4px 4px 0 0 ",
    },
    markerColor: "white",
  },
];
function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const isLargeScreen = useMediaQuery({ query: screens.large });
  const [chosenPlan, setChosenPlan] = useState("");
  const [form] = Form.useForm();
  const domForm = useRef();

  return (
    <Layout
      title={siteConfig.title}
      description="Free, open-source software for adding SAML based SSO to your application"
    >
      <AntLayout.Content className="container margin-vert--xl ">
        <Row gutter={[16, 72]}>
          <Col sm={24} md={{ span: 20, offset: 2 }} className={styles.features}>
            <h3>
              {isLargeScreen && <span className={styles.titleMarker} />}
              Osso is for everybody
            </h3>
            <p>
              Osso is and will remain free, open source software that anyone can
              use to authenticate users to their app with SSO.
              <br />
              <br />
              If you want to reduce the integration load for your engineering
              team, or appreciate the peace of mind that comes with personalized
              support, we&apos;re happy to offer private managed instances on a
              subscription basis. We can also consult with your engineering team
              and help train your sales and customer success teams. If that
              sounds interesting, read on.
            </p>
          </Col>
        </Row>
        <Row gutter={[16, 48]}>
          <Col sm={24} md={{ span: 20, offset: 2 }} className={styles.features}>
            <h3>
              {isLargeScreen && <span className={styles.titleMarker} />}
              Our plans
            </h3>
          </Col>
        </Row>
        <Row gutter={[24, 72]}>
          {plans.map((plan) => (
            <Col key={plan.name} sm={24} lg={8}>
              <Card
                className={[styles.planCard, styles[plan.className]]}
                title={
                  <div className={styles.planHeader}>
                    <span>{plan.name}</span>
                    <span>{plan.price}</span>
                  </div>
                }
                style={plan.styles}
                headStyle={plan.titleStyles}
                bodyStyle={{
                  display: "flex",
                  flexGrow: "1",
                  flexDirection: "column",
                  ...plan.bodyStyles,
                }}
              >
                <div className={styles.featureList}>
                  {plan.features.map((feature, index) => (
                    <p className={styles.planFeature} key={index}>
                      <CheckCircleFilled
                        className={styles.planFeatureMarker}
                        style={{ color: plan.markerColor }}
                      />
                      {feature}
                    </p>
                  ))}
                </div>

                <Button
                  onClick={
                    plan.name !== "Community" &&
                    (() => setChosenPlan(plan.name))
                  }
                  href={
                    plan.name === "Community"
                      ? useBaseUrl("docs/what-is-saml")
                      : undefined
                  }
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
              Not ready to commit?
            </h3>
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
          </Col>
        </Row>
        <Modal
          visible={Boolean(chosenPlan)}
          title="Coming Soon"
          width={640}
          onCancel={() => setChosenPlan("")}
          onOk={() => {
            form
              .validateFields()
              .then((values) => {
                form.resetFields();
                form.submit();
              })
              .catch((info) => {
                console.log("Validate Failed:", info);
              });
          }}
        >
          <h3>Thanks for your interest in our {chosenPlan} plan! </h3>
          <p>
            We’re hard at work building out our self-service offering and will
            keep you in the loop as soon as it’s ready. Give us your email (we
            won’t share it with anybody else, ever) and you’ll be the first to
            know when it’s available.
          </p>
          <Form
            ref={domForm}
            hideRequiredMark
            form={form}
            layout="vertical"
            validateTrigger="submit"
            name="plan-interest"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <Form.Item
              label="Email"
              name="email"
              type="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please add your work email",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <input type="hidden" name="form-name" value="plan-interest" />
            <input type="hidden" name="plan" value={chosenPlan} />

            <Divider />
            <p>
              If you’d like to be considered for our beta cohort, tell us a bit
              more about your company, your tech stack, and where SSO fits into
              your roadmap and we’ll be in touch. (Optional)
            </p>
            <Form.Item>
              <Input.TextArea placeholder="My company is..." />
            </Form.Item>
          </Form>
        </Modal>
      </AntLayout.Content>
    </Layout>
  );
}

export default Home;
