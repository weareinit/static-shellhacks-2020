import React, { useState, useEffect } from 'react'
import HomePageHero from '../../Components/HomePageHero'
import About from '../../Components/About'
import HostSection from '../../Components/HostSection'
import CoHostSection from '../../Components/CoHostSection'
import CommunityPartners from '../../Components/CommunityPartners'
import TrackSection from '../../Components/TrackSection'
import FAQSection from '../../Components/FAQSection/FAQSection'
import Sponsors from '../../Components/Sponsors'
import AuthStore from '../../store/AuthStore'
import MLHBadge from '../../Components/MLHBadge'
import { AuthStoreConsumer } from '../../store/AuthStore/Context'
import LoadingPage from '../Loading'
import DashboardContainer from '../../Shells/DashboardContainer'
import './styles.sass'
import SchedulePage from '../SchedulePage'

const HomePage = ({ store }) => {
  return (
    <div className={!!store.user ? '' : 'HomePage'}>
      <MLHBadge />
      <HomePageHero user={!!store.user} logout={store.logout} />
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

const HomePageWrapper = ({ store }) => {
  const [isOpen, setisOpen] = useState(true)
  useEffect(() => {
    if (!store.user) {
      store.getUser()
    }
  }, [])

  if (store.loading) {
    return <LoadingPage />
  }

  return store.user ? (
    <DashboardContainer isOpen={isOpen} setIsOpen={setisOpen} page="home">
      <HomePage store={store} />
    </DashboardContainer>
  ) : (
    <HomePage store={store} />
  )
}

const HOC = () => (
  <AuthStore>
    <AuthStoreConsumer>{store => <HomePageWrapper store={store} />}</AuthStoreConsumer>
  </AuthStore>
)

export default HOC
