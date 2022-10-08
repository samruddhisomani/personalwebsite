import styles from "../styles/Home.module.css";

export default function ContactMe() {
  return (
    <div>
      <form
        className={styles.contactme}
        data-netflify="true"
        method="POST"
        //action="/success"
        name="contactme"
      >
        <input name="form-name" value="contactme" type="hidden" />
        <label htmlFor="name">Name</label>
        <input name="name" type="text" required></input>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" required></input>
        <label htmlFor="message">Message</label>
        <textarea
          className={styles.messageArea}
          name="message"
          required
        ></textarea>
        <button type="submit" className={styles.contactMeFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
