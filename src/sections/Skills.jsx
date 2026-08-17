import { useState } from 'react'

const skills = {
  Python: {
    category: 'PROGRAMMING',
    level: 'WORKING',
    symbol: 'PY',
    code: [
      'students = [',
      '  {"name": "Arun", "marks": 85},',
      '  {"name": "Bala", "marks": 78},',
      '  {"name": "Cathy", "marks": 92},',
      '  {"name": "Divya", "marks": 88}',
      ']',
      '',
      'average = calculate_average(students)',
      'print(average)',
    ],
    description:
      'Programming fundamentals, automation and project development.',
    uses: ['Programming', 'Automation', 'Projects'],
  },

  Java: {
    category: 'PROGRAMMING',
    level: 'WORKING',
    symbol: 'JV',
    code: [
      'class Student {',
      '  String name;',
      '  int marks;',
      '',
      '  Student(String name, int marks) {',
      '    this.name = name;',
      '    this.marks = marks;',
      '  }',
      '}',
      '',
      'Student student = new Student();',
    ],
    description:
      'Object-oriented programming and application development concepts.',
    uses: ['OOP', 'Logic', 'Applications'],
  },

  'C++': {
    category: 'PROGRAMMING',
    level: 'FOUNDATION',
    symbol: 'C+',
    code: [
      '#include <iostream>',
      'using namespace std;',
      '',
      'int main() {',
      '  int marks = 92;',
      '',
      '  if (marks >= 50)',
      '    cout << "PASS";',
      '',
      '  return 0;',
      '}',
    ],
    description:
      'Core programming concepts, logic and problem solving.',
    uses: ['Logic', 'Problem Solving', 'Programming'],
  },

  HTML: {
    category: 'WEB',
    level: 'WORKING',
    symbol: '</>',
    code: [
      '<main class="portfolio">',
      '  <header>',
      '    <h1>NISHANTHI</h1>',
      '  </header>',
      '',
      '  <section>',
      '    <h2>Creative Developer</h2>',
      '    <p>Building digital experiences.</p>',
      '  </section>',
      '</main>',
    ],
    description:
      'Building the structure and foundation of responsive websites.',
    uses: ['Web Structure', 'Interfaces', 'Layouts'],
  },

  CSS: {
    category: 'WEB',
    level: 'WORKING',
    symbol: '#',
    code: [
      '.card {',
      '  display: grid;',
      '  place-items: center;',
      '  border-radius: 20px;',
      '  transition: 0.4s ease;',
      '}',
      '',
      '.card:hover {',
      '  transform: translateY(-10px);',
      '  box-shadow: 0 0 40px purple;',
      '}',
    ],
    description:
      'Creating responsive layouts, visual systems and interactive styling.',
    uses: ['UI Design', 'Animation', 'Responsive'],
  },

  WordPress: {
    category: 'WEB',
    level: 'WORKING',
    symbol: 'WP',
    code: [
      'CREATE WEBSITE',
      '',
      'SELECT THEME',
      '      ↓',
      'CUSTOMIZE DESIGN',
      '      ↓',
      'ADD CONTENT',
      '      ↓',
      'PUBLISH WEBSITE',
    ],
    description:
      'Website creation, customization and content management.',
    uses: ['CMS', 'Websites', 'Customization'],
  },

  Excel: {
    category: 'TOOLS',
    level: 'WORKING',
    symbol: 'XL',
    code: [
      'A1 = "STUDENT"',
      'B1 = "MARKS"',
      '',
      'A2 = "ARUN"',
      'B2 = 85',
      '',
      'AVERAGE(B2:B5)',
      'SORT(B2:B5)',
    ],
    description:
      'Organizing information, handling data and creating reports.',
    uses: ['Data', 'Reports', 'Analysis'],
  },

  'Video Editing': {
    category: 'CREATIVE',
    level: 'CREATIVE',
    symbol: '▶',
    code: [
      'IMPORT FOOTAGE',
      '',
      'CUT → ARRANGE',
      '',
      'ADD MUSIC',
      '',
      'COLOR → TRANSITION',
      '',
      'EXPORT FINAL VIDEO',
    ],
    description:
      'Turning raw footage into engaging visual stories and digital content.',
    uses: ['Editing', 'Storytelling', 'Content'],
  },
}


