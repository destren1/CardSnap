import { FC } from "react";
import styles from "./app-header.module.scss";

export const AppHeader: FC = () => (
  <header className={styles.header}>
    <h1 className={styles.header__title}>CardSnap</h1>
  </header>
);
