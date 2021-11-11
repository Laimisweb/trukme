import React from "react"
import Link from "../../../components/Link"
import image1 from "../../../assets/image/virtuves-tipas/virtuves-tipas-1.png"
import image2 from "../../../assets/image/virtuves-tipas/virtuves-tipas-2.png"
import image3 from "../../../assets/image/virtuves-tipas/virtuves-tipas-3.png"
import image4 from "../../../assets/image/virtuves-tipas/virtuves-tipas-4.png"
import image5 from "../../../assets/image/virtuves-tipas/arrow.svg"


export default function BannerSection() {
  return (
    <div className="about-us-banner">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-xxl-7 col-xl-8 col-lg-9"
            data-aos="fade-up"
            data-aos-duration={800}
            data-aos-once="true"
          >
            <div className="about-us-banner-content text-center">
              <h2>Virtuvės tipas</h2>
              <p>
                Pasirinkite virtuvės tipą
              </p>
              
                
    <div className="virtuves-tipas">
      <div className="mt-2">
    <div>
      <label className="inline-flex items-center">
      <span className="ml-2"><img src={image1} alt="content"/></span>
        <input
          type="radio"
          className="form-radio"
          name="radio"
          value="1"
          default
        />   
      </label>
    </div>
    <div>
      <label className="inline-flex items-center">
      <span className="ml-2"><img src={image2} alt="content"/></span>
        <input type="radio" className="checkmark" name="radio" value="2" />
        
      </label>
    </div>
    <div>
      <label className="inline-flex items-center">
      <span className="ml-2"><img src={image3} alt="content"/></span>
        <input type="radio" className="form-radio" name="radio" value="3" />
        
      </label>
    </div>
    <div>
      <label className="inline-flex items-center">
      <span className="ml-2"><img src={image4} alt="content"/></span>
        <input type="radio" className="form-radio" name="radio" value="4" />
        
      </label>
    </div>
  </div>
</div>
      <div className="button-container">       
              <Link to="/virtuves-matmenys/" className="btn focus-reset">
                Tęsti
              </Link>
              </div>
      <div className="button-container">        
              <Link to="/" className="btn-gryzti">
              <img src={image5} alt="content" style={{ marginRight:'10px'}}/>Grįžti
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
