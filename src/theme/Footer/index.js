/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import classnames from "classnames";
import React from "react";

import Logo from "../../components/svg/logo";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={classnames("footer", styles.footer)}>
      <div className={styles.footerContent}>
        <Logo width={56} />
        <div>
          <h3>Connect</h3>
          <ul>
            <li>
              <Link to={useBaseUrl("/docs/quick-start")}>Github</Link>
            </li>
            <li>
              <Link to={useBaseUrl("/docs/quick-start")}>Discord</Link>
            </li>
            <li>
              <Link to={useBaseUrl("/docs/quick-start")}>Twitter</Link>
            </li>
            <li>
              <Link to={useBaseUrl("/docs/quick-start")}>LinkedIn</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Docs</h3>
          <ul>
            <li>
              <Link to={useBaseUrl("/docs/quick-start")}>Quick Start</Link>
            </li>
            <li>
              <Link to={useBaseUrl("/docs/quick-start")}>Deploy</Link>
            </li>
            <li>
              <Link to={useBaseUrl("/docs/quick-start")}>Configure</Link>
            </li>
            <li>
              <Link to={useBaseUrl("/docs/quick-start")}>Consume</Link>
            </li>
            <li>
              <Link to={useBaseUrl("/docs/quick-start")}>Use</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Learn</h3>
          <ul>
            <li>
              <Link to={useBaseUrl("/docs/quick-start")}>SAML vs. OAuth</Link>
            </li>
            <li>
              <Link to={useBaseUrl("/docs/quick-start")}>SAML SSO Rails</Link>
            </li>
            <li>
              <Link to={useBaseUrl("/docs/quick-start")}>SAML SSO NodeJS</Link>
            </li>
            <li>
              <Link to={useBaseUrl("/docs/quick-start")}>SAML SSO Clojure</Link>
            </li>
            <li>
              <Link to={useBaseUrl("/docs/quick-start")}>SAML SSO Python</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul>
            <li>
              <a href="/legal/cookie">Cookie Policy</a>
            </li>
            <li>
              <a href="/legal/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/legal/terms-conditions">Legal Terms</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
