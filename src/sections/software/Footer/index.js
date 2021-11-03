import React from 'react';
import Link  from "../../../components/Link";
import logofooter from "../../../assets/image/landing-1/logo-top-1.png";
import arrow from "../../../assets/image/landing-1/arrow.svg";
// import BrandLogo from "../../../assets/image/png/logo-white.png"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterSection({...rest}){
    return (
      <>
            {/* Footer Area */}
        <footer className="footer-area">
          <div className="container">
            <div className="subscriber">
            <div className="subscriber-container">
                  <p className="subscriber-text">Naujienlaiškis</p>
                  <h2 className="subscriber-heading">Gaukite visas naujienas įrašydami savo el. pašta</h2>
                  <form>
  <input className="subscriber-form" placeholder="Jūsų el paštas" />
  <button className="subscriber-form-button"><img src={arrow} alt="footer logo" /></button>
</form>
                </div>
            </div>
            
            <div className="row footer-quick-link-area justify-content-lg-center">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="footer-logo">
                <img src={logofooter} alt="footer logo" />
                </div>
                <div className="footer-area-list-item">
                  <h4>Konfiguratorius</h4>
                  <ul className="list-unstyled">
                    <li><Link to="/">Kaip tai veikia?</Link></li>
                    <li><Link to="/">Apie mus</Link></li>
                    <li><Link to="/">Atsiliepimai</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="footer-area-list-item">
                  <h4>Trukmė.lt</h4>
                  <ul className="list-unstyled">
                    <li><Link to="/">Apie mus</Link></li>
                    <li><Link to="/">Asortimento pokyčiai</Link></li>
                    <li><Link to="/">Karjera</Link></li>
                    <li><Link to="/">SMS rinkodara</Link></li>
                    <li><Link to="/">Kontaktai</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6">
                <div className="footer-area-list-item">
                  <h4>Sekite mus</h4>
                  <ul className="list-unstyled">
                    <li><Link to="/">Facebook</Link></li>
                    <li><Link to="/">Instagram</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer-area-list-item get-in-touch-area">
                <div className="hero-area__btn">
              <Link to="/" className="button-footer">Pradėti konfiguruoti</Link>
            </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">© Copyright 2018 - UAB Trukmė</div>
                </div>
        </footer>

      </>

    )
}