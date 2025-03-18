import React, { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL;

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/api/contact`, { email });

      if (response.status === 200) {
        setMessage("Form Submitted");
      }
    } catch (err) {
      if (err.response?.status === 422) {
        setError("Emails ending with '@ez.works' are not allowed");
      } else {
        setError("Something went wrong. Try again.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center gap-2 p-4 bg-white w-full md:w-auto"
    >
      <div className="flex flex-col w-full md:w-auto md:flex-1">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md w-full md:w-auto md:flex-1"
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        {message && <p className="text-green-500 text-sm mt-1">{message}</p>}
      </div>
      <button
        type="submit"
        className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
      >
        Contact Me
      </button>
    </form>
  );
};

export default ContactForm;
