import React from "react";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccaount,
    emailError,
    passwordError,
  } = props;
  return <section className="login">
      <div className="loginContainer">
          <label>Username</label>
          <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
          <p>{emailError}</p>
          <label>Password</label>
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value )} />
          <p>{passwordError}</p>
      </div>
  </section>;
};

export default Login;
