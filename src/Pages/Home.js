// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to the Text Expander App</h1>
            <p>Manage your text shortcuts and placeholders easily.</p>
            <Link to="/shortcuts" className="home-link">Manage Shortcuts</Link>
        </div>
    );
}

export default Home;