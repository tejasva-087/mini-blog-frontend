import "./link.scss";

function Link({ href = "#", className = "", children }) {
  return (
    <a className={`link ${className}`} href={href}>
      {children}
    </a>
  );
}

export default Link;
