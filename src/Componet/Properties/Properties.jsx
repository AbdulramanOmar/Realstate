
import "./properties.css";
const Properties = (props) => {
  return (
    <div className="Properties" key={props.id}>
      <div className="properties-head">
        <h1>{props.header}</h1>
        <button>see all proerties</button>
      </div>
      <div className="properties-nav">
        <div className="spans">
          <span>{props.span1}</span>
          <span>{props.span2}</span>
          <span>{props.span3}</span>
          <span>{props.span4}</span>
        </div>
     
      </div>
      {props.p && <p>{props.pragrah}</p>}
    </div>
  );
};

export default Properties;
