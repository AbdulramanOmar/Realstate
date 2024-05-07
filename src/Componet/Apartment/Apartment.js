import React from "react";
import { Progrees } from "../Assent/Product";
import "./Apartment.css";
import { motion } from "framer-motion";
const Apartment = () => {
  
  return (
    <div className="container">
      <div className="apartment">
        <h1>
          Top new apartments & development investment suburbs for Young
          Professionals
        </h1>
        <div className="apartment-content">
          <div className="apartment-head">
            <h3>Young Professionals Population</h3>
            <div className="apartment-nav">
              <div className="spans">
                <span>ALL</span>
                <span>QLA</span>
                <span>MAB</span>
                <span>ROOM</span>
              </div>
            </div>
          </div>
          {Progrees.map((el, i) => {
            return (
              <div key={i} className="apartment-progress">
                <h3>{el.title}</h3>
                <span>{el.progrees}%</span>
                <div className="progrees-con">
                  <motion.span
                    whileInView={{ width:`${el.progrees}%` }}
                    transition={{duration:2}}
                    className="progress"
                  ></motion.span>
                </div>
              </div>
            );
          })}
        </div>
        <button>See full report</button>
      </div>
    </div>
  );
};

export default Apartment;
