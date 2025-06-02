import { useEffect, useState } from "react";
import validator from "validator";
import InputBox from "../inputBox/InputBox";
import Button from "../../components/Button/Button";
import "./logInForm.scss";
import { useNavigate } from "react-router-dom";

function LogInForm({ className = "" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [jwtToken, setJwtToken] = useState("");
  const navigate = useNavigate();

  const validate = function (e) {
    e.preventDefault();

    if (!email || !validator.isEmail(email)) {
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
    } else {
      setError(false);
      setErrorMessage("");
      logIn();
    }
  };

  const logIn = async function () {
    try {
      const userData = { email, password };

      const response = await fetch("http://localhost:3000/api/v1/user/login", {
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
      console.log(result.token);
    } catch (err) {
      setError(true);
      setErrorMessage(err.message);
    }
  };

  useEffect(() => {
    if (jwtToken) {
      localStorage.setItem("jwt", jwtToken);
      navigate("/user");
    }
  }, [jwtToken]);

  return (
    <form className={`log-in ${className}`} onSubmit={validate}>
      <h3 className="heading-tertiary margin-bottom-sml">Log In</h3>

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

      {error && <p className="sign-up--warning">{errorMessage}</p>}
      <Button className="sign-up--btn">Log in</Button>
    </form>
  );
}

export default LogInForm;
