import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import { faBars, faClose, faSun } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [toogle, setToogle] = useState(true)
  return (
    <motion.nav
      animate={{ opacity: [0, 1], y: [70, 0] }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <img src={require("../Assent/Vector.png")} alt="logo" />
      <FontAwesomeIcon  icon={toogle ? faBars : faClose } onClick={() => setToogle(!toogle)}/>
      <ul className={toogle ? "" : "show"}>
        <li>
          <a href="#development">Development</a>
        </li>
        <li>
          <a href="#Property">Property News</a>
        </li>
        <li>
          <a href="#Industry">Industry Profiles</a>
        </li>
        {toogle ? "" : <li><a>Contact</a></li>}
      </ul>
      <div className="navbar-right">
        <FontAwesomeIcon icon={faSun} />
        <button>Contact Us</button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
