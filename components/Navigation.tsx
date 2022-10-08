import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Navigation() {
  return (
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
  );
}
