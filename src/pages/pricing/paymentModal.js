import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Form, Input, Modal, Spin } from "antd";
import React, { useState } from "react";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export default function paymentModal({
  open,
  onClose,
  plan: { name, priceId },
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [customerId, setCustomerId] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form] = Form.useForm();

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
          return createSubscription(paymentMethod.id);
        })
        .then((data) => {
          window.location = "/success?plan=" + encodeURIComponent(name);
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
          setLoading(false);
        });
    }

    form
      .validateFields()
      .then(createCustomer)
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
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

  const createSubscription = async (paymentMethodId) => {
    fetch("/.netlify/functions/create-subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerId, priceId, paymentMethodId }),
    })
      .then((res) => {
        console.warn("create sub success", res);
      })
      .catch((err) => {
        console.warn("create sub error", err);
      });
  };

  return (
    <Modal
      visible={open}
      title={name}
      width={640}
      onCancel={onClose}
      okText="Submit"
      onOk={onSubmitForm}
      confirmLoading={loading}
      okButtonProps={{
        form: "payment-form",
        key: "submit",
        htmlType: "submit",
      }}
    >
      <Spin spinning={loading}>
        {customerId ? (
          <>
            <CardElement options={CARD_ELEMENT_OPTIONS} />
            {error}
          </>
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
            </Form>
          </>
        )}
      </Spin>
    </Modal>
  );
}
