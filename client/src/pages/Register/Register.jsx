import "../Login/login.scss";
import "./register.scss";
import { useRef } from "react";
import EmailImg from "../../assets/email.png";
import PasswdImg from "../../assets/password.png";
import UserImg from "../../assets/user.png";
import { register } from "../../services/apiServices.js";
import { useNavigate } from "react-router-dom";

function Register() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const data = await register({
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(data);
      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Loged In");
        navigate("/");
      }
    } catch (err) {
      console.error("Error While Login", err);
      throw err;
    }
  };

  
  return (
    <div className="register">
      <div className="left">
        <div>
          <h1>Welcome</h1>
          <h1>To Prime.Dev!</h1>
        </div>
      </div>
      <div className="right">
        <div className="register-form">
          <div className="heading">Sign Up</div>
          <div className="inputs">
            <div className="username">
              <p>Email Address</p>
              <div className="input-box">
                <img src={UserImg} alt="" />
                <div className="line"></div>
                <input
                  type="text"
                  name="username"
                  placeholder="example12"
                  ref={usernameRef}
                />
              </div>
            </div>

            <div className="email">
              <p>Email Address</p>
              <div className="input-box">
                <img src={EmailImg} alt="" />
                <div className="line"></div>
                <input
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                  ref={emailRef}
                />
              </div>
            </div>

            <div className="password">
              <p>Password</p>
              <div className="input-box">
                <img src={PasswdImg} alt="" />
                <div className="line"></div>
                <input
                  type="password"
                  name="passwd"
                  placeholder="✱ ✱ ✱ ✱ ✱ ✱ ✱ ✱"
                  className="passwd"
                  ref={passwordRef}
                />
              </div>
            </div>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Register
          </button>
          <div className="actions-2">
            <p>
              Alredy Have An Account ? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
