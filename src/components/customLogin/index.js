import BrowserOnly from "@docusaurus/BrowserOnly";
import { OssoProvider, useOssoLogin } from "@enterprise-oss/osso";
import React, { useState } from "react";

import styles from "./styles.module.css";

const CustomLogin = () => {
  const { providerExists, loading } = useOssoLogin();
  const [email, setEmail] = useState("");
  const [exists, setExists] = useState(false);

  const checkForProvider = async (email) => {
    setEmail(email);
    const exists = await providerExists(email.split("@")[1]);
    setExists(exists);
  };

  const emails = ["user@example.com", "user@password.com"];

  return (
    <>
      <div className={styles.container}>
        {emails.map((emailAddress) => (
          <button
            className={styles.button}
            key={emailAddress}
            onClick={() => checkForProvider(emailAddress)}
          >
            {emailAddress}
          </button>
        ))}
      </div>
      <p className={styles.message}>
        {email && exists && `Identity Provider exists for ${email}`}
        {!loading &&
          email &&
          !exists &&
          `Identity Provider not found for ${email}`}
      </p>
    </>
  );
};

const wrapped = () => (
  <BrowserOnly>
    {() => (
      <OssoProvider
        client={{
          baseUrl: "https://demo.ossoapp.com",
        }}
      >
        <CustomLogin />
      </OssoProvider>
    )}
  </BrowserOnly>
);

export default wrapped;
