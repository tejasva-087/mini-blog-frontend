import Link from "../link/Link";
import "./logo.scss";

function Logo() {
  return (
    <Link href="/" className="logo">
      <h3 className="heading-tertiary">
        blog <span>IT</span>
      </h3>
    </Link>
  );
}

export default Logo;
