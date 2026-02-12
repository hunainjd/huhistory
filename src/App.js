// Import Modules
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Import css styles
import './styles/global.css';
import './styles/variables.css';
import './index.css'
import './App.css';


function App() {

  // This is the HTML that is shown
  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <h1>Welcome to LHOK</h1>
          <p className="subtitle">
            Connect with professionals and showcase your expertise
          </p>
          
          <div className="hero-content">
            <h2>Building Your Professional Network</h2>
            <p>
              Join thousands of professionals sharing their knowledge,
              connecting with peers, and growing their careers.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;