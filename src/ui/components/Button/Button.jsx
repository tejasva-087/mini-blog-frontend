import "./button.scss";

function Button({ className = "", onClick, type = "type", children }) {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
