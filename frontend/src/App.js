import './App.css';
import FeaturesGrid from './components/FeatureGrid';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import WelcomeSection from './components/WelcomeSection';

function App() {
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   fetch("/api/hello")
  //     .then(res => res.text())
  //     .then(data => setMessage(data))
  //     .catch(err => console.error(err));
  // }, []);

  return (
    <div>
      <NavBar />
      <WelcomeSection />
      <FeaturesGrid />
      <Footer />
    </div>

  );
}

export default App;
