import { useEffect, useState } from "react";
import validator from "validator";
import InputBox from "../inputBox/InputBox";
import "./signUpForm.scss";
import Button from "../../components/Button/Button";

function SignUpForm({ className = "" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [jwtToken, setJwtToken] = useState("");

  const validate = function (e) {
    e.preventDefault();

    if (!name || !validator.isAlpha(name.split(" ").join(""))) {
      setError(true);
      setErrorMessage(
        "The name entered is not valid. Please enter a valid full name."
      );
      return;
    } else if (!email || !validator.isEmail(email)) {
      setError(true);
      setErrorMessage(
        "The email address entered is not valid. Please enter a valid email."
      );
      return;
    } else if (!password || password.length < 8) {
      setError(true);
      setErrorMessage(
        "Password must be at least 8 characters long. Please choose a stronger password."
      );
      return;
    } else if (password !== passwordConfirm) {
      setError(true);
      setErrorMessage(
        "Passwords do not match. Please re-enter to confirm your password."
      );
      return;
    } else {
      setError(false);
      setErrorMessage("");
      signUp();
    }
  };

  const signUp = async function () {
    try {
      const userData = { name, email, password, passwordConfirm };

      const response = await fetch("http://localhost:3000/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (result.status === "fail") {
        throw new Error(result.message);
      }

      setJwtToken(result.token);
    } catch (err) {
      setError(true);
      setErrorMessage(err.message);
    }
  };

  useEffect(() => {
    if (jwtToken) {
      localStorage.setItem("jwt", jwtToken);
    }
  }, [jwtToken]);

  return (
    <form className={`sign-up ${className}`} onSubmit={validate}>
      <h3 className="heading-tertiary margin-bottom-sml">Sign Up</h3>
      <InputBox
        className=""
        placeholder="eg: Jhon Doe"
        inputValue={name}
        setInputValue={setName}
        id="name"
        type="text"
        label="Enter name"
      ></InputBox>

      <InputBox
        className=""
        placeholder="eg: jhondoe@xyz.com"
        inputValue={email}
        setInputValue={setEmail}
        id="email"
        type="text"
        label="Enter email"
      ></InputBox>

      <InputBox
        className=""
        placeholder="password"
        inputValue={password}
        setInputValue={setPassword}
        id="password"
        type="password"
        label="Enter password"
      ></InputBox>

      <InputBox
        className=""
        placeholder="confirm password"
        inputValue={passwordConfirm}
        setInputValue={setPasswordConfirm}
        id="passwordConfirm"
        type="password"
        label="Confirm password"
      ></InputBox>
      {error && <p className="sign-up--warning">{errorMessage}</p>}
      <Button className="sign-up--btn">Sign up</Button>
    </form>
  );
}

export default SignUpForm;
