import ReactDOM from 'react-dom/client'
import './index.css'
import Search from './views/searchView/Search.jsx'
import { WatchVideo } from './components/video/watchVideo.jsx'
import { FriendMenu } from './components/modal/friendMenu.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Search />
)
