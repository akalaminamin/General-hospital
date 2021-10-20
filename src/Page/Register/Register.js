import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../Contexts/AuthProvider";
const Register = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { username, email, password, confirmPassword } = userInfo;
  const { signUp, handleGoogleSignIn } = useAuth();
  const history = useHistory();
  console.log(password, confirmPassword);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be use minimum 6 characters");
      return;
    }
    // do validation
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(email, password, username);
      history.push("/");
    } catch (err) {
      console.log(err);
      setError("Failed create an account");
      setLoading(false);
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
        <h2 className="text-center">Create an Account</h2>
        <p className="text-center px-4 py-3">
          By continuing, you agree to Terms of Service and acknowledge you've
          login our site.
        </p>
        <form onSubmit={handleSubmit} className="mt-3 cutom-form text-center">
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Full name"
            onBlur={handleInputChange}
            required
          />
          <br />
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Your email"
            onBlur={handleInputChange}
            required
          />
          <br />
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Password"
            onBlur={handleInputChange}
            required
          />
          <br />
          <input
            className="form-input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            onBlur={handleInputChange}
            required
          />
          <br />
          {error && <h4 style={{ color: "red" }}>{error}</h4>}
          <Link to="/login" className="account-btn d-block text-start ps-5">
            Sign In and countinue!
          </Link>
          <input
            disabled={isLoading}
            type="submit"
            value="Sign up"
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

export default Register;
