import styles from "../styles/Home.module.css";

export default function ContactMe() {
  return (
    <div>
      <form
        className={styles.contactme}
        data-netlify="true"
        name="contact"
        method="POST"
        action="/success"
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
      >
        <input type="hidden" name="form-name" value="contact" />
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
        <div style={{ display: "none" }}>
          <label htmlFor="bot-field">
            Don’t fill this out if you’re human:
          </label>
          <input type="hidden" name="bot-field" />{" "}
        </div>
        <div data-netlify-recaptcha="true"></div>
        <button type="submit" className={styles.contactMeFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

//<label for="name">Name</label>
//<input name="name" type="text">
