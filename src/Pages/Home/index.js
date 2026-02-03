import React from 'react'
import HomePageHero from '../../Components/HomePageHero'
import About from '../../Components/About'
import HostSection from '../../Components/HostSection'
import CoHostSection from '../../Components/CoHostSection'
import CommunityPartners from '../../Components/CommunityPartners'
import TrackSection from '../../Components/TrackSection'
import FAQSection from '../../Components/FAQSection/FAQSection'
import Sponsors from '../../Components/Sponsors'
import MLHBadge from '../../Components/MLHBadge'
import './styles.sass'

const HomePage = () => {
  return (
    <div className="HomePage">
      <MLHBadge />
      <HomePageHero user={false} />
      <About />
      <TrackSection />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <FAQSection />
      <HostSection />
      <CoHostSection />
      <Sponsors />
      <CommunityPartners />
    </div>
  )
}

export default HomePage
