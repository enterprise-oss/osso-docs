import { CheckCircleTwoTone } from "@ant-design/icons";
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

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export const plans = [
  {
    name: "PMF",
    price: "$99/mo",
    priceId: "osso_pmf",
    cta: "Start for free",
    copy:
      "If one of your customers is asking for SAML, this is your best option. Osso is a snap to integrate, and our monthly agreements give you the flexibility you need to scale up easily when business takes off. ",
    features: [
      <span key="0">
        Enables SAML SSO for <strong>up to 5 customers</strong>
      </span>,
      <span key="0">
        Pick this if: you’re just starting to sell to Enterprise
      </span>,
    ],
  },
  {
    name: "Series A",
    price: "$149/mo",
    priceId: "osso_pmf", // TODO
    cta: "Get started",
    copy:
      "Multiple requests for SAML SSO? This is the plan for you. Once you’ve integrated Osso, onboarding a dozen customers is easy, and with our Admin UI your Sales team can handle it themselves.",
    features: [
      <span key="0">
        Enables SAML SSO for <strong>up to 25 customers</strong>
      </span>,
      <span key="0">
        Pick this if: you’ve got customer demand and have had SAML in your
        backlog for too long
      </span>,
    ],
  },
  {
    name: "Unicorn",
    price: "$499/mo",
    priceId: "osso_pmf", // TODO
    cta: "Contact us",
    copy:
      "You might have patched together SAML yourself, but by now the overhead and onboarding are becoming a pain. Let our expertise and intuitive documentation help you close more deals with less fuss.",
    features: [
      <span key="0">
        Enables SAML SSO for <strong>up to 100 customers</strong>
      </span>,
      <span key="0">
        Pick this if: your current solution costs too much – in dollars,
        developer time, or support burden
      </span>,
    ],
  },
  {
    name: "Enterprise",
    price: "$10k+/year",
    priceId: "osso_pmf", // TODO
    cta: "Contact us",
    copy:
      "These days a lot of companies want to self-host certain critical services for a range of reasons. We’re here to help: we’ll work side by side with your dev team to design, build, and integrate the perfect Osso instance for your needs. ",
    features: [
      <span key="0">
        Enables SAML SSO for <strong>ALL of your customers</strong>
      </span>,
      <span key="0">
        Pick this if: you want a bespoke solution that’s hosted on your own
        infrastructure
      </span>,
    ],
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const isLargeScreen = useMediaQuery({ query: screens.large });
  const [chosenPlan, setChosenPlan] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [form] = Form.useForm();
  const domForm = useRef();

  const onCheckout = async (plan) => {
    if (plan.name === "Enterprise") {
      return setChosenPlan(plan.name);
    }

    const response = await fetch("/.netlify/functions/create-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plan),
    }).then((res) => res.json());

    const stripe = Stripe(response.publishableKey);
    const { error } = await stripe.redirectToCheckout({
      sessionId: response.sessionId,
    });

    if (error) {
      console.error(error);
    }
  };

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
                onClick={() => onCheckout(plan)}
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
                  type="primary"
                  onClick={() => onCheckout(plan)}
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
        <Modal
          visible={Boolean(chosenPlan)}
          title={submitted ? "Success!" : "Coming Soon"}
          width={640}
          onCancel={() => setChosenPlan("")}
          okText={submitted ? "Close" : "Submit"}
          onOk={() => {
            if (submitted) {
              return setChosenPlan("");
            }

            form
              .validateFields()
              .then((values) => {
                window.posthog.identify(values.email);
                const url = domForm.current.action;
                return fetch("/", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body: encode({
                    ...values,
                    "form-name": "plan-interest",
                    chosenPlan,
                  }),
                });
              })
              .then((response) => {
                if (response.ok) {
                  setSubmitted(true);
                }
              })
              .catch((info) => {
                console.log("Validate Failed:", info);
              });
          }}
        >
          {submitted ? (
            <div className={styles.success}>
              <CheckCircleTwoTone
                twoToneColor="#4E61A5"
                style={{ fontSize: 96, marginBottom: 22 }}
              />
              <h3>We’ve received your info</h3>
              <p>Thanks for your interest in Osso, we’ll be in touch soon.</p>
            </div>
          ) : (
            <>
              <h3>Thanks for your interest in our {chosenPlan} plan! </h3>
              <p>
                We’re hard at work building out our self-service offering and
                will keep you in the loop as soon as it’s ready. Give us your
                email (we won’t share it with anybody else, ever) and you’ll be
                the first to know when it’s available.
              </p>
              <Form
                component="div"
                hideRequiredMark
                form={form}
                layout="vertical"
                validateTrigger="submit"
              >
                <form
                  ref={domForm}
                  name="plan-interest"
                  method="POST"
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

                  <input name="form-name" type="hidden" value="plan-interest" />

                  <Divider />
                  <p>
                    If you’d like to be considered for our beta cohort, tell us
                    a bit more about your company, your tech stack, and where
                    SSO fits into your roadmap and we’ll be in touch. (Optional)
                  </p>
                  <Form.Item name="about">
                    <Input.TextArea placeholder="My company is..." />
                  </Form.Item>
                </form>
              </Form>
            </>
          )}
        </Modal>
      </AntLayout.Content>
    </Layout>
  );
}

export default Home;
