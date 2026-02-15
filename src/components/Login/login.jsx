"use client";
import "./login.css";

export default function Login() {
  return (
    <div className="login-page">

      {/* Top-left VGU logo */}
      <div className="vgu-header">
        <img src="/images/vgu.png" alt="VGU Logo" />
      </div>

      {/* Login Card */}
      <div className="login-card">

        <div className="club-logo">
          <img src="/images/vgu_aws.png" alt="AWS VGU Cloud Club" />
        </div>

        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />

        <p className="forgot">Forgot Password?</p>

        <button className="login-btn">Login</button>

      </div>
    </div>
  );
}

