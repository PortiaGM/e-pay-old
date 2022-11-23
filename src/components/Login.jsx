import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../styles/form.css";

function Login() {
  localStorage.setItem("authenticated", false);
  
  const initialFormValues = {
    email: "",
    pswd: "",
  };
  const [formValues, setFormValues] = useState(initialFormValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submit = () => {
    console.log(formValues);
  };
  const users = [
    { email: "johndoe@mail.com", pswd: "12345678" },
    { email: "maryjane@mail.com", pswd: "12345678" },
    { email: "pgmedina.student@ua.edu.ph", pswd: "12345678" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const account = users.find((user) => user.email === formValues.email);
    if (account && account.pswd === formValues.pswd) {
      localStorage.setItem("authenticated", true);
      navigate("/home");
    } else {
      alert("Invalid email or password");
      setFormValues(initialFormValues);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="auth-form" id="login">
      <h2 className="title">Welcome to E-Pay</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          value={formValues.email}
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          className="input"
          value={formValues.pswd}
          type="password"
          name="pswd"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        {!isSubmitting ? (
          <button>Login</button>
        ) : (
          <button disabled>Logging in...</button>
        )}
      </form>
      <Link to="/forgot-pass">Forgot Password?</Link>
      <Link to="/register">Don't have an account? Sign up</Link>
    </div>
  );
}

export default Login;
