import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <h2>About Us</h2>
        <p>We are a team passionate about building React applications.</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;