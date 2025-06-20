import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <h2>Contact Us</h2>
        <p>Email us at contact@example.com</p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;