/* =========================================
   VISUAL OUTPUTS
========================================= */

function PythonOutput() {
  const students = [
    ['ARUN', 85],
    ['BALA', 78],
    ['CATHY', 92],
    ['DIVYA', 88],
  ]

  return (
    <div className="visual-output python-output">

      <div className="output-title">
        STUDENT PERFORMANCE
        <span>PYTHON RESULT</span>
      </div>

      <div className="student-table">

        {students.map(([name, mark]) => (

          <div className="student-row" key={name}>

            <span>{name}</span>

            <div className="student-bar">
              <i style={{ width: `${mark}%` }}></i>
            </div>

            <strong>{mark}</strong>

          </div>

        ))}

      </div>

      <div className="average-result">
        <small>AVERAGE</small>
        <strong>85.75</strong>
      </div>

    </div>
  )
}


function JavaOutput() {
  return (
    <div className="visual-output java-output">

      <div className="output-title">
        OBJECT CREATION
        <span>JAVA RESULT</span>
      </div>

      <div className="object-grid">

        <div className="object-card">
          <span>OBJECT 01</span>
          <strong>Student</strong>
          <small>name = Arun</small>
          <small>marks = 85</small>
        </div>

        <div className="object-card">
          <span>OBJECT 02</span>
          <strong>Student</strong>
          <small>name = Cathy</small>
          <small>marks = 92</small>
        </div>

      </div>

      <div className="execution-success">
        ● OBJECT CREATED SUCCESSFULLY
      </div>

    </div>
  )
}


function CppOutput() {
  return (
    <div className="visual-output cpp-output">

      <div className="console-window">

        <div className="console-header">
          C++ CONSOLE
        </div>

        <div className="console-body">

          <span>
            &gt; compiling main.cpp
          </span>

          <span>
            &gt; checking conditions...
          </span>

          <strong>
            PASS
          </strong>

          <span>
            &gt; process exited with code 0
          </span>

        </div>

      </div>

    </div>
  )
}


