import Cards from "./Componet/Cards/Cards"
import Properties from "./Componet/Properties/Properties"


const Product = (props) => {
    
  return (
   <div className="product">
     <Properties
          id={props.id}
          header={props.header}
          span1={props.span1}
          span2={props.span2}
          span3={props.span3}
          span4={props.span4}
          icon={props.icon}
          p={props.p}
        />
        <Cards Products={props.Products} />
   </div>
  )
}

export default Product