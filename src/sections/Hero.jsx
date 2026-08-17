import profileImage from '../assets/profile/profile.jpeg'

function Hero() {

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <section id="home" className="hero">

      <div className="hero-background">

        <div className="hero-glow hero-glow-one"></div>

        <div className="hero-glow hero-glow-two"></div>

      </div>


      <div className="hero-content">

        <div className="hero-copy">

          <p className="hero-label">
            BCA STUDENT / ASPIRING DEVELOPER
          </p>


          <h1 className="hero-title">
            NISHANTHI
            <span>RAVICHANDRAN</span>
          </h1>


          <p className="hero-description">
            I create thoughtful digital experiences by combining
            technology, creativity and continuous learning.
          </p>


          <div className="hero-actions">

            {/* EXPLORE PROJECTS */}

            <button
              className="primary-button"
              onClick={scrollToProjects}
            >
              Explore My Work
              <span>↗</span>
            </button>


            {/* DOWNLOAD RESUME */}

            <a
  className="secondary-button"
  href="/resume/Nishanthi-Resume.jpg"
  download="Nishanthi-Resume.jpg"
>
  Download Resume
  <span>↓</span>
</a>

          </div>


          {/* SOCIAL LINKS */}

          <div className="hero-socials">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub ↗
            </a>


            <a
              href="https://www.linkedin.com/in/nishanthi-ravichandran-425ab6320"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn ↗
            </a>


            <a
              href="mailto:nishanthi.r2006@gmail.com"
              aria-label="Email"
            >
              Email ↗
            </a>

          </div>

        </div>


        {/* PROFILE IMAGE */}

        <div className="hero-visual">

          <div className="image-frame">

            <div className="image-placeholder">

              <img
                src={profileImage}
                alt="Nishanthi Ravichandran"
              />

            </div>

          </div>


          <div className="visual-caption">

            <span>01</span>

            <span>
              PERSONAL PROFILE
            </span>

          </div>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="hero-bottom">

        <span>
          SCROLL TO EXPLORE
        </span>

        <div className="scroll-line"></div>

      </div>

    </section>
  )
}

export default Hero