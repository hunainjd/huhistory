import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import './styles/globals.css';
import './styles/variables.css';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <h1>Welcome to ProfileHub</h1>
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