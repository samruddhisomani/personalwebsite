import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <Head>
        <title>Samruddhi Somani</title>
        <meta
          name="description"
          content="Learn more about my background, skills, and experiences. Or contact me about potential new projects or opportunities."
        />
      </Head>
      <header>
        <h1 className={styles.runner}>
          <Link href="/"> Samruddhi Somani</Link>
        </h1>
      </header>
    </>
  );
}
