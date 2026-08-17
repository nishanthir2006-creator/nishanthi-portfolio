import { useState } from 'react'

const menuItems = [
  { number: '01', label: 'Profile', id: 'about' },
  { number: '02', label: 'Education', id: 'education' },
  { number: '03', label: 'Skills', id: 'skills' },
  { number: '04', label: 'Projects', id: 'projects' },
  { number: '05', label: 'Certifications', id: 'certifications' },
  { number: '06', label: 'Experience', id: 'internships' },
  { number: '07', label: 'Contact', id: 'contact' },
]

function Menu() {
  const [open, setOpen] = useState(false)

  const navigateTo = (id) => {
    const section = document.getElementById(id)

    if (section) {
      setOpen(false)

      setTimeout(() => {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 250)
    }
  }

  return (
    <>
      <button
        type="button"
        className={`menu-trigger ${open ? 'active' : ''}`}
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? 'Close navigation' : 'Open navigation'}
      >
        <span>{open ? 'CLOSE' : 'MENU'}</span>
        <span className="menu-symbol">
          {open ? '×' : '+'}
        </span>
      </button>

      <div className={`menu-overlay ${open ? 'open' : ''}`}>
        <div className="menu-inner">

          <p className="menu-kicker">
            NAVIGATION
          </p>

          <div className="menu-list">
            {menuItems.map((item) => (
              <button
                type="button"
                key={item.id}
                className="menu-item"
                onClick={() => navigateTo(item.id)}
              >
                <span className="menu-number">
                  {item.number}
                </span>

                <span className="menu-label">
                  {item.label}
                </span>

                <span className="menu-arrow">
                  ↗
                </span>
              </button>
            ))}
          </div>

          <p className="menu-footer">
            NISHANTHI RAVICHANDRAN / PORTFOLIO
          </p>

        </div>
      </div>
    </>
  )
}

export default Menu