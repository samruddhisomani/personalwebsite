import styles from "../styles/Home.module.css";

type OneLinerProps = {
  line: string;
};

export default function OneLiner(props: OneLinerProps) {
  return <h1 className={styles.oneLiner}>{props.line}</h1>;
}
