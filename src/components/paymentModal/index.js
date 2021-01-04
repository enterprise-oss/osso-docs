import { ShoppingCartOutlined } from "@ant-design/icons";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Checkbox, Form, Input, Modal, Spin } from "antd";
import classNames from "classnames";
import React, { useState } from "react";

import styles from "./styles.module.less";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      iconColor: "#4E61A5",
      color: "#595959",
      fontWeight: 400,
      fontFamily: "DM Sans, Helvetica, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#595959",
      },
      "::placeholder": {
        color: "#BFBFBF",
      },
    },
    invalid: {
      iconColor: "#E52019",
      color: "#E52019",
    },
  },
};

export default function paymentModal({ open, onClose, plan }) {
  const stripe = useStripe();
  const elements = useElements();
  const [focused, setFocus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [customerId, setCustomerId] = useState("");
  const [separateBilling, setSeparateBilling] = useState(false);
  const [error, setError] = useState("");
  const [form] = Form.useForm();
  const { name, priceId } = plan || {};

  const onSubmitForm = async () => {
    if (customerId) {
      setLoading(true);

      return stripe
        .createPaymentMethod({
          type: "card",
          card: elements.getElement(CardElement),
        })
        .then(({ error, paymentMethod }) => {
          if (error) {
            throw error;
          }
          return createSubscription(paymentMethod.id, form.values);
        })
        .then((data) => {
          window.location = "/success?plan=" + encodeURIComponent(name);
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
          setLoading(false);
        });
    } else {
      form
        .validateFields()
        .then(createCustomer)
        .catch((info) => {
          console.log("Validate Failed:", info);
        });
    }
  };

  const createCustomer = async (values) => {
    setLoading(true);
    fetch("/.netlify/functions/create-customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCustomerId(data.customer.id);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert("creates cut", err);
      });
  };

  const createSubscription = async (paymentMethodId, params) => {
    const values = await form.validateFields();
    fetch("/.netlify/functions/create-subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerId, priceId, paymentMethodId, ...values }),
    }).catch((err) => {
      console.warn("create sub error", err);
    });
  };

  return (
    <Modal
      visible={open}
      title={`Checkout - Step ${customerId ? 2 : 1} of 2`}
      width={640}
      onCancel={() => (customerId ? setCustomerId("") : onClose())}
      okText={customerId ? "Complete payment" : "Next"}
      cancelText={customerId ? "Back" : "Cancel"}
      confirmLoading={loading}
      okButtonProps={{
        form: "payment-form",
        key: "submit",
        htmlType: "submit",
      }}
    >
      <Spin spinning={loading}>
        <div className={styles.productCallout}>
          <ShoppingCartOutlined />
          <span>Subscription: {plan.name}</span>
          <span>{plan.price}</span>
        </div>
        {customerId ? (
          <Form
            error={error}
            id="payment-form"
            onFinish={onSubmitForm}
            preserve={false}
            hideRequiredMark
            form={form}
            layout="vertical"
            validateTrigger="submit"
            initialValues={{
              subdomain: form
                .getFieldValue("email")
                ?.match(/([(@)])(?<hostname>.*)[(\.)]/)?.groups?.hostname,
            }}
          >
            <Form.Item
              label="Company name"
              name="company"
              rules={[
                {
                  required: true,
                  message: "Please add your company name",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              extra="This is where your Osso instance will live; once it’s deployed, you can set a custom domain."
              label="Subdomain"
              name="subdomain"
              rules={[
                {
                  required: true,
                  message: "Please input a subdomain",
                },
              ]}
            >
              <Input suffix=".ossoapp.io" />
            </Form.Item>
            <Form.Item label="Payment details">
              <div
                className={classNames(styles.stripeContainer, {
                  [styles.focused]: focused,
                })}
              >
                <CardElement
                  onFocus={() => setFocus(true)}
                  onBlur={() => setFocus(false)}
                  options={CARD_ELEMENT_OPTIONS}
                />
              </div>
            </Form.Item>
            <Form.Item
              valuePropName="checked"
              name="terms"
              rules={[
                {
                  required: true,
                  message: "Please agree to Osso's Terms & Conditions",
                },
              ]}
            >
              <Checkbox name="terms">
                I agree to Osso’s{" "}
                <a href="/legal/terms-conditions" target="_blank">
                  Terms & Conditions
                </a>
                .
              </Checkbox>
            </Form.Item>
            {error}
          </Form>
        ) : (
          <>
            <Form
              error={error}
              id="payment-form"
              onFinish={onSubmitForm}
              preserve={false}
              hideRequiredMark
              form={form}
              layout="vertical"
              validateTrigger="submit"
            >
              <Form.Item
                label="Your name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please add your name",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Work email"
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
              <Form.Item valuePropName="checked">
                <Checkbox
                  checked={separateBilling}
                  onChange={(event) =>
                    setSeparateBilling(event?.target?.checked)
                  }
                >
                  Send billing-related emails to a different address
                </Checkbox>
              </Form.Item>
              <Form.Item
                hidden={!separateBilling}
                label="Billing email"
                name="billingEmail"
                type="email"
                rules={[
                  {
                    type: "email",
                    required: separateBilling,
                    message: "Please add a billing email",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Form>
          </>
        )}
      </Spin>
    </Modal>
  );
}
