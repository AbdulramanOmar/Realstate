import { useState } from "react";
import "./Explore.css";

const Explore = () => {
  const [toogle, setToogle] = useState(require("../Assent/Rectangle 2 (1).png"))
  const hanleClick = (id) => {
    setToogle(id)
  };

  const Explore = [
    {
      title: "New South Wales",
      img: require("../Assent/Rectangle 2 (1).jpg")
    },
    {
      title: "Victoria",
      img: require("../Assent/Rectangle 2.jpg")
    },
    {
      title: "Queensland",
      img: require("../Assent/Rectangle 2 (1).png")
    },
    {
      title: "Australian Capital Territory",
      img: require("../Assent/Rectangle 2.png")
    },
  ];
  return (
    <div className="exlpore">
      <div className="container">
        <div className="exlpore-head">
          <h1>quick exlpore</h1>
          <button>explore app</button>
        </div>
        <div className="explore-content">
          <div className="img-container">
            <img src={toogle} alt="img"/>
          </div>
          <ul className="explore-nav">
            {Explore.map((el, i) => {
              return (
                <li
                  id="../Assent/download (${i++}).jpg"
                  key={i}
                  className={`num${i}`}
                  onClick={() => hanleClick(el.img)}
                >
                  {el.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Explore;
