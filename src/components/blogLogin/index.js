import { OssoLogin, OssoProvider } from "@enterprise-oss/osso";
import { Button, Card, Form, Input } from "antd";
import React from "react";

import styles from "./styles.module.css";

const ButtonComponent = ({ type, ...props }) => (
  <Button type="primary" {...props} htmlType={type}>
    Sign In
  </Button>
);

const InputComponent = ({ onChange, label, ...inputProps }) => (
  <Form.Item label={label}>
    <Input
      onChange={(e) => onChange && onChange(e.target.value)} // Osso expects a value in change handlers rather than events
      {...inputProps}
    />
  </Form.Item>
);

const onSubmitPassword = (email, password) => {
  console.warn(
    `Submit a request to sign the user in to your server. Email: ${email}, Password: ${password}`
  );
  return Promise.resolve();
};

const submitSaml = (email) => {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
  const form = document.createElement("form");

  const tokenInput = document.createElement("input");
  tokenInput.value = csrfToken;
  tokenInput.name = "authenticity_token";

  const emailInput = document.createElement("input");
  emailInput.value = email;
  emailInput.name = "email";

  form.action = `/users/auth/osso`;
  form.hidden = true;
  form.method = "POST";

  form.appendChild(tokenInput);
  form.appendChild(emailInput);
  document.body.appendChild(form);

  return form.submit();
};

const BlogLogin = () => (
  <OssoProvider
    client={{
      baseUrl: "http://localhost:9292",
    }}
  >
    <Form layout="vertical" component="div">
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <h1>Please sign in</h1>
          <p>
            <small>You won&apos;t actually be able to sign in</small>
          </p>
          <OssoLogin
            containerClass={styles.loginForm}
            ButtonComponent={ButtonComponent}
            InputComponent={InputComponent}
            onSamlFound={submitSaml}
            onSubmitPassword={onSubmitPassword}
          />
        </div>
      </div>
    </Form>
  </OssoProvider>
);

export default BlogLogin;
