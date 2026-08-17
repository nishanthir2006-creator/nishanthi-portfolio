import { useState } from 'react'

const projects = [
  {
    id: '01',
    title: 'TRANSITSURE',
    subtitle: 'SMART STUDENT TRANSPORT',
    category: 'DEVELOPMENT',
    year: '2026',
    description:
      'A smart student bus attendance and transport management system designed to improve student safety, attendance tracking and transport monitoring.',
    technologies: [
      'Python',
      'CustomTkinter',
      'SQLite',
      'OpenCV',
      'QR / Barcode',
    ],
    features: [
      'Student Registration',
      'Morning Bus Check-In',
      'Return Journey Check-In',
      'Missing Student Detection',
      'Attendance History',
      'Transport Reports',
    ],
    demo: '#',
    github: '#',
  },

  {
    id: '02',
    title: 'RESUME BUILDER',
    subtitle: 'SMART RESUME GENERATOR',
    category: 'WEB',
    year: '2026',
    description:
      'A clean web-based resume builder concept focused on structured information, professional layouts and easy editing.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Responsive UI',
    ],
    features: [
      'Personal Details',
      'Education Section',
      'Skills Section',
      'Project Section',
      'Live Preview',
      'Print Ready Layout',
    ],
    demo: 'https://puvishasundar.github.io/Professional-Resume-Builder-by-Nishanthi/',
    github: 'https://puvishasundar.github.io/Professional-Resume-Builder-by-Nishanthi/',
  },

  {
    id: '03',
    title: 'DISPLAY LAB',
    subtitle: 'MOBILE DISPLAY CUSTOMIZATION',
    category: 'DEVELOPMENT',
    year: '2026',
    description:
      'An experimental interface exploring mobile display customization, visual controls and interactive screen experiences.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'UI Design',
    ],
    features: [
      'Display Controls',
      'Theme Selection',
      'Visual Customization',
      'Interactive Panels',
      'Responsive Interface',
    ],
    demo: 'https://nishanthir2006-creator.github.io/Display-Lab/',
    github: 'https://github.com/nishanthir2006-creator/Display-Lab/tree/main',
  },


  {
    id: '05',
    title: 'KEEP NOTES',
    subtitle: 'SMART NOTE MANAGEMENT',
    category: 'WEB',
    year: '2026',
    description:
      'A simple and interactive note-taking website designed to create, organize, search and manage personal notes through a clean digital workspace.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Local Storage',
      'Responsive UI',
    ],
    features: [
      'Create Notes',
      'Edit Notes',
      'Delete Notes',
      'Search Notes',
      'Pin Important Notes',
      'Local Data Storage',
    ],
    demo: 'https://nishanthir2006-creator.github.io/Keep-Notes-/',
    github: 'https://github.com/nishanthir2006-creator/Keep-Notes-',
  },

  {
    id: '06',
    title: 'WIDGETS CUSTOMIZER',
    subtitle: 'MOBILE WIDGET EXPERIENCE',
    category: 'DEVELOPMENT',
    year: '2026',
    description:
      'An interactive mobile widget customization concept that allows users to experiment with widget layouts, styles, colors and information displays.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Responsive UI',
      'UI Design',
    ],
    features: [
      'Widget Selection',
      'Clock Widget',
      'Weather Widget',
      'Theme Customization',
      'Color Controls',
      'Live Widget Preview',
    ],
    demo: 'https://nishanthir2006-creator.github.io/Mobile-widgets-customizer/',
    github: 'https://github.com/nishanthir2006-creator/Advanced-Mobile-widgets-customizer',
  },
]


/* =========================================
   PROJECT PREVIEW
========================================= */

function ProjectPreview({ project }) {

  return (
    <div className="project-preview-screen">

      <div className="preview-grid"></div>

      <div className="preview-content">

        <span className="preview-number">
          PROJECT {project.id}
        </span>

        <div className="preview-symbol">
          {project.id}
        </div>

        <strong>
          {project.title}
        </strong>

        <small>
          {project.category}
        </small>

      </div>

      <div className="preview-corner top-left"></div>

      <div className="preview-corner top-right"></div>

      <div className="preview-corner bottom-left"></div>

      <div className="preview-corner bottom-right"></div>

    </div>
  )
}


/* =========================================
   PROJECTS
========================================= */

