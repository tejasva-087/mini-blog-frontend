import Link from "../../components/link/Link";
import Logo from "../../components/logo/Logo";
import SearchBar from "../searchBar/searchBar";
import UserProfile from "../userProfile/UserProfile";
import "./navigation.scss";

function Navigation({
  searchBar = false,
  userProfile = false,
  navOptions = true,
}) {
  return (
    <header className="header">
      <Logo />
      {searchBar && <SearchBar className="header--search-bar" />}

      {navOptions && (
        <nav className="header--nav-bar">
          <Link href="/posts" className="link--underline">
            posts
          </Link>
          <Link href="/signup" className="link--full">
            get started
          </Link>
        </nav>
      )}

      {userProfile && (
        <UserProfile
          className="header--user-profile"
          imageSeed={Math.floor(Math.random() * 100000000)}
          userName="Tejasva"
        />
      )}
    </header>
  );
}

export default Navigation;
