import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Home from './components/Home';
import Navbar from './components/Navbar';
import CardsPage from './components/CardsPage';
import AddCard from './components/AddCard';
import ContactForm from './components/ContactForm';

function Layout() {
  return <>
    <Navbar />
    <Outlet />
  </>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="flashs" element={<CardsPage />} />
          <Route path="addcard" element={<AddCard />} />
          <Route path="contact" element={<ContactForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
