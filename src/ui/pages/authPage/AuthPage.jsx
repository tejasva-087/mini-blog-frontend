import Logo from "../../components/logo/Logo";
import SignUpForm from "../../layouts/signUpForm/SignUpForm";
import LogInForm from "../../layouts/logInForm/LogInForm";
("./");
import rightVector from "../../../assets/images/rightVector.svg";
import leftVector from "../../../assets/images/leftVector.svg";
import "./authPage.scss";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AuthPage() {
  const [state, setState] = useState("sign-up");

  const toggleState = function () {
    if (state === "sign-up") setState("log-in");
    else setState("sign-up");
  };

  return (
    <div className="auth">
      <Logo></Logo>
      {state === "sign-up" && (
        <>
          <SignUpForm className="auth-form" />
          <p className="">
            Already have an account?{" "}
            <Button onClick={toggleState}>Log in</Button>
          </p>
        </>
      )}

      {state === "log-in" && (
        <>
          <LogInForm className="auth-form" />
          <p className="">
            Create new account? <Button onClick={toggleState}>Sign up</Button>
          </p>
        </>
      )}

      <img
        src={rightVector}
        alt="Illustration of plants"
        className="auth-vector auth-vector--right"
      />
      <img
        src={leftVector}
        alt="Illustration of plants"
        className="auth-vector auth-vector--left"
      />
    </div>
  );
}

export default AuthPage;
