import React from "react";
import Link from "./Link";

function Logo() {
  return (
    <Link to="/">
      <p className="label-primary color-black-primary">
        blog <strong className="color-primary">IT</strong>
      </p>
    </Link>
  );
}

export default Logo;
