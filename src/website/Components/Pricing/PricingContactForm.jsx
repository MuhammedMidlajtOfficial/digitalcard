import React, { useState } from "react";

const PricingContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    phnNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Here you would typically send the data to your server
    }
  };

  return (
    <div className="contact-form-section">
      <div className="container">
        <h1>Need a Custom Solution? Get in Touch!</h1>
        <p>
          Not sure which plan is right for you? Fill out the form below, and our
          team will help you find the perfect fit.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
              {errors.companyName && (
                <span className="error">{errors.companyName}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="phnNumber">Phone Number (optional)</label>
              <input
                type="tel"
                id="phnNumber"
                name="phnNumber"
                value={formData.phnNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <center>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default PricingContactForm;
