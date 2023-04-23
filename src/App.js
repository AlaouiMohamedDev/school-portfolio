
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import SideHeader from './Components/SideHeader';
import './index.css';
import Formation from './Components/Formation';
import Experience from './Components/Experience';
import Competence from './Components/Competence';
import Certificat from './Components/Certificat';
import Projet from './Components/Projet';

function App() {
  return (
    <BrowserRouter>
      <div className="font-roboto flex flex-col lg:flex-row">
        <SideHeader />
        <div className="w-full lg:w-4/5 bg-main-4 h-full lg:h-screen">
            <Routes >
              <Route path="/" element={<Home/>}></Route>
              <Route path="/formation" element={<Formation/>}></Route>
              <Route path="/experience" element={<Experience/>}></Route>
              <Route path="/competence" element={<Competence/>}></Route>
              <Route path="/certificat" element={<Certificat/>}></Route>
              <Route path="/projet" element={<Projet/>}></Route>
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
