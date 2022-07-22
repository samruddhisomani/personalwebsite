import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Samruddhi Somani</title>
        <meta name="description" content="Learn more about Samruddhi Somani." />
      </Head>

      <header>
        <h1 className={styles.title}>Samruddhi Somani</h1>
      </header>
      {/*       <nav>
        <ul>
          <li>Résumé</li>
          <li>Portfolio</li>
        </ul>
      </nav> */}
      <main className={styles.main}>
        <div className={styles.content}>
          <p>
            As the world goes digital, data abounds, and along with it, the need
            for data storytellers. I have six years of experience using a
            variety of tools and techniques to analyze datasets of all sizes and
            surface data-driven insights and concrete actionable
            recommendations. My professional experience across industries,
            departments, and company sizes has honed my ability to quickly skill
            up and deliver tangible value.
          </p>
          <p>
            I have used tools like Python, R, SQL, JavaScript, and Tableau and
            techniques like A/B testing, clustering, regression analysis, and
            time-series forecasting to derive analyses that were shared with
            stakeholders across cross-functional teams with diverse backgrounds.
            I have also professionally built automatically updating daily
            dashboards and reports, streamlined operational processes across
            different teams, and designed efficient algorithms to optimize
            business KPIs. While I currently work with digital marketing data, I
            have worked with CRM data, medical records, and financial data in
            the past.
          </p>

          <div className={styles.explore}>
            <a href="https://www.linkedin.com/in/samruddhisomani/">
              <button className={styles.card}>Find me on LinkedIn.</button>
            </a>
            <a href="/Samruddhi Somani Resume.pdf">
              <button className={styles.card}>Check out my résumé. </button>
            </a>
          </div>
        </div>
        {/*
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      {/*      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
