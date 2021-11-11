import React from 'react';
import Link from "../components/Link"
import {
  HeroSection,
  BrandSection,
  FeatureSection,
  ContentSectionOne,
  IntegrationSection,
  FooterSection,
  TestimonialSection
} from "../sections/konfiguratorius"

import PageWrapper from '../components/PageWrapper'



const Header = {
  headerClasses:"site-header--menu-center site-header--sticky dark-header",
  containerFluid:true
}
 
const HeaderButton = ()=>{
  return(
    <div className="header-btns  header-btns  ms-auto d-none d-xs-inline-flex">
      <Link className="btn sign-in-btn focus-reset" to="/virtuves-tipas">
        Konfiguratorius
      </Link>
    </div>
  )
}
const HomePage = () =>{
    return (
      <PageWrapper headerConfig={Header} HeaderButton={<HeaderButton/>}>
        <HeroSection/>
        <BrandSection/>
        <FeatureSection/>
        <ContentSectionOne/>
        <TestimonialSection />
        <IntegrationSection />
         <FooterSection/>
      </PageWrapper>
    )
}

export default HomePage;






