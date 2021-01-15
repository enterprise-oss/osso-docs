/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from "@docusaurus/Link";
import { Button, Form, Input } from "antd";
import classnames from "classnames";
import React from "react";
import { useMediaQuery } from "react-responsive";

import screens from "../../utils/responsive";
import styles from "./styles.module.css";

function Footer() {
  const isLargeScreen = useMediaQuery({ query: screens.large });

  return (
    <footer className={classnames("footer", styles.footer)}>
      <div className={classnames("container", styles.container)}>
        <div className={styles.footerRow}>
          {isLargeScreen && (
            <div className={styles.footerCol}>
              <a href="mailto:hello@enterpriseoss.dev">
                hello@enterpriseoss.dev
              </a>
              <p>Osso © EnterpriseOSS, Inc.</p>
              <p>Brooklyn, NY</p>
            </div>
          )}
          {isLargeScreen && (
            <div className={styles.footerCol}>
              <form
                name="email-list"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="email-list" />
                <label htmlFor="footer-email">
                  Enter your email to receive updates from Osso
                </label>
                <Input.Group>
                  <Input
                    id="footer-email"
                    name="email"
                    type="email"
                    style={{ width: "220px" }}
                  />
                  <Button htmlType="submit">Submit</Button>
                </Input.Group>
              </form>
            </div>
          )}
          <div className={styles.footerCol}>
            {false && <Link to="/faq">F.A.Q.</Link>}
            <a href="/legal/cookie">Cookie Policy</a>
            <a href="/legal/privacy">Privacy Policy</a>
            <a href="/legal/terms-conditions">Legal Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
