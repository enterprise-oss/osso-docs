import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useMediaQuery } from 'react-responsive'
import styles from './styles.module.css';
import screens from '../../utils/responsive';
import {
  CheckCircleFilled,
} from '@ant-design/icons';
import { Button, Card, Col, Row } from 'antd'

const plans = [
  { 
    name: 'Community',
    price: "$0",
    className: '',
    cta: 'Learn More',
    features: [
      "Deploy on your own infrastructure",
      "Community support via community.ossoapp.com",
      "Customized onboarding docs for new customers",
      "Admin UI to manage Enterprise SSO users",
    ],
    styles: {
    }
  },
  { 
    name: 'Business',
    price: "$199/mo",
    className: 'businessCard',
    cta: 'Learn More',
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
    }
  },
  { 
    name: 'Enterprise',
    price: "Custom",
    className: 'enterpriseCard',
    cta: 'Learn More',
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
      color: 'white',
    }
  }
]
function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const isLargeScreen = useMediaQuery({ query: screens.large })

  return (
    <Layout
      title={siteConfig.title}
      description="Free, open-source software for adding SAML based SSO to your application">
          <div className="container margin-vert--xl ">
            <Row gutter={[16, 72]}>
              <Col className={styles.features}>
                <h3>
                  {isLargeScreen && <span className={styles.titleMarker} />}
                  Osso is for everybody
                </h3>
                <p>
                  Osso is and will remain free, open source software that anyone can use to authenticate users to their app with SSO. 
                  <br/><br/>
                  If you want to reduce the integration load for your engineering team, or appreciate the peace of mind 
                  that comes with personalized support, we're happy to offer private managed instances on a subscription basis. 
                  We can also consult with your engineering team and help train your sales and customer success teams.
                  If that sounds interesting, read on.  
                </p>
              </Col>
            </Row>
            <Row gutter={[16, 48]}>
              <Col className={styles.features}>
                <h3>
                  {isLargeScreen && <span className={styles.titleMarker} />}
                  Our plans
                </h3>
              </Col>
            </Row>
            <Row gutter={[24, 72]}>
              { plans.map((plan) => (
                <Col sm={24} lg={8}>
                  <Card 
                    className={[styles.planCard, styles[plan.className]]}
                    title={
                      <div className={styles.planHeader}>
                        <span>{plan.name}</span>
                        <span>{plan.price}</span>
                      </div>
                    }
                    bodyStyle={{
                      display: 'flex',
                      flexGrow: "1",
                      flexDirection: 'column',
                      ...plan.styles,
                    }}
                  >
                    { plan.features.map((feature) => (
                      <p className={styles.planFeature}>
                        <CheckCircleFilled style={{marginRight: 4, color: "#4E61A5"}}/>
                        {feature}
                      </p>
                    ))}

                    <Button style={{marginTop: 'auto', marginBottom: 12,}}>{plan.cta}</Button>
                  </Card>
                </Col>
              ))}
            </Row>
              <Row>
                <div className={classnames('col', styles.features)}>
                  <h3>
                    {isLargeScreen && <span className={styles.titleMarker} />}
                    Not ready to commit?
                  </h3>
                  <p>
                    If we’re missing something that could be a big help to you or your organization, get in touch and let us know. We’re scrappy and we want your business. 

                    If you’d like to follow along as we release new features, give us your email address and we’ll keep you in the loop; no SPAM and no sharing of your information with any other entity.
                  </p>
                </div>
              </Row>
            </div>
    </Layout >
  );
}

export default Home;
