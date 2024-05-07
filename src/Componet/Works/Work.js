import { workContent } from "../Assent/Product"
import "./work.css"

const Work = () => {
  return (
    <div className="work">
        {workContent.map((el, index) => {
            return(
                <div key={index} className="work-content">
                    <span>{el.numbers}</span>
                    <p>{el.title}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Work