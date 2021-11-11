
import React from 'react';
import Link from "../../../components/Link"
import reviews from "../../../assets/image/landing-1/stars.svg";
import konfiguratorius from "../../../assets/image/landing-1/konfiguratorius.png";

export default function HeroSection ({data}) {
  return (
  <div className="hero-area hero--area-curve text-center bg-position  position-relative" style={{backgroundColor:'rgba(41, 88, 140, 0.6'}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-10" data-aos="zoom-in" data-aos-duration={800} data-aos-once="true">
          <div className="hero-area-content">
            <div className="hero-area__title">
              <h4 className="customers">
              Prisijunkite prie 12 000 laimingų klientų
                </h4>
                <div className="stars">
                <img src={reviews} alt="stars" />
                </div>
              <h2 className="text-white">Norite išsirinkti virtuvę bet sunku įsiviazduoti kaip ji atrodis?</h2>
              <div className="hero-under-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit fusce massa diam sed. </div>
            </div>
            <div className="hero-area__btn">
              <Link to="/virtuves-tipas" className="btn btn--lg bg-secondary focus-reset text-white">Pradėti konfiguruoti</Link>
            </div>
            <div className="hero-area__image">
              <img src={konfiguratorius} alt="konfiguratorius" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

