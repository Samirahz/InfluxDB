import { useState } from 'react';
import AuthModal from './components/AuthModal';
import Dashboard from './components/Dashboard';
import FeaturesGrid from './components/FeatureGrid';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import WelcomeSection from './components/WelcomeSection';
import './styles/App.css';

function App() {
  const [isAuthOpen, setAuthOpen] = useState(false);
  // const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    // <div className="app-container">
    //   {isLoggedIn ? (
    //     <main className='app-main'>
    //       <Dashboard />
    //     </main>
    //   ):(
    //     <main className='app-main'>
    //       <NavBar onOpenAuth={() => setAuthOpen(true)} />
    //       <WelcomeSection onOpenAuth={() => setAuthOpen(true)}/>
    //       <FeaturesGrid />
    //       <Footer />
    //       <AuthModal
    //         isOpen={isAuthOpen}
    //         onClose={() => setAuthOpen(false)}
    //         onLoggedInSuccess={() => {setLoggedIn(true); setAuthOpen(false);}}
    //       />
    //     </main>
    //   )}
    // </div>

    <div className="app-container">
      <NavBar onOpenAuth={() => setAuthOpen(true)} />
      <main className="app-main">
        <WelcomeSection onOpenAuth={() => setAuthOpen(true)}/>
        <FeaturesGrid />
        <Dashboard />
      </main>
      <Footer />
      <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}

export default App;
