import "./App.css";
import About from "./Componet/About/About";
import Hero from "./Componet/Hero/Hero";
import Navbar from "./Componet/Navbar";
import Work from "./Componet/Works/Work";
import Product from "./Product";
import { Buildings, Products } from "./Componet/Assent/Product";
import Plan from "./Componet/Plan/Plan";
import Apartment from "./Componet/Apartment/Apartment";
import Explore from "./Componet/Explore/Explore";
import Footer from "./Componet/Footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Product
          id={1}
          header={`Investment apartments & townhouses from across the nation`}
          span1={"ALL"}
          span2={"VIC"}
          span3={"QLD"}
          span4={"NSW"}
          icon={true}
          p={false}
          Products={Products}
        />
        <About />
        <Work />
        <Product
          id={2}
          header={`Australia's best investment property deals`}
          span1={"1 BEDROOM"}
          span2={"2 BEDROOM"}
          span3={"3 BEDROOM"}
          span4={"4 BEDROOM"}
          icon={true}
          p={false}
          Products={Buildings}
        />
      </div>
      <Plan />
      <Apartment />
      <Explore />
      <Footer />
    </>
  );
}

export default App;
