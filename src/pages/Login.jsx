import React, { useState } from "react";
import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [alerts, setAlerts] = useState({ warning: "", error: "" });
  const [formValue, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onhandleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formValue;

    if (username === "" || email === "" || password === "") {
      setAlerts((prev) => {
        return { ...prev, warning: "Please fill all the details." };
      });
      return;
    }

    //// validating the data

    const userObj = localStorage.getItem("user-data");
    const parseUserObj = JSON.parse(userObj);

    if (
      parseUserObj.username === formValue.username &&
      parseUserObj.email === formValue.email &&
      parseUserObj.password === formValue.password
    ) {
      navigate("/details");
    } else {
      setAlerts((prev) => {
        return { ...prev, error: "Invalid Credentials." };
      });
    }
  };

  const onhandleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValue,
      [name]: value,
    });
  };

  return (
    <>
      <div className="flex justify-center m-10">
        <form
          onSubmit={onhandleSubmit}
          className="flex flex-col justify-center bg-slate-200 w-96 rounded-lg m-5 p-7"
        >
          <h2 className="font-bold my-2">Login Up</h2>
          {alerts.warning && !alerts.error && (
            <p className="flex items-center my-2 text-red-700">
              <MdError />
              {alerts.warning}
            </p>
          )}
          {alerts.error && (
            <p className="flex items-center my-2 text-red-700">
              <MdError />
              {alerts.error}
            </p>
          )}

          <label>
            <div>Username</div>
            <input
              type="text"
              name="username"
              size={38}
              onChange={onhandleChange}
              placeholder="Enter username"
              className="p-1 rounded-lg"
            />
          </label>
          <label>
            <div>Email</div>
            <input
              type="email"
              name="email"
              size={38}
              onChange={onhandleChange}
              placeholder="Enter email"
              className="p-1 rounded-lg"
            />
          </label>
          <label>
            <div>Password</div>
            <input
              type="text"
              name="password"
              size={38}
              onChange={onhandleChange}
              placeholder="Enter password"
              className="p-1 rounded-lg"
            />
          </label>

          <button
            type="submit"
            className="bg-blue-700 text-cyan-50 rounded my-5 p-1"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
