import Link from "../components/Link";
import Logo from "../components/Logo";

function HeroNavigation() {
  return (
    <header className="header-hero">
      <Logo />

      <nav>
        <Link to="/posts" className="link-underline text-primary">
          posts
        </Link>

        <Link to="/login" className="link-outline text-primary ">
          get started
        </Link>
      </nav>
    </header>
  );
}

export default HeroNavigation;
