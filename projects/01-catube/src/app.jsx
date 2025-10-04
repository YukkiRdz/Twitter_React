import { Routes, Route } from 'react-router-dom';
import Search from './views/searchView/Search.jsx';
import { VideoPage } from './views/videoView/VideoPage.jsx';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/watch/:videoId" element={<VideoPage />} />
        </Routes>
    );
}
