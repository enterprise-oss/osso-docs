import React, { useState } from "react";

import styles from "./styles.module.css";

const Separator = ({ strokeOffset }) => {
  console.log(strokeOffset);

  return (
    <svg width="100%" height="2px" className={styles.separator}>
      <line
        x1="0"
        x2="100%"
        strokeWidth="3"
        strokeDasharray="25"
        strokeDashoffset={strokeOffset}
      />
    </svg>
  );
};

export default Separator;
