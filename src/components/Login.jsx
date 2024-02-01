import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIssInvalid] = useState(false);
  const email = useRef();
  const password = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    console.log(enteredEmail, enteredPassword);
    //reseting
    // email.current.value='';
    // password.current.value='';

    const emailIsValid = enteredEmail.includes("@");
    if (!emailIsValid) {
      setEmailIssInvalid(true);
      return;
    }
    setEmailIssInvalid(false);
    console.log("hello");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2> 

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input ref={email} id="email" type="email" name="email" />
          <div className="control-error">
            {emailIsInvalid && <p>pleae enter a valid email adress</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input ref={password} id="password" type="password" name="password" />
        </div>
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" type="submit">
          Login
        </button>
      </p>
    </form>
  );
}
