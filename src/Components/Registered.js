/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
export const Registered = () => {
  const navigate = useNavigate();
  const [CardNumber, CardNumberChange] = new useState("");
  const [Name, NameChange] = new useState("");
  const [ExpiryDate, ExpiryDateChange] = new useState("");
  const [CVV, CVVChange] = new useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Payment successfull!");
    navigate("/");
  };
  return (
    <div className="offset-lg-3 col-lg-6">
      <form className="container" onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header d-flex justify-content-center">
            <h1>Payment Details</h1>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <label>
                  Card Number<span className="errmsg">*</span>
                </label>
                <input
                  required
                  value={CardNumber}
                  onChange={(e) => CardNumberChange(e.target.value)}
                  type="number"
                  className="form-control mt-3"
                  placeholder="1111 1111 1111 1111"
                />
              </div>
              <div className="col-lg-6">
                <label>
                  Name on Card<span className="errmsg">*</span>
                </label>
                <input
                  required
                  value={Name}
                  onChange={(e) => NameChange(e.target.value)}
                  type="text"
                  className="form-control mt-3"
                  placeholder="jhon doe"
                />
              </div>
              <div className="col-lg-6">
                <label className="mt-3">
                  Expiration Date<span className="errmsg">*</span>
                </label>
                <input
                  required
                  value={ExpiryDate}
                  onChange={(e) => ExpiryDateChange(e.target.value)}
                  type="month"
                  className="form-control mt-3"
                  placeholder="MM/YYYY"
                />
              </div>
              <div className="col-lg-6">
                <label className="mt-3">
                  CVV<span className="errmsg">*</span>
                </label>
                <input
                  required
                  value={CVV}
                  onChange={(e) => CVVChange(e.target.value)}
                  type="password"
                  className="form-control mt-3"
                  placeholder="123"
                />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-between text-secondary">
                <h6>One Month Fee</h6>
                <h6>Rs. 500</h6>
              </div>
              <div className="col-lg-12 d-flex justify-content-between text-secondary">
                <h6>Discount</h6>
                <h6>Rs. 0</h6>
              </div>
              <div className="col-lg-12 d-flex justify-content-between text-secondary">
                <h5>SubTotal</h5>
                <h5>Rs. 500</h5>
              </div>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              PAY
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registered;
