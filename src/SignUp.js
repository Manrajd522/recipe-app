import React, { useState } from "react";
import Input from "./Input";
import logo from "./logo.png";
import homeimg from "./home-img.svg";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      navigate("/Recipeitems");

      console.log("Sign in:", name, email, password);
    } else {
      setErrors(newErrors);
    }
  }

  function handleChange(event) {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        break;
    }
  }

  return (
    <div className="home">
      <div>
        <img className="header" src={logo} alt="logo recipes" height={100} />
      </div>

      <div className="page">
        <div>
          <h1 className="h1">Easy & Smart Recipes</h1>

          <form className="p" onSubmit={handleSubmit}>
            <label>Name:</label>
            <Input className = "input"
              type="text"
              name="name"
              value={name}
              error={errors.name}
              onChange={handleChange}
            />
            <br />
            <label>Email:</label>
            <Input className = "input"
              type="email"
              name="email"
              value={email}
              error={errors.email}
              onChange={handleChange}
            />
            <br />
            <label>Password:</label>
            <Input className = "input"
              type="password"
              name="password"
              value={password}
              error={errors.password}
              onChange={handleChange}
            />
            <button className = "button" onClick={handleSubmit} type="submit">
              Submit
            </button>
          </form>
        </div>
        <img className="homing" src={homeimg} alt="girl cooking" />
      </div>
    </div>
  );
}

export default SignUp;

