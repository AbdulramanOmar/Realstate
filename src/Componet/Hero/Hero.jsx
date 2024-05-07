import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./hero.css";
import { faDownload, faListUl } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {  motion } from "framer-motion";

const Hero = () => {
  const variants = {
    animte: {
      opacity: [0, 1],
      y: [70, 0],
    },
    trans: {
      duration: 4,
      ease: "easeOut",
    },
  };
  return (
    <div className="hero">
      <main>
        <motion.h1
          animate={{ y: [-40, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
        >
          The home of new <br /> property developments
        </motion.h1>
        <motion.p
          variants={variants}
          animate="animte"
          transition={{ duration: 1.8 }}
        >
          Find and build your dream home within a second
        </motion.p>
        <div className="search-box">
          <input type={"search"} placeholder="Search..." id="search" />
          <FontAwesomeIcon icon={faListUl} />
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="result-search">
          <motion.p>Frequently searched suburbs</motion.p>
          <div className="spans ">
            <motion.span
              animate={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
            >
              Melbourne
            </motion.span>
            <motion.span
              variants={variants}
              animate="animte"
              transition={{ duration: 1 }}
            >
              Gold Coastl
            </motion.span>
            <motion.span
              variants={variants}
              animate="animte"
              transition={{ duration: 1 }}
            >
              Brisbane
            </motion.span>
            <motion.span
              variants={variants}
              animate="animte"
              transition={{ duration: 1 }}
            >
              New Caslt
            </motion.span>
            <motion.span
              animate={{ x: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
            >
              Sydney
            </motion.span>
          </div>
        </div>
      </main>
      <div className="img-container">
        <motion.img
          src={require("../Assent/hero (2).png")}
          alt="heroImg"
          initial={{ filter:"blur(12px)" }}
          animate={{y:[110 , 0]}}
          whileInView={{filter:"blur(0px)" }}
          viewport={{
            margin:"-300px",
            once:true
          }}
          transition={{duration:1}}
        />
      </div>
    </div>
  );
};

export default Hero;
