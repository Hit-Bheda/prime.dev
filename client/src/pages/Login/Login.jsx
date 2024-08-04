import "./login.scss";
import { useRef, useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmailImg from "../../assets/email.png";
import PasswdImg from "../../assets/password.png";
import { login } from "../../services/apiServices.js";
import { AuthContext } from "../../context/AuthContext.jsx";

function Login() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await login({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      if (data.token) {
        localStorage.setItem("token", data.token);
        setIsAuthenticated(true);
        navigate("/");
      }
    } catch (err) {
      console.error("Error While Login", err);
      setError(err.message || "An error occurred during login");
    }
  };

  return (
    <div className="login">
      <div className="left">
        <div>
          <h1>Welcome</h1>
          <h1>Back!</h1>
        </div>
      </div>
      <div className="right">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="heading">Login</div>
          <div className="inputs">
            <div className="email">
              <p>Email Address</p>
              <div className="input-box">
                <img src={EmailImg} alt="Email Icon" />
                <div className="line"></div>
                <input
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                  ref={emailRef}
                  required
                />
              </div>
            </div>
            <div className="password">
              <p>Password</p>
              <div className="input-box">
                <img src={PasswdImg} alt="Password Icon" />
                <div className="line"></div>
                <input
                  type="password"
                  name="passwd"
                  placeholder="✱ ✱ ✱ ✱ ✱ ✱ ✱ ✱"
                  className="passwd"
                  ref={passwordRef}
                  required
                />
              </div>
            </div>
          </div>
          <div className="actions">
            <div className="remember">
              <input type="checkbox" id="remember-me" name="remember-me" />
              <label htmlFor="remember-me">Remember Me</label>
            </div>
            <a href="#" className="forgot">
              Forgot Password?
            </a>
          </div>
          <button type="submit">Login</button>
          <div className="actions-2">
            <p>Dont Have An Account? <Link to="/register">SignUp</Link></p>
          </div>
        </form>
        {error && <div className="err">{error}</div>}
      </div>
    </div>
  );
}

export default Login;