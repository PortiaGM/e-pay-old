import { useState, useEffect } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import "./../styles/form.css";

const Register = () => {
  const intialValues = {
    fname: '',
    lname: '',
    bday: '',
    mob: '',
    email: '',
    pswd: '',
    cPswd: ''
  };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const submit = () => {
    console.log(formValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
    navigate("/login");
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (values.cPswd !== values.pswd) {
      errors.cPswd = "Passwords do not match";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

  // let currentDate = new Date().toLocaleDateString();

  return (
    <div className="auth-form" id="register">
      <h2>Sign Up</h2>
      <p>Please fill this form to create an account</p>
      <form id="register-form" onSubmit={handleSubmit}>
        <input
          value={formValues.fname}
          onChange={handleChange}
          className="input"
          type="text"
          name="fname"
          id="first-name"
          placeholder="First Name"
          required
        />
        <input
          value={formValues.lname}
          onChange={handleChange}
          className="input"
          type="text"
          name="lname"
          id="last-name"
          placeholder="Last Name"
          required
        />
        <label htmlFor="bday">Birthday</label>
        <input
          value={formValues.birth}
          onChange={handleChange}
          type="date"
          name="bday"
          className="input"
          placeholder="yyyy/mm/dd"
          min="1900-01-01"
          max="2022-11-23"
          required
        />
        <input
          value={formValues.mob}
          onChange={handleChange}
          className="input"
          type="tel"
          name="mob"
          placeholder="Contact No."
          required
        />
        <input
          value={formValues.email}
          onChange={handleChange}
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        {formErrors.email && <span>{formErrors.email}</span>}
        <input
          value={formValues.pswd}
          onChange={handleChange}
          className="input"
          type="password"
          name="pswd"
          placeholder="Password"
          minLength="8"
          required
        />
        {formErrors.pswd && <span>{formErrors.pswd}</span>}
        <input
          value={formValues.cPswd}
          onChange={handleChange}
          className="input"
          type="password"
          name="cPswd"
          placeholder="Confirm Password"
          minLength="8"
          required
        />
        {formErrors.cPswd && <span>{formErrors.cPswd}</span>}
        {!isSubmitting ? <button>Sign Up</button> : <Link to="/login"><button disabled>Signing up...</button></Link>}
        <Link to="/login">Already have an account? Login</Link>
      </form>
    </div>
  );
};

export default Register;
