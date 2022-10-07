import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

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
      <nav>
        <ul className={styles.navigation}>
          <li>
            <a href="https://www.linkedin.com/in/samruddhisomani/">LinkedIn</a>
          </li>
          <li>
            <a href="/Samruddhi Somani Resume.pdf">Resume</a>
          </li>
          <li>
            <Link href="career-journey">Career Journey</Link>
          </li>
          <li>
            <Link href="skills-and-wins">Skills and Wins</Link>
          </li>
        </ul>
      </nav>

      <main> {children}</main>
    </div>
  );
}
