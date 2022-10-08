import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div>
        <p>
          As the world goes digital, data abounds, and along with it, the need
          for data storytellers. I have six years of experience using a variety
          of tools and techniques to analyze datasets of all sizes and surface
          data-driven insights and concrete actionable recommendations. My
          professional experience across industries, departments, and company
          sizes has honed my ability to quickly skill up and deliver tangible
          value.
        </p>
        <p>
          I have used tools like Python, R, SQL, JavaScript, and Tableau and
          techniques like A/B testing, clustering, regression analysis, and
          time-series forecasting to derive analyses that were shared with
          stakeholders across cross-functional teams with diverse backgrounds. I
          have also professionally built automatically updating daily dashboards
          and reports, streamlined operational processes across different teams,
          and designed efficient algorithms to optimize business KPIs. While I
          currently work with digital marketing data, I have worked with CRM
          data, medical records, and financial data in the past.
        </p>
      </div>
    </main>
  );
};

export default Home;
