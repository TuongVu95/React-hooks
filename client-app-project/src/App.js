
import React from 'react';
//home
import Home from './pages/Home';

//components
import Header from './components/header-footer/header';
import Footer from './components/header-footer/footer';

const App = () => {
  return (
    <>
      <Header />
        <Home />
      <Footer />
    </>
  );
}

export default App;
