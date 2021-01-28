import CloudPdfViewer from "@openbook/cloudpdf-viewer";
import useThemeContext from "@theme/hooks/useThemeContext";
import React, { useEffect, useRef } from "react";

import styles from "./styles.module.css";

export default function PdfViewer({ documentId }) {
  const { isDarkTheme } = useThemeContext();

  const viewer = useRef(null);

  useEffect(() => {
    CloudPdfViewer(
      {
        documentId,
        darkMode: isDarkTheme,
      },
      viewer.current
    ).then((instance) => {});
  }, [isDarkTheme]);

  return <div key={isDarkTheme} className={styles.viewer} ref={viewer}></div>;
}
