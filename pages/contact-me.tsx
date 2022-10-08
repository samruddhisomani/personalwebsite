import styles from "../styles/Home.module.css";

export default function ContactMe() {
  return (
    <div>
      <form
        className={styles.contactme}
        data-netflify="true"
        method="POST"
        action="/success"
        data-netlify-recaptcha="true"
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
        <div data-netlify-recaptcha="true"></div>
        <button type="submit" className={styles.contactMeFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
