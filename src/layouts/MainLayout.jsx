import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ButtonGradient from "../assets/svg/ButtonGradient";
import ScrollToTopButton from "../components/common/ScrollToTopButton";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
      <ButtonGradient />
    </>
  );
};

export default MainLayout;
