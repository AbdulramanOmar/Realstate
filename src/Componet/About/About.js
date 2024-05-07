import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="img-container image">
        <motion.img
          src={require("../Assent/Rectangle 2 (1).png")}
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{
            once: true,
          }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="about-text"
      >
        <h1>About Us</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't loo
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="about-text2"
      >
        <h1>Mega Building</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't loo
        </p>
      </motion.div>
      <div className="img-container">
        <img src={require("../Assent/Rectangle 2.jpg")} />
      </div>
    </div>
  );
};

export default About;
