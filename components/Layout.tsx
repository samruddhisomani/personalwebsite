import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Samruddhi Somani</title>
        <meta name="description" content="Learn more about Samruddhi Somani." />
      </Head>

      <header>
        <h1 className={styles.title}>Samruddhi Somani</h1>
      </header>

      <main> {children}</main>
    </div>
  );
}
