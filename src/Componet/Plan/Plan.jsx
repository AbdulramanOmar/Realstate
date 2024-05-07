import { motion } from "framer-motion";
import "./plan.css"

const Plan = () => {

  return (
    <div className="plan">
        <div className="plan-content">
      <h1>Your off the plan <br/> buying guide</h1>
      <p>
        Get the ins and outs of property investment in Australia from <br /> our handy
        real estate guide
      </p>
      <button>see all properties <motion.span
      initial={{left:"0"}}
       animate={{left: "100%"}} transition={{repeat:Infinity , duration:3 , ease:"easeOut" , }} ></motion.span></button>
      </div>
    </div>
  );
};

export default Plan;
