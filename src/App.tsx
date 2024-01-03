import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyles from "./global/styles/GlobalStyles"

import { Home } from "./screens/Home"
import { Post } from "./screens/Post"

function App() {
    return (
        <>
            <BrowserRouter basename="/">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post/:postId" element={<Post />} />
                </Routes>
            </BrowserRouter>
        
            <GlobalStyles />
        </>
    )
}

export default App
