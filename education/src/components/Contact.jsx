import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <motion.div
        className="contact-box"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-info">
          <span>GET IN TOUCH</span>
          <h2>Let's Start Your Learning Journey!</h2>
          <p>
            Have questions? Contact us and let's make
            your learning experience better.
          </p>

          <h4>📧 Email</h4>
          <p>hello@eduspark.com</p>

          <h4>📞 Phone</h4>
          <p>+91 98765 43210</p>
        </div>

        <form className="contact-form" onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you! Your message has been submitted.");
          e.target.reset();
        }}>
          <h3>Send Us a Message</h3>

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">
            Send Message →
          </button>
        </form>

      </motion.div>

    </section>
  );
}

export default Contact;