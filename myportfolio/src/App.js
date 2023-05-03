// import './App.scss';
import Home from './component/Home/Home';
import Myinfo from './component/MyInfo/Myinfo';
import Projects from './component/Projects/Projects';
import Contact from './component/Contactme/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/aboutme' Component={Myinfo} />
          <Route exact path='/Project' Component={Projects} />
          <Route exact path='/Contact' Component={Contact} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
