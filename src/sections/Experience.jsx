import { useState } from "react";

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      id: 1,
      year: "2024",
      type: "INTERNSHIP",
      title: "WEB DEVELOPMENT",
      company: "Dusk Coder Technosoft Corp.",
      duration: "Internship",
      description:
        "Worked on web development fundamentals and gained practical experience in building and understanding modern websites.",
      skills: [
        "HTML",
        "CSS",
        "Web Development",
        "Frontend Basics",
      ],
      certificate: "/certificates/internships/dusk-coder.jpg",
    },

    {
      id: 2,
      year: "2025",
      type: "INTERNSHIP",
      title: "WORDPRESS / CMS",
      company: "Alfrin Technologies",
      duration: "10 Days",
      description:
        "Gained practical experience with WordPress and CMS management while learning how websites are created, managed, and maintained.",
      skills: [
        "WordPress",
        "CMS Management",
        "Website Management",
      ],
      certificate:
        "/certificates/internships/alfrin-technologies.jpg",
    },

    {
      id: 3,
      year: "2026",
      type: "INTERNSHIP",
      title: "DATA ANALYTICS",
      company: "Nexila Technologies",
      duration: "Internship",
      description:
        "Explored data analytics workflows and gained practical exposure to data processing, analysis, and working with structured data.",
      skills: [
        "Data Analytics",
        "Data Processing",
        "Data Analysis",
      ],
      certificate:
        "/certificates/internships/nexila-technologies.jpg",
    },
  ];

  return (
    <section id="experience" className="experience-section">

      {/* HEADER */}
      <div className="experience-header">
        <span>04 / EXPERIENCE</span>

        <h2>
          MY
          <span> JOURNEY.</span>
        </h2>

        <p>
          A timeline of my internships, practical learning,
          and professional experiences.
        </p>
      </div>


      {/* TIMELINE */}
      <div className="experience-timeline">

        {experiences.map((experience) => (
          <article
            className="experience-item"
            key={experience.id}
          >

            {/* YEAR */}
            <div className="experience-year">
              {experience.year}
            </div>


            {/* TIMELINE DOT */}
            <div className="experience-dot"></div>


            {/* EXPERIENCE CARD */}
            <div className="experience-card">

              <span>
                {String(experience.id).padStart(2, "0")} /{" "}
                {experience.type}
              </span>

              <h3>
                {experience.title}
              </h3>

              <h4>
                {experience.company}
              </h4>

              <p>
                {experience.description}
              </p>

              <button
                type="button"
                className="experience-details-button"
                onClick={() =>
                  setSelectedExperience(experience)
                }
              >
                VIEW DETAILS ↗
              </button>

            </div>
          </article>
        ))}
      </div>


      {/* =================================================
          EXPERIENCE DETAILS POPUP
          ================================================= */}

      {selectedExperience && (
        <div
          className="experience-modal"
          onClick={() => setSelectedExperience(null)}
        >

          <div
            className="experience-modal-content"
            onClick={(event) => event.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            <button
              type="button"
              className="experience-close"
              onClick={() =>
                setSelectedExperience(null)
              }
            >
              ×
            </button>


            {/* LEFT INFORMATION */}
            <div className="experience-modal-info">

              <span>
                {selectedExperience.year} /{" "}
                {selectedExperience.type}
              </span>

              <h2>
                {selectedExperience.title}
              </h2>

              <h3>
                {selectedExperience.company}
              </h3>


              {/* DURATION */}
              <div className="experience-detail-row">

                <strong>
                  DURATION
                </strong>

                <p>
                  {selectedExperience.duration}
                </p>

              </div>


              {/* EXPERIENCE */}
              <div className="experience-detail-row">

                <strong>
                  EXPERIENCE
                </strong>

                <p>
                  {selectedExperience.description}
                </p>

              </div>


              {/* SKILLS */}
              <div className="experience-detail-row">

                <strong>
                  SKILLS ACQUIRED
                </strong>

                <div className="experience-skills">

                  {selectedExperience.skills.map(
                    (skill) => (
                      <span key={skill}>
                        {skill}
                      </span>
                    )
                  )}

                </div>

              </div>

            </div>


            {/* RIGHT CERTIFICATE */}
            <div className="experience-certificate">

              <span>
                EXPERIENCE CERTIFICATE
              </span>

              <div className="experience-certificate-frame">

                <img
                  src={selectedExperience.certificate}
                  alt={`${selectedExperience.company} certificate`}
                />

              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}

export default Experience;