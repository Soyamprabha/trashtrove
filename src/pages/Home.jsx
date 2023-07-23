import "../styles/Home.css";

import "../assets/bootstrap.bundle.min.js";

import Contributors from "../components/Contributors";
import Contactus from "../components/Contactus";
import Hero from "../components/Hero";
import Caro from "../components/Caro";
import Content from "../components/Content";

const Home = () => {
  return (
    <div className="container-fluid">
      <Hero />

      <Content />

      <Caro />

      <Contributors />

      <Contactus />
    </div>
  );
};

export default Home;
