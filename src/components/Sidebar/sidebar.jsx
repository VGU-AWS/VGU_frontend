"use client";

import "./sidebar.css";
import { useRouter } from "next/navigation";

export default function Sidebar({ isOpen, onClose }) {
  const router = useRouter();

   const goToLogin = () => {
    router.push("/login");   // ✅ go to login page
    onClose();               // optional: close sidebar
  };

  if (!isOpen) return null;

  return (
    <div className="sidebar-wrapper">
      
      {/* BACKDROP (click = close) */}
      <div className="sidebar-user-icon" onClick={onClose}></div>

      {/* SIDEBAR PANEL */}
      <div className="sidebar-panel">
        
        <img
          src="/images/user.png"
          className="sidebar-user-icon"
        />

        <button className="login-btn" onClick={goToLogin}>
          Login
        </button>

      </div>
    </div>
  );
}

