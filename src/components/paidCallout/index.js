import { SmileTwoTone, SoundTwoTone } from "@ant-design/icons";
import Link from "@docusaurus/Link";
import React from "react";

import styles from "./styles.module.less";

export default function paidCallout({ message }) {
  return (
    <div className={styles.paidRoot}>
      <div className={styles.icons}>
        <SmileTwoTone twoToneColor="#4E61A5" />
        <SoundTwoTone twoToneColor="#4E61A5" />
      </div>
      <span className={styles.message}>
        {message || (
          <span>
            The content of this article applies to the open source version of
            Osso and is not relevant to our{" "}
            <Link to="/pricing">paid plans</Link>. If you&apos;re already an
            Osso customer,{" "}
            <Link to="/docs/configure/overview">
              skip ahead to Configuration
            </Link>
            .
          </span>
        )}
      </span>
    </div>
  );
}
