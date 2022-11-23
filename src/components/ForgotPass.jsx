import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ForgotPass() {
  const initialFormValues = {
    email: "",
    password: "",
    confirmPass: ""
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  return (
    <div className="auth-form" id="forgot-pass">
      <h2 className="title">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={formValues.email}
          onChange={handleChange}
          className="input"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          value={formValues.password}
          onChange={handleChange}
          className="input"
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          value={formValues.confirmPass}
          onChange={handleChange}
          className="input"
          type="password"
          name="confirmPass"
          placeholder="Confirm Password"
        />
        {!isSubmitting ? <button>Reset Password</button> : <button disabled>Resetting Password...</button>}
      </form>
    </div>
  );
}

export default ForgotPass