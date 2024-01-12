import './App.css';
import EventList from './components/Eventlist';
import Header from './components/Header';
import HeroSection from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <EventList/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
