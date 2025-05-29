import vector from "../../assets/images/vector.svg";
import plantVector from "../../assets/images/plantVector.svg";

function HeroSection({ className = "" }) {
  return (
    <section className={`section-hero ${className}`}>
      <h1 className="heading-primary font-medium">
        <span>Your space.</span>
        <span>
          <img src={vector} alt="heart vector image" />
          <span>Your stories.</span>
        </span>
        <span>Your voice.</span>
      </h1>
      <img src={plantVector} alt="Illustration displaying plants" />
    </section>
  );
}

export default HeroSection;
