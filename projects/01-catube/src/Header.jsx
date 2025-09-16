import logo from './assets/logo/catube_white.png'
import { CatubeHeader } from './components/header/CatubeHeader.jsx'
import './components/header/CatubeHeader.css'

function Header() {
    return (
        <CatubeHeader logo={logo} userName='Colithoxz'>
    
        </CatubeHeader>
    )
}

export default Header