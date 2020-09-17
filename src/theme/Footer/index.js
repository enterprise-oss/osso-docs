/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import { useMediaQuery } from 'react-responsive'

import screens from '../../utils/responsive';
import styles from './styles.module.css';
import { Form, Input, Button } from 'antd';

function Footer() {
  const isLargeScreen = useMediaQuery({ query: screens.large })


  return (
    <footer className={classnames('footer', styles.footer)}>
      <div className="container">
        <div className={styles.footerRow}>
          {isLargeScreen && (
            <div className={styles.footerCol}>
              <a href="mailto:hello@enterpriseoss.dev">hello@enterpriseoss.dev</a>
              <p>Osso by EnterpriseOSS, Inc.</p>
              <p>Brooklyn, NY</p>
            </div>
          )}
          <div className={styles.footerCol}>
            <img src={'/img/logo-alt.svg'} alt='osso logo' />
          </div>
          {isLargeScreen && (
            <div className={styles.footerCol}>
             <Form
              colon={false}
              hideRequiredMark
              name="email-list"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
             >
              <input type="hidden" name="form-name" value="email-list" />
              <Input.Group compact>
                <label>Enter your email to receive updates from Osso</label>
                <Input name="email" type="email" style={{ width: '220px' }} />
                <Button htmlType="submit">Submit</Button>
              </Input.Group>
             </Form>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
