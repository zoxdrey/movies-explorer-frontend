import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Main.css";

const Main = () => {
  return (
    <>
      <main className="content">
        <Header />
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        <Footer />
      </main>
    </>
  );
};

export default Main;
