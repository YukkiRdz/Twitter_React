import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
import img1 from './assets/Yuilustrarte.jpg'
import img2 from './assets/Yukki.png'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing avatar={img1} userName='yuilustrarte'>
            Yuiri Miyagi
            </TwitterFollowCard>
            <TwitterFollowCard avatar={img2} userName='yukki'>
            Thiago Nahuel Rodriguez
            </TwitterFollowCard>
        </section>
    )
}

