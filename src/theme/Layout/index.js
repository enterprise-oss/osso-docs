/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import "@enterprise-oss/ant-theme";
import "./styles.css";

import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import AnnouncementBar from "@theme/AnnouncementBar";
import Footer from "@theme/Footer";
import Navbar from "@theme/Navbar";
import ThemeProvider from "@theme/ThemeProvider";
import UserPreferencesProvider from "@theme/UserPreferencesProvider";
import React from "react";

function Providers({ children }) {
  return (
    <ThemeProvider>
      <UserPreferencesProvider>{children}</UserPreferencesProvider>
    </ThemeProvider>
  );
}

function Layout(props) {
  const { siteConfig = {} } = useDocusaurusContext();
  const {
    favicon,
    title: siteTitle,
    themeConfig: { image: defaultImage },
    url: siteUrl,
  } = siteConfig;
  const {
    children,
    title,
    noFooter,
    description,
    image,
    keywords,
    permalink,
  } = props;
  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaImage = image || defaultImage;
  const metaImageUrl = useBaseUrl(metaImage, {
    absolute: true,
  });
  const faviconUrl = useBaseUrl(favicon);
  return (
    <Providers>
      <Head>
        {/* TODO: Do not assume that it is in english language */}
        <html lang="en" />

        {metaTitle && <title>{metaTitle}</title>}
        {metaTitle && <meta property="og:title" content={metaTitle} />}
        {favicon && <link rel="shortcut icon" href={faviconUrl} />}
        {description && <meta name="description" content={description} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {keywords && keywords.length && (
          <meta name="keywords" content={keywords.join(",")} />
        )}
        {metaImage && <meta property="og:image" content={metaImageUrl} />}
        {metaImage && <meta property="twitter:image" content={metaImageUrl} />}
        {metaImage && (
          <meta name="twitter:image:alt" content={`Image for ${metaTitle}`} />
        )}
        {permalink && <meta property="og:url" content={siteUrl + permalink} />}
        {permalink && <link rel="canonical" href={siteUrl + permalink} />}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <AnnouncementBar />
      <Navbar />
      <div className="main-wrapper">{children}</div>
      {!noFooter && <Footer />}
    </Providers>
  );
}

export default Layout;
