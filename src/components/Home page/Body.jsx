import React from 'react'
import LandingPage from './LandingPage'
// import OurClients from './OurClients'
// import WhyChoose from './WhyChoose'
import Tchnology from './Tchnology'
import Recommendation from './Recommendation'
import BlogSection from './BlogSection'
// import HomeServices from './HomeServices'
import ProcessHome from './ProcessHome'
import PlansHome from './PlansHome'
import Work from './Work'
import EnquiryForm from './EnquiryForm'
// import ServicesGrid from './Services'
import Service_section from './Service_section'
import WhyChooseUs from './WhyChooseUs'
import Lenis from 'lenis'
import ProjectTimeline from './ProjectTimeline'
const Body = () => {
  return (
    <div>
      <LandingPage/>
      {/* <OurClients/> */}
      <Service_section/>
      <ProjectTimeline/>
      {/* <HomeServices/> */}
      {/* <WhyChoose/> */}
      <WhyChooseUs/>
      <EnquiryForm/>
      <ProcessHome/>
      <Tchnology/>
      <PlansHome/>
      <Recommendation/>
      <Work/>
      <BlogSection/>
    </div>
  )
}

export default Body
