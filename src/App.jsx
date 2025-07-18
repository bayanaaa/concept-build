import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ScrollTop from "./ScrollTop";
import Header from "./components/Header/Header";
import Article from "./pages/Articles/Article";
import Footer from "./components/Footer/Footer";
import History from "./pages/History/History";
import Vacancies from "./pages/Vacancies/Vacancies";
import Interests from "./pages/Interests/Interests";
import SusDevelopment from "./pages/SusDevelopment/SusDevelopment";
import Guarantee from "./pages/Guarantee/Guarantee";
import Beliefs from "./pages/Beliefs/Beliefs";
import About from "./pages/About/About";
import Vip from "./pages/Vip/Vip";
import Contacts from "./pages/Contacts/Contacts";
import Help from "./pages/Help/Help";
import Visa from "./pages/Visa/Visa";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollTop />
      {pathname !== "/" && <Header />}
      <Routes>
        <Route path="/history" element={<History />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Article />} />
        <Route path="/vip" element={<Vip />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/guarantee" element={<Guarantee />} />
        <Route path="/beliefs" element={<Beliefs />} />
        <Route path="/help" element={<Help />} />
        <Route path="/visa-support" element={<Visa />} />
        <Route path="/sustainable-development" element={<SusDevelopment />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
