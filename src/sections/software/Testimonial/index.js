import React, { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"
import Card from "./Card"
import backgroundImage from "../../../assets/image/landing-1/bg.png"
import { TestimonialData } from "./data"
import Link from "../../../components/Link"
import userImage from '../../../assets/image/landing-1/reviewer-1.png'
import starsTestimonial from '../../../assets/image/landing-1/stars-testimonial.svg'

const TestimonialSection = () => {
  SwiperCore.use([Navigation])
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  return (
    <>
      {/* Testimonial Area */}
      <div
        className="testimonial-area"
        style={{ background: `url(${backgroundImage})`}}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="row">
              <div className="section__heading">
                <p className="testimonial-subheading">Atsiliepimai</p>
                <h2 className="testimonial-heading">Prisijunkite prie 12 000 laimingų klientų</h2>
                <Link to="/" className="testimonial-button">Pereiti į klausimyną</Link>
              </div>
            </div>
          </div>
        
        <div className="testimonial-container-1">
        <div className="tesimonial-card">
     <div className="d-inline-flex">
       <img src={userImage} alt="testimonial" />
       <div className="reviewer-designation">
         <h4>Vardas Pavardė</h4>
         <span>Įmonės pavadinimas</span>
       </div>
     </div>
     <div className="testimonial__star">
     <img src={starsTestimonial} alt="stars" />
       </div>
     <div className="testimonial-body">
       <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit fusce massa diam sed. Tincidunt suspendisse et tellus sed fames consequat et urna arcu. 
       Suscipit fusce massa diam sed. Tincidunt suspendisse et tellus sed fames consequat et urna arcu.Suscipit fusce massa diam sed. Tincidunt suspendisse et tellus sed fames consequat et urna arcu.
       </p>
       </div>
     </div>
     </div>
     <div className="testimonial-container-2">
        <div className="tesimonial-card">
     <div className="d-inline-flex">
       <img src={userImage} alt="testimonial" />
       <div className="reviewer-designation">
         <h4>Vardas Pavardė</h4>
         <span>Įmonės pavadinimas</span>
       </div>
     </div>
     <div className="testimonial__star">
     <img src={starsTestimonial} alt="stars" />
       </div>
     <div className="testimonial-body">
       <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit fusce massa diam sed.
       </p>
       </div>
     </div>
     <div className="tesimonial-card">
     <div className="d-inline-flex">
       <img src={userImage} alt="testimonial" />
       <div className="reviewer-designation">
         <h4>Vardas Pavardė</h4>
         <span>Įmonės pavadinimas</span>
       </div>
     </div>
     <div className="testimonial__star">
     <img src={starsTestimonial} alt="stars" />
       </div>
     <div className="testimonial-body">
       <p>
       Suscipit fusce massa diam sed. Tincidunt suspendisse et tellus sed fames consequat et urna arcu.
       </p>
       </div>
     </div>
     </div>
     <div className="testimonial-container-3">
        <div className="tesimonial-card">
     <div className="d-inline-flex">
       <img src={userImage} alt="testimonial" />
       <div className="reviewer-designation">
         <h4>Vardas Pavardė</h4>
         <span>Įmonės pavadinimas</span>
       </div>
     </div>
     <div className="testimonial__star">
     <img src={starsTestimonial} alt="stars" />
       </div>
     <div className="testimonial-body">
       <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit fusce massa diam sed. Tincidunt suspendisse et tellus sed fames consequat et urna arcu.
       </p>
       </div>
     </div>
     </div>
     </div>
   </div>

    </>
  )
}

export default TestimonialSection
