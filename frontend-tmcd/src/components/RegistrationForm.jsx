import { useState } from "react";
export default function RegistrationForm() {
  // State Mangement with useState
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //State for validation errors
  const [errors, setErrors] = useState({});

  //State to track form submission (for use in loading states)
  const [isSubmitting, setIsSubmitting] = useState(false);

  //Form Validation function (Checks form data b4 submission)
  const validateForm = () => {
    const newErrors = {};

    //Username validation
    if (!username.trim()) {
      newErrors.username = "Username is required";
    } else if (username.length < 3) {
      newErrors.username = "User name must be at least 3 characters";
    }

    //Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    //Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    //Confirm password validation
    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password != confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  //Event Handler functions

  //Handle form submission when user clicks submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //Run validation and reports any errors
    const formErrors = validateForm();

    //Update errors state with validation results
    setErrors(formErrors);

    // Check if form is valid (no errors found)
    if (Object.keys(formErrors).length === 0) {
      //Form is valid - starts submission process
      setIsSubmitting(true);

      //TODO Replace with BackEnd connection
      //Send to backEnd
      console.log("Registering user:", { username, email, password });

      //Simulate API call delay
      setTimeout(() => {
        setIsSubmitting(false);
        //TODO add a redirection route here...(or just go back to homepage)
        console.log("Registration succcessful!");
      }, 2000);
    }
  };

  //Input Change Handlers

  //Username
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    //Clear username error when user starts typing
    if (errors.username) {
      setErrors((prev) => ({ ...prev, username: "" }));
    }
  };

  //Email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    //Clear email error
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  //Password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    //Clear password error
    if (errors.password) {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  //Confirm Password
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    //Clear confirm password error
    if (errors.confirmPassword) {
      setErrors((prev) => ({ ...prev, confirmPassword: "" }));
    }
  };

  return (
    <div>
      {/* {TO DO Styles} */}
      <h1>Create Your Account</h1>

      <form onSubmit={handleSubmit}>
        {/* Username section */}
        <div>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
            required
          />
          {/* Conditional Rendering for Errors */}
          {errors.username && (
            <div className="error-message">{errors.username}</div>
          )}
        </div>

        {/* Email Section */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
          {/* Conditional Rendering for Errors */}
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        {/* Password Section */}
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
          />
          {/* Conditional Rendering for Errors */}
          {errors.password && (
            <div className="error-message">{errors.password}</div>
          )}
        </div>

        {/* Confirm Password section */}
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm your password"
            required
          />
          {/* Conditional Rendering for Errors */}
          {errors.confirmPassword && (
            <div className="error-message">{errors.confirmPassword}</div>
          )}
        </div>
        {/* Submit Button */}

        <button type="submit" disabled={isSubmitting}>
          {/* Conditional text: Change based on submission state */}
          {isSubmitting ? "Creating Account..." : "Register"}
        </button>
      </form>

      {/* Navigation Link */}
      <div>
        Already have an account? <a href="/login"> Login here</a>
      </div>
    </div>
  );
}
