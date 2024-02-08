import React, { useState } from 'react';
import { Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import eyeIcon from "../../assets/images/eye_icon.svg";
import loginAsset from "../../assets/images/login_asset.jpg";
import { LoginStyled } from "./LoginStyled";


const validUsername = "admin";
const validPassword = "admin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === validUsername && password === validPassword) {
      navigate('/home');
    } else {
      setError("Invalid username or password");
    }
  };


  return (
    <LoginStyled>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 col-xl-7 col-xxl-6 text-lg-center text-xxl-start form-col">
              <div className="login_form text-start">
                <div className="title_block">
                  <div className="title">
                    <h2 className="mb-0">Login</h2>
                  </div>
                  <div className="desc">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                  {error && <p className='error'>{error}</p>}
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="login_form_fields">
                    <div className="form-group">
                      <label>User name</label>
                      <div className="username">
                        <input
                          type="text"
                          placeholder="User Name"
                          name="username"
                          value={username}
                          onChange={handleUsernameChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Enter your Password</label>
                      <div className="view_password">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Type your password here"
                          value={password}
                          name="password"
                          onChange={handlePasswordChange}
                        />
                        <div className="icon" onClick={togglePasswordVisibility}>
                          <Image src={eyeIcon} alt="" />
                        </div>
                      </div>
                    </div>  
                  </div>
                  <div className="remember_forget d-flex justify-content-between align-items-center">
                    <div className="remember_me">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Remember me?
                        </label>
                      </div>
                    </div>
                    <div className="forget_pass">
                      <Link>Forgot Password ?</Link>
                    </div>
                  </div>

                  <div className="login_button">
                    <button type="submit" className="btn btn-submit">
                      Login 
                    </button>
                  </div>
                </form>
              </div>
          </div>
          <div className="col-md-6 col-xl-5 col-xxl-6 login_col">
            <div className="login-image position-relative d-flex flex-column justify-content-center text-lg-end">
              <div className="image position-relative">
                <Image src={loginAsset} className="img-fluid" />
                <div className="circle_designs d-none d-md-block">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="circle circle3"></span>
                  <span className="circle circle4"></span>
                  <span className="circle circle5"></span>
                  <span className="circle circle6"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoginStyled>
  );
};

export default Login;
