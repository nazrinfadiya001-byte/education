import { motion } from "framer-motion";

function About() {
  const features = [
    {
      icon: "📚",
      title: "Quality Education",
      text: "Learn with simple and effective educational resources."
    },
    {
      icon: "👩‍🏫",
      title: "Expert Support",
      text: "Get guidance and support throughout your learning journey."
    },
    {
      icon: "💡",
      title: "Creative Learning",
      text: "Discover new ideas and develop your creative thinking."
    },
    {
      icon: "🎯",
      title: "Reach Your Goals",
      text: "Build skills and move closer to your dreams."
    }
  ];

  return (
    <section id="about" className="about-section">

      <div className="section-heading">
        <span>ABOUT OUR PLATFORM</span>
        <h2>
          Learning Made <span>Simple</span>
        </h2>
        <p>
          We believe that education is the key to success.
          Our mission is to make learning easy, enjoyable and accessible.
        </p>
      </div>

      <div className="about-content">

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900"
            alt="Students in classroom"
          />
        </motion.div>

        <div className="features">
          {features.map((item, index) => (
            <motion.div
              className="feature-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="feature-icon">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;