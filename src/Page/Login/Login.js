import React, { useState } from "react";
import { useHistory, Link, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";
import { useAuth } from "../../Contexts/AuthProvider";
const Login = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { email, password } = userInfo;
  const history = useHistory();
  const location = useLocation();
  const redirect_url = location.state?.from || "/";
  const { LogIn, handleGoogleSignIn } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // handle login
    try {
      setError("");
      setLoading(true);
      await LogIn(email, password);
      history.push(redirect_url);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
      setError("Failed to login!");
    }
  };
  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setUserInfo({ ...userInfo, [inputName]: inputValue });
  };
  return (
    <div className="d-flex align-items-center justify-content-center form">
      <div className="form-wrapper">
        <h2 className="text-center">Login Account</h2>
        <p className="text-center px-4 py-3">
          By continuing, you agree to Terms of Service and acknowledge you've
          login our site.
        </p>
        <form onSubmit={handleSubmit} className="mt-3 cutom-form text-center">
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="your email"
            onBlur={handleInputChange}
            required
          />
          <br />
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="password"
            onBlur={handleInputChange}
            required
          />
          <br />
          {error && <h5 style={{ color: "red" }}>{error}</h5>}
          <Link to="/register" className="account-btn d-block text-start ps-5">
            Create an new account!
          </Link>
          <input
            disabled={isLoading}
            type="submit"
            value="Login"
            className="submit-btn mt-3"
          />
        </form>
        <h5 className="text-secondary text-center my-2">OR</h5>
        <div className="login-btns text-center">
          <button
            className="google-signIn-btn px-3"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle className="me-2" />
            Sign in with Google
          </button>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Login;
