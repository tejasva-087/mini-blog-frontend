import Input from "../../components/input/Input";
import "./inputBox.scss";

function InputBox({
  className = "",
  placeholder = "",
  inputValue,
  setInputValue,
  id = "",
  type = "text",
  label = "",
}) {
  return (
    <div className={`input-box ${className}`}>
      <label htmlFor={id}>{label}</label>
      <Input
        placeholder={placeholder}
        inputValue={inputValue}
        setInputValue={setInputValue}
        id={id}
        type={type}
      />
    </div>
  );
}

export default InputBox;
