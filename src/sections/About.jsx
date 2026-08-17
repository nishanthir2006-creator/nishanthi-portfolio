function About() {
  return (
    <section id="about" className="about-section">

      <div className="section-heading">
        <span className="section-number">01</span>

        <p className="section-label">
          PROFILE
        </p>

        <h2>
          A little
          <span>about me.</span>
        </h2>
      </div>

      <div className="about-content">

        <div className="about-intro">
          <p className="about-lead">
            I'm <strong>Nishanthi Ravichandran</strong>,
            a BCA student and aspiring developer who enjoys
            turning ideas into practical digital experiences.
          </p>

          <p className="about-text">
            I'm continuously developing my skills in programming,
            web technologies and digital tools while exploring
            new ways to build useful and creative projects.
          </p>

          <p className="about-text">
            My goal is to grow as a developer, gain real-world
            experience and create technology that is both
            functional and meaningful.
          </p>

          <a
            href="/resume.pdf"
            download
            className="about-resume"
          >
            Download Resume
            <span>↓</span>
          </a>
        </div>

        <div className="about-details">

  <div className="detail-card interactive-card">
    <div className="card-front">
      <span className="detail-number">01</span>

      <div>
        <small>EDUCATION</small>
        <h3>BCA</h3>
        <p>Click to explore ↗</p>
      </div>
    </div>

    <div className="card-back">
      <span className="detail-number">01 / EDUCATION</span>

      <h4>Bachelor of Computer Applications</h4>

      <p>
        Theivanai Ammal College for Women
      </p>

      <p>
        2024 — 2027
      </p>

      <span className="card-action">
        Annamalai University ↗
      </span>
    </div>
  </div>


  <div className="detail-card interactive-card">
    <div className="card-front">
      <span className="detail-number">02</span>

      <div>
        <small>ACADEMIC PERFORMANCE</small>
        <h3>8.34</h3>
        <p>Click to explore ↗</p>
      </div>
    </div>

    <div className="card-back">
      <span className="detail-number">02 / ACADEMICS</span>

      <h4>Current Academic Performance</h4>

      <div className="academic-score">
        <strong>8.34</strong>
        <span>CGPA</span>
      </div>

      <p>
        Overall academic percentage: 80%
      </p>
    </div>
  </div>


  <div className="detail-card interactive-card">
    <div className="card-front">
      <span className="detail-number">03</span>

      <div>
        <small>DEVELOPMENT</small>
        <h3>BUILDING</h3>
        <p>Click to explore ↗</p>
      </div>
    </div>

    <div className="card-back">
      <span className="detail-number">03 / DEVELOPMENT</span>

      <h4>Technical Focus</h4>

      <div className="skill-mini-list">
        <span>Python</span>
        <span>Java</span>
        <span>C++</span>
        <span>HTML</span>
        <span>WordPress</span>
        <span>MS Office</span>
      </div>

      <p>
        Continuously learning and building practical projects.
      </p>
    </div>
  </div>


  <div className="detail-card interactive-card">
    <div className="card-front">
      <span className="detail-number">04</span>

      <div>
        <small>EXPERIENCE</small>
        <h3>EXPLORE</h3>
        <p>Click to explore ↗</p>
      </div>
    </div>

    <div className="card-back">
      <span className="detail-number">04 / EXPERIENCE</span>

      <h4>Projects + Internships</h4>

      <p>
        Building practical experience through internships,
        certifications and independent projects.
      </p>

      <span className="card-action">
        View my journey ↗
      </span>
    </div>
  </div>

</div>
          </div>

      <div className="about-bottom">

        <span>01 / PROFILE</span>

        <span>
          NISHANTHI RAVICHANDRAN
        </span>

      </div>

    </section>
  )
}

export default About