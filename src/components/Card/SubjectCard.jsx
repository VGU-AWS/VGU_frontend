"use client";
import Image from "next/image";
import "./SubjectCard.css";

export default function SubjectCard() {
  const handleClick = () => {
    alert("Open subject page"); // later route to subject page
  };

  return (
    <div className="subject-card" onClick={handleClick}>
      <Image
        src="/images/EE_subj.png"
        alt="subject"
        width={80}
        height={80}
        style={{ borderRadius: 10 }}
      />

      <div className="subject-info">
        <h4>ENGINEERING ENGLISH</h4>
        <span style={{ color: "#777" }}>FE PROGRAM</span>

        <div className="subject-meta">
          <span className="subject-rating">4/5 ★</span>
          <span className="subject-tag">Many Lecture</span>
        </div>
      </div>

      <div className="subject-heart">♡</div>
    </div>
  );
}
