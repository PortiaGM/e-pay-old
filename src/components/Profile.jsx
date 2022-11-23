import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Footer from "./Footer";
import { Avatar, Box } from "@mui/material";
import "./../styles/profile.css";

const Profile = () => {
  const [authenticated, setauthenticated] = useState(JSON.parse(localStorage.getItem("authenticated")));

  const fname = 'Portia';
  const lname = 'Medina';
  const name = [fname, lname].join(' ');
  const bal = 0.00;

  const intialValues = {
    fname: 'Portia',
    lname: 'Medina',
    bday: '2001-10-20',
    mob: '09167894561',
    email: 'pgmedina.student@ua.edu.ph',
  };
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div className="app">
          <div className="main-container">
            <div className="container userInfo">
              <Avatar className="avatar" alt={name} src="/static/images/avatar/1.jpg"/>
              <h1 className="avatarName">{name}</h1>
              <h2 className="head">{intialValues.bday}</h2>
              <p className="sub">Birthdate</p>
              <h2 className="head">{intialValues.mob}</h2>
              <p className="sub">Contact Number</p>
              <h2 className="head">{intialValues.email}</h2>
              <p className="sub">Email Address</p>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
};

export default Profile;
