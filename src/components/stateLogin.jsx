import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../Hooks/useInput";

export default function StateLogin() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const {
    value: emailValue,
    handleInput: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInput: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
    //reseting
    if (emailHasError || passwordHasError) {
      return;
    }
  }

  // function emailChange(event) {
  //   setEmail(event.target.value);
  // }
  // function passwordChange(event) {
  //   setPassword(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label={"Email"}
          name={"email"}
          type={"email"}
          id={"email"}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          value={emailValue}
          error={emailHasError && "please enter valid email"}
        />

        <Input
          label={"Password"}
          name={"password"}
          type={"password"}
          id={"password"}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          error={passwordHasError && "please enter a valid passsword"}
        />
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
