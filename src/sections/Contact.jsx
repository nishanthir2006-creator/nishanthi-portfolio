function Contact() {
  return (
    <section id="contact" className="contact-section">

      {/* HEADER */}
      <div className="contact-header">

        <span>06 / CONTACT</span>

        <h2>
          LET'S
          <span>CONNECT.</span>
        </h2>

        <p>
          Have an idea, opportunity, project, or simply want
          to say hello? I'd love to hear from you.
        </p>

      </div>


      {/* CONTACT CONTENT */}
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-intro">

          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h3>
            LET'S CREATE
            <br />
            SOMETHING
            <br />
            <span>GREAT.</span>
          </h3>

          <p>
            I'm always open to learning opportunities,
            internships, collaborations and interesting
            projects.
          </p>

        </div>


        {/* RIGHT SIDE */}
        <div className="contact-links">

          {/* EMAIL */}
          <a
            href="mailto:nishanthi.r2006@gmail.com"
            className="contact-card"
          >
            <span>01 / EMAIL</span>

            <strong>
              nishanthi.r2006@gmail.com
            </strong>

            <small>
              SEND AN EMAIL ↗
            </small>
          </a>


          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/nishanthi-ravichandran-425ab6320"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span>02 / LINKEDIN</span>

            <strong>
              Nishanthi Ravichandran
            </strong>

            <small>
              CONNECT ON LINKEDIN ↗
            </small>
          </a>


          {/* GITHUB */}
          <a
            href="https://share.google/yqTgqmakozueXXL6C"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span>03 / GITHUB</span>

            <strong>
              GitHub Profile
            </strong>

            <small>
              VIEW MY PROJECTS ↗
            </small>
          </a>

        </div>

      </div>


      {/* FOOTER */}
      <div className="contact-bottom">

        <span>
          NISHANTHI RAVICHANDRAN
        </span>

        <span>
          BCA • DEVELOPER • CREATIVE LEARNER
        </span>

        <span>
          © 2026
        </span>

      </div>

    </section>
  );
}

export default Contact;