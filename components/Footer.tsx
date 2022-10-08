import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  console.log(router.pathname);
  if (router.pathname === "/contact-me") {
    return (
      <footer>
        <h1
          className={[
            styles.runner,
            styles.footer,
            styles.contactMeFooter,
          ].join(" ")}
        >
          Looking forward to hearing from you!
        </h1>
      </footer>
    );
  } else {
    return (
      <footer>
        <h1 className={[styles.runner, styles.footer].join(" ")}>
          <Link href="contact-me">Contact Me!</Link>
        </h1>
      </footer>
    );
  }
}