function HtmlOutput() {
  return (
    <div className="visual-output html-output">

      <div className="browser-window">

        <div className="browser-bar">
          <span></span>
          <span></span>
          <span></span>
          <small>localhost / portfolio</small>
        </div>

        <div className="browser-page">

          <div className="mini-nav">
            NISHANTHI
            <span>WORK • ABOUT • CONTACT</span>
          </div>

          <div className="mini-hero">

            <small>CREATIVE DEVELOPER</small>

            <h4>
              Building
              <br />
              digital experiences.
            </h4>

            <button>
              EXPLORE
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}


function CssOutput() {
  return (
    <div className="visual-output css-output">

      <div className="css-demo">

        <div className="css-orbit"></div>

        <div className="css-card">

          <span>CSS</span>

          <strong>
            HOVER ME
          </strong>

          <small>
            MOTION + DESIGN
          </small>

        </div>

      </div>

      <div className="css-values">

        <span>LAYOUT</span>
        <span>ANIMATION</span>
        <span>RESPONSIVE</span>

      </div>

    </div>
  )
}


function WordPressOutput() {
  return (
    <div className="visual-output wordpress-output">

      <div className="wp-browser">

        <div className="wp-top">
          WORDPRESS
          <span>LIVE PREVIEW</span>
        </div>

        <div className="wp-content">

          <small>WELCOME TO</small>

          <h4>
            MY DIGITAL
            <br />
            SPACE
          </h4>

          <p>
            A customized web experience.
          </p>

          <button>
            DISCOVER
          </button>

        </div>

      </div>

    </div>
  )
}


function ExcelOutput() {
  return (
    <div className="visual-output excel-output">

      <div className="excel-title">
        STUDENT DATA
        <span>ANALYSIS COMPLETE</span>
      </div>

      <div className="excel-grid">

        <div>NAME</div>
        <div>MARKS</div>

        <div>ARUN</div>
        <div>85</div>

        <div>BALA</div>
        <div>78</div>

        <div>CATHY</div>
        <div>92</div>

        <div>DIVYA</div>
        <div>88</div>

      </div>

      <div className="excel-chart">

        <i style={{ height: '65%' }}></i>
        <i style={{ height: '45%' }}></i>
        <i style={{ height: '85%' }}></i>
        <i style={{ height: '70%' }}></i>

      </div>

    </div>
  )
}


function VideoOutput() {
  return (
    <div className="visual-output video-output">

      <div className="video-preview">

        <div className="play-button">
          ▶
        </div>

        <span>
          FINAL CUT
        </span>

      </div>

      <div className="timeline">

        <div className="timeline-label">
          TIMELINE
        </div>

        <div className="timeline-track">

          <i></i>
          <i></i>
          <i></i>
          <i></i>

        </div>

      </div>

      <div className="video-status">
        00:00:18 / 00:00:42
      </div>

    </div>
  )
}


function VisualOutput({ skill }) {

  if (skill === 'Python') return <PythonOutput />
  if (skill === 'Java') return <JavaOutput />
  if (skill === 'C++') return <CppOutput />
  if (skill === 'HTML') return <HtmlOutput />
  if (skill === 'CSS') return <CssOutput />
  if (skill === 'WordPress') return <WordPressOutput />
  if (skill === 'Excel') return <ExcelOutput />
  if (skill === 'Video Editing') return <VideoOutput />

  return null
}


/* =========================================
   MAIN COMPONENT
========================================= */

function Skills() {

  const [activeSkill, setActiveSkill] = useState('Python')
  const [running, setRunning] = useState(false)
  const [executed, setExecuted] = useState(false)

  const currentSkill = skills[activeSkill]

  const selectSkill = (name) => {
    setActiveSkill(name)
    setRunning(false)
    setExecuted(false)
  }

  const runBuild = () => {

    setRunning(true)
    setExecuted(false)

    setTimeout(() => {

      setRunning(false)
      setExecuted(true)

    }, 1000)
  }

  return (

    <section id="skills" className="workbench-section">

      <div className="workbench-topline">

        <span>
          03 / CAPABILITIES
        </span>

        <span className="workbench-status">
          <i></i>
          INTERACTIVE WORKBENCH
        </span>

      </div>


      <div className="workbench-heading">

        <div>

          <p className="workbench-kicker">
            TECHNICAL + CREATIVE
          </p>

          <h2>
            Skill
            <span>Workbench.</span>
          </h2>

        </div>

        <div className="workbench-intro">

          <span>
            SELECT → CODE → EXECUTE
          </span>

          <p>
            Explore the technologies I use and
            see a visual representation of what
            happens when the code runs.
          </p>

        </div>

      </div>


      <div className="workbench">


        {/* TOOL PANEL */}

        <aside className="tool-panel">

          <div className="tool-panel-header">

            <span>
              SELECT TOOL
            </span>

            <small>
              {Object.keys(skills).length} MODULES
            </small>

          </div>


          <div className="tool-list">

            {Object.entries(skills).map(([name, skill]) => (

              <button
                key={name}
                className={`tool-button ${
                  activeSkill === name ? 'active' : ''
                }`}
                onClick={() => selectSkill(name)}
              >

                <span className="tool-symbol">
                  {skill.symbol}
                </span>

                <span className="tool-name">
                  {name}
                </span>

                <span className="tool-arrow">
                  ↗
                </span>

              </button>

            ))}

          </div>

        </aside>


        {/* CODE + OUTPUT */}

        <main className="build-panel">

          <div className="build-header">

            <div>

              <span className="build-category">
                {currentSkill.category}
              </span>

              <h3>
                {activeSkill}
              </h3>

            </div>

            <span className="build-number">
              0{Object.keys(skills).indexOf(activeSkill) + 1}
            </span>

          </div>


          <div className="code-output-grid">


            {/* CODE */}

            <div className="code-window">

              <div className="code-header">

                <span>
                  SOURCE CODE
                </span>

                <small>
                  {activeSkill.toLowerCase()}
                </small>

              </div>


              <div className="code-body">

                {currentSkill.code.map((line, index) => (

                  <div
                    className="code-line"
                    key={`${activeSkill}-${index}`}
                  >

                    <span>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <code>
                      {line || ' '}
                    </code>

                  </div>

                ))}

              </div>

            </div>


            {/* OUTPUT */}

            <div className="output-window">

              <div className="output-header">

                <span>
                  VISUAL OUTPUT
                </span>

                <small>
                  {executed ? 'EXECUTED' : 'WAITING'}
                </small>

              </div>


              <div className="output-body">

                {!executed && !running && (

                  <div className="output-placeholder">

                    <div className="output-cursor">
                      ▸
                    </div>

                    <strong>
                      READY TO EXECUTE
                    </strong>

                    <span>
                      Run the code to generate
                      the visual result.
                    </span>

                  </div>

                )}


                {running && (

                  <div className="execution-screen">

                    <div className="execution-spinner">
                      ◌
                    </div>

                    <strong>
                      EXECUTING
                    </strong>

                    <span>
                      Processing {activeSkill}...
                    </span>

                  </div>

                )}


                {executed && (

                  <div className="visual-result">

                    <VisualOutput
                      skill={activeSkill}
                    />

                  </div>

                )}

              </div>

            </div>

          </div>


          {/* EXECUTE */}

          <button
            className={`run-button ${
              running ? 'running' : ''
            }`}
            onClick={runBuild}
            disabled={running}
          >

            <span className="run-icon">
              {running ? '◌' : '▶'}
            </span>

            <span>
              {running
                ? 'EXECUTING...'
                : 'EXECUTE CODE'}
            </span>

            <span className="run-arrow">
              ↗
            </span>

          </button>

        </main>


        {/* INFO */}

        <aside className="info-panel">

          <div className="info-top">

            <span>
              MODULE STATUS
            </span>

            <strong>
              {currentSkill.level}
            </strong>

          </div>


          <div className="info-description">

            <span>
              WHAT I USE IT FOR
            </span>

            <p>
              {currentSkill.description}
            </p>

          </div>


          <div className="use-list">

            {currentSkill.uses.map((use, index) => (

              <div
                className="use-item"
                key={use}
              >

                <span>
                  0{index + 1}
                </span>

                <strong>
                  {use}
                </strong>

              </div>

            ))}

          </div>


          <div className="info-footer">

            <span>
              CURRENT MODULE
            </span>

            <strong>
              {activeSkill.toUpperCase()}
            </strong>

          </div>

        </aside>

      </div>


      {/* LEARNING */}

      <div className="learning-area">

        <div className="learning-heading">

          <span>
            NEXT / 04
          </span>

          <h3>
            What I'm building toward.
          </h3>

        </div>


        <div className="learning-grid">

          <div className="learning-card">

            <span>01</span>

            <h4>
              DEVELOPMENT
            </h4>

            <p>
              Web • Software • Applications
            </p>

          </div>


          <div className="learning-card">

            <span>02</span>

            <h4>
              CREATIVE TECHNOLOGY
            </h4>

            <p>
              Editing • Digital Experiences • Design
            </p>

          </div>


          <div className="learning-card">

            <span>03</span>

            <h4>
              NEXT
            </h4>

            <p>
              React • AI • Advanced Development
            </p>

          </div>

        </div>

      </div>


      <div className="workbench-bottom">

        <span>
          03 / SKILLS
        </span>

        <span>
          SELECT → CODE → EXECUTE
        </span>

      </div>

    </section>
  )
}

export default Skills