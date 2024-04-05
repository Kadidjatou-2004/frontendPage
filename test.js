import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// Composant de la page d'accueil
function HomePage() {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Bienvenue sur notre site</h1>
        <img src="image.jpg" alt="Accueil" style={{ maxWidth: '100%', maxHeight: '400px' }} />
        <br />
        <Link to="/connexion">
          <button>Connexion</button>
        </Link>
      </div>
    </div>
  );
}

// Composant de la barre de navigation
function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px' }}>
      <Link to="/">Accueil</Link>{' '}
      <Link to="/connexion">Connexion</Link>
    </nav>
  );
}

// Composant de la page de connexion
function LoginPage() {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Page de connexion</h2>
        {/* Formulaire de connexion */}
      </div>
    </div>
  );
}

// App principale
function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/connexion" component={LoginPage} />
    </Router>
  );
}

export default App;