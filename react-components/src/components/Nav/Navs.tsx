import React from "react";
import { NavTabsTitle } from "../../utils/types";
import { NavTab } from "./NavTab";

import styles from './NavTab.module.css';
import { GridContainer } from "../Container/GridContainer";

/*
    Navs:
 */

export const Navs = (
  () => (
    <nav className={styles.header}>
      <GridContainer fullHeight gridTemplateColumns={'repeat(auto-fill, auto)'}>
      {Object.values(NavTabsTitle).map((title: string) => <NavTab title={title} />)}
      </GridContainer>
    </nav>
  )
);