import logo from '../../assets/logo/catube_white.png'
import { CatubeHeader } from './CatubeHeader.jsx'
import '../header/CatubeHeader.css'

function Header( { searchQuery, setSearchQuery}) {
    return (
        <CatubeHeader
        logo={logo}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        />
    )
}

export default Header