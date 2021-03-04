import React from "react";

import styles from "./styles.module.css";

const Separator = () => (
  <svg width="100%" height="2px" className={styles.separator}>
    <line
      x1="0"
      x2="100%"
      strokeWidth="3"
      strokeDasharray="25"
      strokeDashoffset={-12.5}
    />
  </svg>
);

export default Separator;
