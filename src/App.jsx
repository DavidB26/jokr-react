import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Layout from './components/Layout';
import About from './pages/About';
import Media from './pages/Media/Media';
import Sustentability from './pages/Sustentability';
import Contact from './pages/Contact';
import Manifest from './pages/Manifest';

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='media' element={<Media/>}/>
      <Route path='manifest' element={<Manifest/>}/>
      <Route path='sustentabilidad' element={<Sustentability/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
    </Routes>
    </>
  );
}

export default App
