/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export const Form = () => {
  const [fname, fnameChange] = new useState("");
  const [lname, lnameChange] = new useState("");
  const [age, ageChange] = new useState("");
  const [phone, phoneChange] = new useState("");
  const [email, emailChange] = new useState("");
  const [batch, batchChange] = new useState("");
  const [gender, genderChange] = new useState("");

  const navigate = useNavigate();

  const isvalidate = () => {
    let isproceed = true;
    let errMessage = "Please enter a valid value in";
    if (fname === null && fname === " ") {
      isproceed = false;
      toast.warning(errMessage + "name");
    }
    if (age < 18 || age > 65) {
      isproceed = false;
      toast.warning(errMessage + " age");
    }
    if (phone === null || phone === " ") {
      isproceed = false;
      toast.warning(errMessage + " Phone No.");
    }
    if (email === null || email === " ") {
      isproceed = false;
      toast.warning(errMessage + " email");
    }
    if (/^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/.test(phone)) {
    } else {
      isproceed = false;
      toast.warning(errMessage + " Phone No.");
    }
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
    } else {
      isproceed = false;
      toast.warning(errMessage + " Email id");
    }
    return isproceed;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { fname, lname, age, phone, email, batch, gender };
    // console.log(data);
    if (isvalidate()) {
      fetch("http://localhost:8000/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => {
          toast.success("Registred successfully");
          navigate("/registered");
        })
        .catch((err) => {
          toast.error("Failed to register:" + err.message);
        });
    }
  };

  return (
    <div className="offset-lg-3 col-lg-6">
      <form className="container" onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header d-flex justify-content-center">
            <h1>Yoga Classes Registration Form</h1>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>
                    Name <span className="errmsg">*</span>
                  </label>
                  <div className="input-group">
                    <input
                      value={fname}
                      onChange={(e) => fnameChange(e.target.value)}
                      type="text"
                      aria-label="First name"
                      className="form-control"
                      placeholder="First name"
                    />
                    <input
                      value={lname}
                      onChange={(e) => lnameChange(e.target.value)}
                      type="text"
                      aria-label="Last name"
                      className="form-control"
                      placeholder="last name"
                    />
                  </div>
                  <label>
                    Age <span className="errmsg">*</span>
                  </label>
                  <input
                    value={age}
                    onChange={(e) => ageChange(e.target.value)}
                    className="form-control mt-2 mb-2"
                    type="number"
                    placeholder="Enter your age"
                  ></input>
                  <div className="form-text mb-2">
                    Your age must be between 18-65, inclusive
                  </div>
                  <label>
                    Contact No. <span className="errmsg">*</span>
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => phoneChange(e.target.value)}
                    className="form-control mt-2 mb-2"
                    pattern="^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$"
                    type="tel"
                    placeholder="Enter you Phone number like: 123-456-7890"
                  ></input>
                  <label>
                    Email <span className="errmsg">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      value={email}
                      onChange={(e) => emailChange(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="unknown@example.com"
                      pattern="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/"
                    />
                  </div>
                  <label>
                    Gender <span className="errmsg">*</span>
                  </label>
                  <br />
                  <input
                    type="radio"
                    checked={gender === "male"}
                    onChange={(e) => genderChange(e.target.value)}
                    name="gender"
                    value="male"
                  ></input>
                  <label className="me-3">Male</label>
                  <input
                    type="radio"
                    checked={gender === "female"}
                    onChange={(e) => genderChange(e.target.value)}
                    name="gender"
                    value="female"
                  ></input>
                  <label>Female</label>
                  <br />
                  <label className="mt-2">
                    Batch: <span className="errmsg">*</span>
                  </label>
                  <select
                    className="form-select mt-2 mb-3"
                    value={batch}
                    onChange={(e) => batchChange(e.target.value)}
                  >
                    <option value="select">--select the Batch--</option>
                    <option value="6-7AM">6AM - 7AM</option>
                    <option value="7-8AM">7AM - 8AM</option>
                    <option value="8-9AM">8AM - 9AM</option>
                    <option value="5-6PM">5PM - 6PM</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-center">
            <button type="submit" className="btn btn-primary p-3">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
