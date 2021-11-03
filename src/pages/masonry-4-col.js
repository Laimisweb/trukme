import React from "react"
import BannerSection from "../sections/portfolio/Masonry/Banner"
import  MasonryBody  from "../sections/portfolio/Masonry/ColFour"
import PageWrapper from '../components/PageWrapper'
import  FooterSection  from "../sections/portfolio/Footer"
const Masonry4Col = () => {
  return <PageWrapper innerPageHeader={true}>
    <BannerSection title="Portfolio Masonry Style 2" text={"Leverage agile frameworks to provide a robust synopsis for hig <br className='d-none d-sm-block'/> level overviews. Iterative approaches"}/>
    <MasonryBody/>
    <FooterSection/>

  </PageWrapper>
}

export default Masonry4Col
