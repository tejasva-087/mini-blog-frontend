import "./input.scss";

function Input({
  className = "",
  placeholder = "",
  inputValue,
  setInputValue,
  required = false,
}) {
  return (
    <input
      type="text"
      placeholder={`${placeholder}`}
      className={`input ${className}`}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      required={required}
    />
  );
}

export default Input;
