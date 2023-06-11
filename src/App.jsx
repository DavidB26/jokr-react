import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Layout from './components/Layout';
import About from './pages/About';
import Media from './pages/Media';
import Sustentability from './pages/Sustentability';
import Contact from './pages/Contact';
import Manifest from './pages/Manifest';
import Campaigns from './pages/Campaigns';
import Terms from './pages/Terms';
import Politics from './pages/Politics';
function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='jokr-media' element={<Media/>}/>
      <Route path='nuestro-manifiesto' element={<Manifest/>}/>
      <Route path='sustentabilidad' element={<Sustentability/>}/>
      <Route path='contacto' element={<Contact/>}/>
      <Route path='campanas-promocionales' element={<Campaigns/>}/>
      <Route path='terminos-y-condiciones' element={<Terms/>}/>
      <Route path='politicas-de-privacidad' element={<Politics/>}/>
    </Route>
    </Routes>
    </>
  );
}

export default App
