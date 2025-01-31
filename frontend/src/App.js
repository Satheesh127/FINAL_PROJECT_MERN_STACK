import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PropertyList from './components/PropertyList';
import PropertyDetails from './components/PropertyDetails';
import AddProperty from './components/AddProperty';
import EditProperty from './components/EditProperty';
import Search from './components/Search';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <main className="app-main">
          <Routes>
            <Route path="/" element={<PropertyList />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/add-property" element={<AddProperty />} />
            <Route path="/edit-property/:id" element={<EditProperty />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>&copy; 2025 MyHome. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
