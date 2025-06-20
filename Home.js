import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Home = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <Card title="Welcome" description="This is the homepage of our site." />
        <Card title="Latest News" description="Check out the latest updates and features." />
      </main>
      <Footer />
    </div>
  );
};

export default Home;