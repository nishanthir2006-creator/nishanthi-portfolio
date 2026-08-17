import { useState } from 'react'
import { certificateFolders } from '../data/certificates'

function CertificateVault() {

  const [selectedFolder, setSelectedFolder] = useState(null)

  const [selectedCertificate, setSelectedCertificate] =
    useState(null)


  /* =====================================
     FOLDER VIEW
  ===================================== */

  if (!selectedFolder) {

    return (

      <section
        id="certifications"
        className="certificate-vault"
      >

        <div className="certificate-top">

          <span>
            05 / CERTIFICATE VAULT
          </span>

          <span>
            {certificateFolders.length} ARCHIVES
          </span>

        </div>


        <div className="certificate-heading">

          <span>
            ACHIEVEMENT ARCHIVE
          </span>

          <h2>
            MY
            <span>CERTIFICATES.</span>
          </h2>

          <p>
            A growing archive of certifications,
            internships and industry experiences
            collected throughout my learning journey.
          </p>

        </div>


        <div className="certificate-folders">

          {certificateFolders.map(
            (folder, index) => (

              <button
                className="certificate-folder"
                key={folder.id}
                onClick={() =>
                  setSelectedFolder(folder)
                }
              >

                <div className="folder-top">

                  <span>
                    0{index + 1}
                  </span>

                  <span>
                    {folder.type}
                  </span>

                </div>


                <div className="folder-icon">
                  +
                </div>


                <div className="folder-info">

                  <h3>
                    {folder.name}
                  </h3>

                  <p>
                    {folder.certificates.length}
                    {' '}
                    {folder.certificates.length === 1
                      ? 'ITEM'
                      : 'ITEMS'}
                  </p>

                </div>


                <div className="folder-arrow">
                  ↗
                </div>

              </button>

            )
          )}

        </div>


        <div className="certificate-bottom">

          <span>
            25 ITEMS ARCHIVED
          </span>

          <span>
            SELECT AN ARCHIVE TO EXPLORE
          </span>

        </div>

      </section>

    )
  }


  /* =====================================
     CERTIFICATE VIEW
  ===================================== */

  return (

    <section
      id="certifications"
      className="certificate-vault"
    >

      <div className="certificate-top">

        <button
          className="vault-back"
          onClick={() => {
            setSelectedFolder(null)
            setSelectedCertificate(null)
          }}
        >
          ← BACK TO VAULT
        </button>

        <span>
          {selectedFolder.certificates.length} ITEMS
        </span>

      </div>


      <div className="folder-heading">

        <span>
          {selectedFolder.type}
        </span>

        <h2>
          {selectedFolder.name}
        </h2>

      </div>


      <div className="certificate-grid">

        {selectedFolder.certificates.map(
          (certificate, index) => (

            <article
              className="certificate-card"
              key={certificate.id}
            >

              <div className="certificate-image">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  loading="lazy"
                />

                <div className="certificate-overlay">

                  <button
                    onClick={() =>
                      setSelectedCertificate(
                        certificate
                      )
                    }
                  >
                    VIEW CERTIFICATE ↗
                  </button>

                </div>

              </div>


              <div className="certificate-card-info">

                <span>
                  {String(index + 1).padStart(2, '0')}
                  {' / '}
                  {certificate.year}
                </span>

                <h3>
                  {certificate.title}
                </h3>

                <p>
                  {certificate.organization}
                </p>

                {certificate.skills && (

                  <small>
                    {certificate.skills}
                  </small>

                )}

              </div>

            </article>

          )
        )}

      </div>


      {/* =================================
          FULLSCREEN VIEWER
      ================================= */}

      {selectedCertificate && (

        <div
          className="certificate-modal"
          onClick={() =>
            setSelectedCertificate(null)
          }
        >

          <div
            className="certificate-modal-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="certificate-close"
              onClick={() =>
                setSelectedCertificate(null)
              }
            >
              ×
            </button>


            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
            />


            <div className="certificate-modal-info">

              <span>
                {selectedCertificate.organization}
                {' / '}
                {selectedCertificate.year}
              </span>

              <h3>
                {selectedCertificate.title}
              </h3>

            </div>

          </div>

        </div>

      )}

    </section>

  )
}

export default CertificateVault