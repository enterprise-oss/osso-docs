/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Footer() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { themeConfig = {} } = siteConfig;
  const { footer } = themeConfig;

  const { copyright, links = [], logo = {} } = footer || {};
  const logoUrl = useBaseUrl(logo.src);

  return (
    <footer className={classnames('footer', styles.footer)}>
      <div className="container">
        <div className={styles.footerRow}>
          <div className={styles.footerCol}>
            <p>Osso by EnterpriseOSS</p>
            <p>Brooklyn, NY 11216</p>
            <a href="mailto:hello@enterpriseoss.dev">hello@enterpriseoss.dev</a>
          </div>
          <div className={styles.footerCol}>
            <img src={'img/logo-alt.svg'} alt='osso logo' />
          </div>
          <div className={styles.footerCol}>
            <a>F.A.Q</a>
            <a>License</a>
            <a>Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
