import React, { useState, useEffect } from 'react'
import HomePageHero from '../../Components/HomePageHero'
import About from '../../Components/About'
import TrackSection from '../../Components/TrackSection'
import FAQSection from '../../Components/FAQSection/FAQSection'
import AuthStore from '../../store/AuthStore'
import { AuthStoreConsumer } from '../../store/AuthStore/Context'
import LoadingPage from '../Loading'
import DashboardContainer from '../../Shells/DashboardContainer'
import './styles.sass'

const HomePage = ({ store }) => {
  return (
    <div className={!!store.user ? '' : 'HomePage'}>
      <HomePageHero user={!!store.user} />
      <About />
      <TrackSection />
      <FAQSection />
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
