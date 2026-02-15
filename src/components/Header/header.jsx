
import Image from "next/image";
import "./header.css";

export default function Header() {
  return (
    <header className="header">

      <div className="vgu-header">
        <img src="/images/vgu.png" alt="VGU Logo" />
      </div>

      {/* SEARCH */}
      <input
        className="header-search"
        placeholder="Search document"
      />

      {/* NAV */}
      <nav className="header-nav">
        <span className="header-link">HOME</span>
        <span className="header-link">CONTACT</span>

        <Image
          src="/images/user.png"
          alt="user"
          width={36}
          height={36}
          style={{ borderRadius: "50%" }}
        />
      </nav>

    </header>
  );
}
