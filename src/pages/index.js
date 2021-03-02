import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import { Button } from "antd";
import classnames from "classnames";
import React from "react";
import { useMediaQuery } from "react-responsive";

import TitleWithMarker from "../components/titleWithMarker/index";
import screens from "../utils/responsive";
import styles from "./styles.module.css";

function Home() {
  const isLargeScreen = useMediaQuery({ query: screens.large });

  return <Layout title="Home" noNavbar></Layout>;
}

export default Home;
