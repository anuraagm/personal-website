import './App.css';
import FooterComponent from './component/Footer/FooterComponent';
import HeaderComponent from './component/Header/HeaderComponent';
import HomeComponent from './component/Home/HomeComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogComponent from './component/Blog/BlogComponent';
import NoPageComponent from './component/NoPage/NoPageComponent';
import ProjectComponent from './component/Project/ProjectComponent';
import PostComponent from './component/Post/PostComponent';

function App() {
  return (
    <div className="App mx-auto">
      <div className='visible lg:invisible md:p-0 pt-4 pl-4 sticky top-0 bg-zinc-900'>
        <HeaderComponent></HeaderComponent>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<HomeComponent></HomeComponent>} />
            <Route path="blogs" element={<BlogComponent></BlogComponent>} />
            <Route path="projects/:id" element={<ProjectComponent></ProjectComponent>} />
            <Route path="post/:id" element={<PostComponent></PostComponent>}/>
            <Route path="*" element={<NoPageComponent></NoPageComponent>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div className='block lg:hidden md:p-0 ml-12'>
        <FooterComponent></FooterComponent>
      </div>  
    </div>
  );
}

export default App;
