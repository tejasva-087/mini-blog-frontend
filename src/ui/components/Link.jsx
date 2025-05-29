function Link({ to = "#", className = "", children, target = "_sef" }) {
  const isExternal = to.startsWith("http");

  return (
    <a
      href={to}
      className={`link ${className}`}
      target={isExternal ? "_blank" : target}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export default Link;
