import { CheckCircleTwoTone } from "@ant-design/icons";
import { Divider, Form, Input, Modal } from "antd";
import React, { useRef, useState } from "react";

const styles = {
  success: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
};

export default function enterpriseModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form] = Form.useForm();
  const domForm = useRef();

  return (
    <Modal
      visible={open}
      title={submitted ? "Success!" : "Coming Soon"}
      width={640}
      onCancel={onClose}
      okText={submitted ? "Close" : "Submit"}
      onOk={() => {
        if (submitted) {
          return onClose();
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
        <div style={styles.success}>
          <CheckCircleTwoTone
            twoToneColor="#4E61A5"
            style={{ fontSize: 96, marginBottom: 22 }}
          />
          <h3>We’ve received your info</h3>
          <p>Thanks for your interest in Osso, we’ll be in touch soon.</p>
        </div>
      ) : (
        <>
          <h3>Thanks for your interest in Osso! </h3>
          <p>
            We recognize that not every firm can just buy software off the shelf
            and we&apos;re excited to work with larger organizations in a more
            consultative manner. We can help you plan and execute a SAML SSO
            rollout across your entire company, tailoring Osso to your specific
            needs.
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
                Feel free to tell us a bit more about your company, your tech
                stack, and where SSO fits into your roadmap and we’ll be in
                touch. (Optional)
              </p>
              <Form.Item name="about">
                <Input.TextArea placeholder="My company is..." />
              </Form.Item>
            </form>
          </Form>
        </>
      )}
    </Modal>
  );
}
