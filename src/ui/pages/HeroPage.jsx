import HeroNavigation from "../layouts/HeroNavigation";
import Footer from "../layouts/Footer";
import HeroSection from "../section/HeroSection";

function HeroPage() {
  return (
    <div className="page-hero">
      <HeroNavigation></HeroNavigation>
      <HeroSection></HeroSection>
      <Footer></Footer>
    </div>
  );
}

export default HeroPage;
