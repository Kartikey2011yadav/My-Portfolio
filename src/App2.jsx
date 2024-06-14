import ButtonGradient from "./assets/svg/ButtonGradient";
import Features from "./components/Features";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Phone from "./components/Phone3D";


const App2 = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Phone/>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App2;
