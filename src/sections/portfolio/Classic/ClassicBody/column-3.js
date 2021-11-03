import React from "react"
import Link from "../../../../components/Link"
import Card from '../components/Card'
import Data from '../../../../data/GalleryProducts'
export default function ClassicBody() {
  return <>
  <div className="portfolio-section grid--no-grap pt-90">
  <div className="container">
    <div className="row justify-content-center  gx-0">
        {Data.Col3.map(({title,titleSmall,image}, index)=>{return(
            <div className="col-lg-4  col-md-6  col-12" key={index}>
                <Card title={title} titleSmall={titleSmall} image={image} />
            </div>
        )})}
      
      
      <div className="col-12 text-center portfolio-load-btn">
        <Link to="/" className="btn focus-reset">Load more works</Link>
      </div>
    </div>
  </div>
</div>

</>
}
