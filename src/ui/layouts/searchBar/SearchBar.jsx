import { useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Input from "../../components/input/Input";
import "./searchBar.scss";

function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <form className="search-bar">
      <Input
        placeholder="Search for Posts, Author or Tags"
        className="search-bar__input"
        inputValue={query}
        setInputValue={setQuery}
      />

      <button type="button" className="button search-bar__btn">
        <MagnifyingGlass className="search-bar__icon" />
      </button>
    </form>
  );
}

export default SearchBar;
