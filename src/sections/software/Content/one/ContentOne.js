import React from "react"
import Link  from "../../../../components/Link"
import imageOne from "../../../../assets/image/landing-1/about-section.png"

const ContentSectionOne = ({ ...rest }) => {

  return (
    <>
      {/* Content Area-1 */}
      <div className="content-area-1">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="content-column-left"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content">
                <div className="about-section">
                  <p className="content-text">Apie konfiguratoriu</p>
                  <h2 className="content-heading">Tai daugiau nei iprastas konfiguratorius</h2>
                  <p className="content-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit fusce massa diam sed. Tincidunt suspendisse et tellus sed fames consequat et urna arcu.
                  </p>
                  <div class="content-text-50">
                  <h2 className="content-heading-50">Didelis pasirinkimas</h2>
                  <p className="content-description" style={{marginBottom:'20px'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit fusce massa diam sed. Tincidunt suspendisse et tellus sed fames consequat et urna arcu.
                  </p>
                  <h2 className="content-heading-50">Didelis pasirinkimas</h2>
                  <p className="content-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit fusce massa diam sed. Tincidunt suspendisse et tellus sed fames consequat et urna arcu.
                  </p>
                  </div>
                  <div class="content-text-50">
                  <h2 className="content-heading-50">Didelis pasirinkimas</h2>
                  <p className="content-description" style={{marginBottom:'20px'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit fusce massa diam sed. Tincidunt suspendisse et tellus sed fames consequat et urna arcu.
                  </p>
                  <h2 className="content-heading-50">Didelis pasirinkimas</h2>
                  <p className="content-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit fusce massa diam sed. Tincidunt suspendisse et tellus sed fames consequat et urna arcu.
                  </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="content-column-right"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-image-group-1">
                <div className="image__1">
                  <img src={imageOne} alt="content"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSectionOne
