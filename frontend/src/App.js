import './App.css';
import Dashboard from './components/Dashboard';
import FeaturesGrid from './components/FeatureGrid';
// import Footer from './components/Footer';
import NavBar from './components/NavBar';
import WelcomeSection from './components/WelcomeSection';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main className="app-main">
        <WelcomeSection />
        <FeaturesGrid />
        <Dashboard />
      </main>
      {/* <Footer /> */}
    </div>

  );
}


export default App;
