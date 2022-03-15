import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { About } from './components/Pages/About';
import { Details } from './components/Pages/Details';
import { Home } from './components/Pages/Home';
function App() {
  return (
        <> 
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path='/about' element={<About />} />
                <Route path="/details/:slug" element={<Details/>} />
            </Routes>
        </BrowserRouter>
        </>
  );
}
export default App;
