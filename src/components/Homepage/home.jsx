import Header from "../Header/header";
import Footer from "../Footer/footer";
import SubjectCard from "../Card/SubjectCard";
import "./home.css";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="home-main">
        <div className="home-container">

          <h1 className="home-title">
            STUDY VAULT FOR VGU
          </h1>

          <p className="home-subtitle">
            A document repository specifically for VGU students
          </p>

          <div className="logo" >
            <img
                src="/images/vgu_aws.png"
                alt="aws"
                width="160"
                style={{ marginTop: 40 }}
            />
          </div>

          {/* ACTIONS */}
          <div className="home-actions">
            <button className="home-btn-orange">
              Create a Contribution
            </button>

            <input
              className="home-search"
              placeholder="Search by Program"
            />
          </div>

          {/* FEATURE */}
          <div className="home-feature-row">
            <span className="home-feature-text">FEATURE</span>
            <div className="home-feature-line"></div>
          </div>


          {/* FOUNDATION YEAR */}
          <div className="home-section-header">
            <h2>FOUNDATION YEAR</h2>
            <span className="home-see-more">
                see more of foundation year
            </span>
          </div>
          

          {/* CARDS */}
          <div className="home-grid">
            <SubjectCard />
            <SubjectCard />
            <SubjectCard />
            <SubjectCard />
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
