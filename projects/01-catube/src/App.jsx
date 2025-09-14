import './App.css'
import { CatubeSubsCard } from './CatubeSubsCard'
import { CatubeVideoCard } from './CatubeVideoCard'
import img1 from './assets/Yuilustrarte.jpg'
import img2 from './assets/Yukki.png'
import thumbnail from './assets/Pinterest Swap Challenge.jpg'

function App() {
  return (
    <section className='App'>
      <CatubeSubsCard isFollowing avatar={img1} userName='yuilustrarte'>
      Yuiri Miyagi
      </CatubeSubsCard>
      <CatubeVideoCard avatar={thumbnail}>
      </CatubeVideoCard>
      <CatubeSubsCard avatar={img2} userName='yukki'>
      Thiago Nahuel Rodriguez
      </CatubeSubsCard>
    </section>
  )
}

export default App
