import './App.css'
import {Routes, Route} from 'react-router-dom';
import logo from './assets/logo-white.png'
import Navigation from "./components/navigation/Navigation.jsx";
import Home from "./pages/home/Home.jsx";
import NewPost from "./pages/newpost/NewPost.jsx";
import Overview from "./pages/overview/Overview.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import PostDetailPage from "./pages/postDetailPage/PostDetailPage.jsx";
import './App.css'
import './index.css'


function App() {
    return (
        <>
            <Navigation/>
            <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/newpost" element={<NewPost/>}/>
                <Route path="/posts" element={<Overview/>}/>
                <Route path="/posts/:id" element={<PostDetailPage/>}/>
                <Route path="/notfound" element={<NotFound/>}/>
            </Routes>
            </main>
            <footer className={'footer-navigation outer-content-container'}>
                Blogventure &copy; 2023 - ontwikkeld voor NOVI Hogeschool
            </footer>


            {/*<img src={logo} alt="Company logo"/>*/}


        </>
    )
}

export default App
