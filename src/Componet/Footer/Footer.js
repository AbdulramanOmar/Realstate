import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const mediaIcons = [
    {
      icon: faFacebook,
    },
    {
      icon: faTwitter,
    },
    {
      icon: faInstagram,
    },
    {
      icon: faLinkedin,
    },
  ];
  const Links = [
    {
      name: "Home",
    },
    {
      name: "About",
    },
    {
      name: "Price",
    },
    {
      name: "Development",
    },
    {
      name: "Properties",
    },
  ];
  return (
    <div className="footer">
      <div className="container">
        <footer>
          <div className="footer-logo">
            <div className="img-container">
              <img src={require("../Assent/Logo.png")} />
            </div>

            <p>
              Duplicate plugin flows align layout library. Project device undo
              outline bold. Variant main frame component auto shadow. Pixel
              background layer scale pixel. Distribute.Duplicate plugin flows
            </p>
            <div className="footer-icons">
              {mediaIcons.map((el, i) => {
                return <FontAwesomeIcon key={i} icon={el.icon} />;
              })}
            </div>
          </div>
          <ul className="footer-links">
            <h3>Links</h3>
            {Links.map((el, i) => {
              return <li key={i}>{el.name}</li>;
            })}
          </ul>
          <div className="footer-email">
            <h3>Subcribe</h3>
            <input type={"email"} placeholder="Email..." />
            <button>Subcribe</button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
