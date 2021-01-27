import React from "react";
import { useMediaQuery } from "react-responsive";

import screens from "../../utils/responsive";
import styles from "./styles.module.css";

export default function TitleWithMarker({ title }) {
  const isLargeScreen = useMediaQuery({ query: screens.large });

  return (
    <h3 className={styles.title}>
      {isLargeScreen && <span className={styles.titleMarker} />}
      {title}
    </h3>
  );
}
