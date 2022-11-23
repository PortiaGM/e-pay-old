import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Footer from "./Footer";
import { Avatar } from "@mui/material";
import "./../styles/home.css";
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const Home = () => {
  const [authenticated, setauthenticated] = useState(JSON.parse(localStorage.getItem("authenticated")));

  const fname = 'Portia';
  const lname = 'Medina';
  const name = [fname, lname].join(' ');
  const bal = 0.00;
  
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
            <div className="container1 userInfo1">
              <Avatar className="avatar1" alt={name} src="/static/images/avatar/1.jpg"/>
              <h2 className="avatarName1">{name}</h2>
            </div>
            <div className="container1 userBal">
              <h2 className="balStr">Available Balance</h2>
              <p className="balInt">{bal}</p>
            </div>
            <div className="row icons">
              <div className="column">
                <Avatar><RequestQuoteIcon className="icon" sx={{ fontSize: "25px" }} /></Avatar>
                <p className="iconTxt">Bill</p>
              </div>
              <div className="column">
              <Avatar><LocalAtmIcon className="icon" sx={{ fontSize: "25px" }} /></Avatar>
                <p className="iconTxt">Cash In</p>
              </div>
              <div className="column">
              <Avatar><CurrencyExchangeIcon className="icon" sx={{ fontSize: "25px" }} /></Avatar>
                <p className="iconTxt">Send</p>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
};

export default Home;
