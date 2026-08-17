import React from 'react';
import Header from './Header';
import BookControl from './BookControl';
import AboutUs from './AboutUs';
import Footer from './Footer';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <BookControl />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
