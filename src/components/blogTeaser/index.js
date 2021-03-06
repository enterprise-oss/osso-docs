import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";

import styles from "./styles.module.css";

const BlogTeaser = ({ title, preview, authorImg, path }) => {
  return (
    <div className={styles.root}>
      <div className={styles.titleRow}>
        <img alt="author-avatar" src={authorImg} className={styles.avatar} />
        <span>{title}</span>
      </div>
      <p>{preview}</p>
      <Link to={useBaseUrl(path)} className={styles.readMore}>
        Read more...
      </Link>
    </div>
  );
};

export default BlogTeaser;
