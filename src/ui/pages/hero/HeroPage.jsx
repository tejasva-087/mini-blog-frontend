import Navigation from "../../layouts/navigation/Navigation";
import "./heroPage.scss";

import vector from "../../../assets/images/vector.svg";
import plantVector from "../../../assets/images/plantVector.svg";
import Footer from "../../layouts/footer/Footer";

function HeroPage() {
  return (
    <div className="hero-section">
      <Navigation />
      <section className="hero-section--main">
        <h1 className="heading-primary flex flex-col">
          <span>Your space.</span>
          <span className="flex flex-center">
            <span>
              <img
                src={vector}
                alt="Illustration"
                className="hero-section--illustration"
              />
            </span>
            <span>Your stories.</span>
          </span>
          <span>Your voice.</span>
        </h1>

        <img
          src={plantVector}
          alt="Illustration"
          className="hero-section--image"
        />
      </section>
      <Footer />
    </div>
  );
}

export default HeroPage;
