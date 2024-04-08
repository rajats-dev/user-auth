import React, { useState } from "react";
import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { professions } from "../data";

const SignUp = () => {
  const navigate = useNavigate();
  const [alerts, setAlerts] = useState("");
  const [formValue, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    phonenumber: "",
  });

  const onhandleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, phonenumber, profession } = formValue;

    if (
      username === "" ||
      email === "" ||
      password === "" ||
      phonenumber === "" ||
      !profession
    ) {
      setAlerts("Please fill all the details.");
      return;
    }
    localStorage.setItem("user-data", JSON.stringify(formValue));
    navigate("/login");
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
      <div className="flex justify-center m-6">
        <form
          onSubmit={onhandleSubmit}
          className="flex flex-col justify-center bg-slate-200 w-96 rounded-lg m-5 p-7"
        >
          <h2 className="font-bold my-2">Sign Up</h2>
          {alerts && (
            <p className="flex items-center my-2 text-red-700">
              <MdError />
              {alerts}
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
          <label>
            Phone Number
            <input
              type="text"
              name="phonenumber"
              size={38}
              onChange={onhandleChange}
              placeholder="Enter phone number"
              className="p-1 rounded-lg my-2"
            />
          </label>
          <label>
            Profession:{" "}
            <select
              onChange={onhandleChange}
              name="profession"
              className="rounded-lg m-2"
            >
              <option hidden>Choose</option>
              {professions.map((value, i) => {
                return <option key={i}>{value}</option>;
              })}
            </select>
          </label>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-900 text-cyan-50 rounded my-5 p-1"
          >
            SignUp
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
