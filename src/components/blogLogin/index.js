import BrowserOnly from "@docusaurus/BrowserOnly";
import { OssoLogin, OssoProvider } from "@enterprise-oss/osso";
import { Button, Form, Input, Spin } from "antd";
import React, { useState } from "react";

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

const BlogLogin = () => {
  const [msg, setMsg] = useState(
    "You won't actually be able to sign in, but user@example.com will be for SAML."
  );

  return (
    <OssoProvider
      client={{
        baseUrl: "https://demo.ossoapp.com",
      }}
    >
      <Form layout="vertical" component="div">
        <div className={styles.container}>
          <div className={styles.mainContent}>
            <p>{msg}</p>
            <OssoLogin
              containerClass={styles.loginForm}
              ButtonComponent={ButtonComponent}
              InputComponent={InputComponent}
              onSamlFound={(email) => {
                setMsg(
                  `${email} submitted and SAML tenant found - POST to your server to kick off Osso auth.`
                );
                return Promise.resolve();
              }}
              onSubmitPassword={(email, password) => {
                setMsg(
                  `Password submitted - sign the user in with Email: ${email}, Password: ${password}`
                );
                return Promise.resolve();
              }}
            />
          </div>
        </div>
      </Form>
    </OssoProvider>
  );
};

export default BlogLogin;
