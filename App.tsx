import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Mission from './pages/Mission';
import CommunityWealthManagement from './pages/CommunityWealthManagement';
import Programs from './pages/Programs';
import TrainingAdvisory from './pages/TrainingAdvisory';
import CommunityCapital from './pages/CommunityCapital';
import Governance from './pages/Governance';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalCTA from './components/GlobalCTA';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-brand-offwhite">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/community-wealth-management" element={<CommunityWealthManagement />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/training-advisory" element={<TrainingAdvisory />} />
            <Route path="/community-capital" element={<CommunityCapital />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <GlobalCTA />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
