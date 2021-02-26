import BrowserOnly from "@docusaurus/BrowserOnly";
import { useOssoFields } from "@enterprise-oss/osso";
import React from "react";

import styles from "./styles.module.css";

const SupportedProviders = () => {
  const { providers } = useOssoFields();

  return (
    <div className={styles.container}>
      {providers.map((provider) => (
        <img
          key={provider.value}
          src={provider.iconUrl}
          className={styles.image}
        />
      ))}
    </div>
  );
};

export default SupportedProviders;
