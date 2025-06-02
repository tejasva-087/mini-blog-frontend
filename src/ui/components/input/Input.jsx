import "./input.scss";

function Input({
  className = "",
  placeholder = "",
  inputValue,
  setInputValue,
  id = "",
  type = "text",
}) {
  return (
    <input
      id={id}
      type={type}
      placeholder={`${placeholder}`}
      className={`input ${className}`}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}

export default Input;
