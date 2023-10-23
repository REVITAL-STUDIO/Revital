import Image from 'next/image'
import "./globals.css";
import LogoSlide from './components/slideshows/logos/LogoSlide'
import Navbar from './components/navbar/Navbar'
import MissionAnimation from './components/mission/animation/MissionAnimation'
import MissionStatement from './components/mission/statement/MissionStatement'
import ServiceSlide from './components/slideshows/services/ServiceSlide'
import ThemesSlide from './components/slideshows/themes/ThemesSlide'
import Footer from './components/footer/Footer'
import NewsSlide from './components/slideshows/news/NewsSlide'
import Player from './components/player/Player'
export default function Home() {
  return (
    <main>
      <div >
        <Navbar/>
        <LogoSlide/>
        <MissionAnimation/>
        <MissionStatement/>
        <ServiceSlide/>
        <NewsSlide/>
        <ThemesSlide/>
        <Footer/>
      </div>
    </main>
  )
}
