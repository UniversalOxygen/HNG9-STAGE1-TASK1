import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import ContactPage from './Pages/ContactPage';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='ContactPage' element={<ContactPage />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