function Projects() {

  const [activeProject, setActiveProject] =
    useState(null)

  const [filter, setFilter] =
    useState('ALL')


  const categories = [
    'ALL',
    'DEVELOPMENT',
    'WEB',
    'CREATIVE',
  ]


  const visibleProjects =
    filter === 'ALL'
      ? projects
      : projects.filter(
          (project) =>
            project.category === filter
        )


  const toggleProject = (id) => {

    if (activeProject === id) {
      setActiveProject(null)
    } else {
      setActiveProject(id)
    }

  }


  return (

    <section
      id="projects"
      className="projects-section"
    >

      {/* HEADER */}

      <div className="projects-top">

        <div>

          <span className="projects-label">
            04 / SELECTED WORK
          </span>

          <h2>
            PROJECT
            <span>ARCHIVE</span>
          </h2>

        </div>

        <p>
          Projects built through
          experimentation, learning
          and creative problem solving.
        </p>

      </div>


      {/* FILTER */}

      <div className="projects-filter">

        <span>
          EXPLORE BY TYPE
        </span>

        <div>

          {categories.map(
            (category) => (

              <button
                key={category}
                className={
                  filter === category
                    ? 'filter-active'
                    : ''
                }
                onClick={() =>
                  setFilter(category)
                }
              >
                {category}
              </button>

            )
          )}

        </div>

      </div>


      {/* PROJECT LIST */}

      <div className="project-list">

        {visibleProjects.map(
          (project) => {

            const isOpen =
              activeProject === project.id

            return (

              <article
                className={`project-card ${
                  isOpen
                    ? 'project-opened'
                    : ''
                }`}
                key={project.id}
              >

                {/* CARD HEADER */}

                <div className="project-card-header">

                  <span>
                    {project.id}
                  </span>

                  <span>
                    {project.category}
                  </span>

                  <span>
                    {project.year}
                  </span>

                </div>


                {/* MAIN PROJECT AREA */}

                <div className="project-main">

                  <div className="project-information">

                    <span className="project-subtitle">
                      {project.subtitle}
                    </span>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>


                    {/* OPEN BUTTON */}

                    <button
                      className="open-project-button"
                      onClick={() =>
                        toggleProject(
                          project.id
                        )
                      }
                    >

                      <span>
                        {isOpen
                          ? 'CLOSE PROJECT'
                          : 'OPEN PROJECT'}
                      </span>

                      <strong>
                        {isOpen
                          ? '−'
                          : '↗'}
                      </strong>

                    </button>

                  </div>


                  {/* PROJECT PREVIEW */}

                  <div
                    className="project-preview"
                    onClick={() =>
                      toggleProject(
                        project.id
                      )
                    }
                  >

                    <ProjectPreview
                      project={project}
                    />

                    <div className="preview-hover">
                      CLICK TO INTERACT ↗
                    </div>

                  </div>

                </div>


                {/* TECHNOLOGY */}

                <div className="technology-row">

                  <span>
                    TECHNOLOGY
                  </span>

                  <div>

                    {project.technologies.map(
                      (technology) => (

                        <span
                          key={technology}
                        >
                          {technology}
                        </span>

                      )
                    )}

                  </div>

                </div>


                {/* DETAILS */}

                {isOpen && (

                  <div className="project-details">

                    <div className="details-intro">

                      <span>
                        PROJECT DETAILS
                      </span>

                      <h4>
                        Built to
                        <br />
                        solve something.
                      </h4>

                      <p>
                        This project combines
                        technical learning with
                        practical problem solving.
                        It represents my approach
                        to building useful and
                        creative digital experiences.
                      </p>

                    </div>


                    {/* FEATURES */}

                    <div className="details-features">

                      <span>
                        KEY FEATURES
                      </span>

                      <div>

                        {project.features.map(
                          (
                            feature,
                            index
                          ) => (

                            <div
                              className="feature-item"
                              key={feature}
                            >

                              <small>
                                {String(
                                  index + 1
                                ).padStart(
                                  2,
                                  '0'
                                )}
                              </small>

                              <strong>
                                {feature}
                              </strong>

                            </div>

                          )
                        )}

                      </div>

                    </div>


                    {/* ACTION BUTTONS */}

                    <div className="project-actions">

                      <a
                        href={project.demo}
                        className="live-demo-button"
                        onClick={(event) => {

                          if (
                            project.demo === '#'
                          ) {

                            event.preventDefault()

                            alert(
                              'Your Live Demo link will be added here.'
                            )

                          }

                        }}
                      >

                        <span>
                          LIVE DEMO
                        </span>

                        <strong>
                          ↗
                        </strong>

                      </a>


                      <a
                        href={project.github}
                        className="github-button"
                        onClick={(event) => {

                          if (
                            project.github === '#'
                          ) {

                            event.preventDefault()

                            alert(
                              'Your GitHub link will be added here.'
                            )

                          }

                        }}
                      >

                        <span>
                          VIEW SOURCE
                        </span>

                        <strong>
                          ↗
                        </strong>

                      </a>

                    </div>

                  </div>

                )}

              </article>

            )

          }
        )}

      </div>


      {/* BOTTOM */}

      <div className="projects-bottom">

        <span>
          04 / PROJECTS
        </span>

        <span>
          BUILD → TEST → IMPROVE → REPEAT
        </span>

      </div>

    </section>
  )
}


export default Projects