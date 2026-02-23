"use client";

import { useState } from "react";
import Image from "next/image";
import Sidebar from "../Sidebar/sidebar";
import "./header.css";
import Link from "next/link";
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className = "header-left">
          <div className="vgu-header">
            <img src="/images/vgu.png" alt="VGU Logo" />
          </div>

        {/* SEARCH */}
        <input
          className="header-search"
          placeholder="Search document"
        />
        </div>

        {/* NAV */}
        <nav className="header-nav">
          <Link href="/" className="header-link">
            HOME
          </Link>
          <span className="header-link">CONTACT</span>

          {/* add onClick */}
          <Image
            src="/images/user.png"
            alt="user"
            width={36}
            height={36}
            style={{ borderRadius: "50%", cursor: "pointer" }}
            onClick={() => setOpen(true)}
          />
        </nav>

      </header>

      {/* SIDEBAR */}
      <Sidebar
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}



