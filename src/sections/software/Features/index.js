import React from "react"
import Link from "../../../components/Link"

const data = [
  {
  icon:"fas fa-layer-group",
  iconBackground:"",
  title:"1. Atsakykite į klausymus",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  
},
  {
    icon:"far fa-comment",
    iconBackground:"card__icon__2",
    title:"2. Susikonfiguruokite virtuvę",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon:"fas fa-layer-group",
  iconBackground:"card__icon__3",
  title:"3. Pateikite užklausą",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}
] 
const FeatureSection = ({ ...rest }) => {
  return (
  <div className="feature-area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8 col-md-9 col-sm-12">
          <div className="text-center">
          <p className="feature-text">Kaip tai veikia?</p>
            <h2 className="feature-heading">Virtuvė vos per kelias minutes</h2>
            <div className="hero-area__btn">
              <Link to="/" className="button-features">Pradėti konfiguruoti</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-12 col-lg-12 ">
          <div className="row justify-content-center">
           {data.map((item,key)=>{return(
              <div className="col-lg-4 col-md-6 col-sm-6 col-11" data-aos="fade-up" data-aos-duration={800} data-aos-once="true" key={key}>
              <div className="card feature--card text-center">
                <div className={`card__icon ${item.iconBackground}`}>
                <i className={item.icon} />
                </div>
                <div className="card-body">
                  <div className="card__title">
                    <h4>{item.title}</h4>
                  </div>
                  <div className="card__content">
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
           )})}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FeatureSection
