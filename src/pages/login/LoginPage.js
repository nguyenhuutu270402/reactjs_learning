import React, { useState } from 'react'
import './LoginPage.css';
import imageEarth from '../../assets/images/img_earth.png';
import iconEmail from '../../assets/images/ic_email.svg';
import iconPass from '../../assets/images/ic_password.svg';
import iconButton from '../../assets/images/ic_button_login.svg';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msgWrongEmail, setMsgWrongEmail] = useState("");
  const [msgWrongPass, setMsgWrongPass] = useState("");

  const handleLogin = () => {
    if (email === "") {
      setMsgWrongEmail("Please fill in your email address");
    } else {
      setMsgWrongEmail("");
    }
    if (password === "") {
      setMsgWrongPass("Please fill in your password");
    } else {
      setMsgWrongPass("");
    }
    if (email !== "" && password !== "") {
      setMsgWrongEmail("");
      setMsgWrongPass("");
      navigate(`/`)
    }
  }

  return (
    <div className='container'>
      <div className='boxContent'>
        <div className='boxImageEarth'>
          <img className='imageEarth' src={imageEarth} alt='Earth' />
        </div>
        <div className='boxLogin'>
          <div className='txtLogin'>Log in</div>
          <div className='txtContentLogin'>Log in to your VPN Server</div>
          <div className={`boxTextInput mrt64 ${msgWrongEmail !== "" ? 'wrong' : ''}`}>
            <img className="iconEmail" src={iconEmail} alt="Icon" />
            <div className='line1' />
            <input className="inputEmail"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)} />
          </div>
          {
            msgWrongEmail !== "" &&
            <div className="txtWrong">{msgWrongEmail}</div>
          }
          <div className={`boxTextInput mrt24 ${msgWrongPass !== "" ? 'wrong' : ''}`}>
            <img className="iconEmail" src={iconPass} alt="Icon" />
            <div className='line1' />
            <input className="inputEmail"
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)} />
          </div>
          {
            msgWrongPass !== "" &&
            <div className="txtWrong">{msgWrongPass}</div>
          }
          <button className="btnLogin mrt24" onClick={handleLogin}>
            <div className="txtButton">Continue</div>
            <img src={iconButton} alt="Icon" className="iconButton" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage