import "./styles.css";

import CloudPdfViewer from "@openbook/cloudpdf-viewer";
import useThemeContext from "@theme/hooks/useThemeContext";
import React, { useCallback, useState } from "react";

export default function App() {
  const [instance, setInstance] = useState(null);
  const { isDarkTheme } = useThemeContext();

  const measuredRef = useCallback((node) => {
    if (node !== null && !instance) {
      CloudPdfViewer(
        {
          documentId: "eee2079d-b0b6-4267-9812-b6b9eadb9c60",
          darkMode: isDarkTheme,
        },
        node
      ).then((instance) => {
        setInstance(instance);
      });
    }
  }, []);

  return <div className="viewer" ref={measuredRef}></div>;
}
