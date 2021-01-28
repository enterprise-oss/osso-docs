import CloudPdfViewer from "@openbook/cloudpdf-viewer";
import useThemeContext from "@theme/hooks/useThemeContext";
import React, { useCallback, useEffect, useState } from "react";

import styles from "./styles.module.css";

export default function PdfViewer({ documentId }) {
  const [instance, setInstance] = useState(null);
  const { isDarkTheme } = useThemeContext();

  useEffect(() => {
    instance?.setDarkMode(isDarkTheme);
  }, [isDarkTheme]);

  const measuredRef = useCallback((node) => {
    if (node !== null && !instance) {
      CloudPdfViewer(
        {
          documentId: documentId,
          darkMode: isDarkTheme,
        },
        node
      ).then((instance) => {
        setInstance(instance);
      });
    }
  }, []);

  return <div className={styles.viewer} ref={measuredRef}></div>;
}