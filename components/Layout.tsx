import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import * as React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
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
      <footer>
        <h1 className={styles.runner}>
          <Link href="contact-me">Contact Me!</Link>
        </h1>
      </footer>
    </div>
  );
}
