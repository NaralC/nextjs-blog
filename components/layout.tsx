import styles from "./layout.module.css";

export default function Layout({ children }: { children: JSX.Element[] }) {
  return <div className={styles.container}>{children}</div>;
}
