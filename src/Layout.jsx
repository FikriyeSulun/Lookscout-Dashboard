import React, { useState } from 'react';

import SideMenu from './components/SideMenu'
import Header from './components/Header'
import Cards from './components/Cards'
import GraphicCard from './components/GraphicCard'
import DataSection from './components/DataSection'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
        <SideMenu isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} />
        <div className={`container d-flex flex-column gap32 ${isMenuOpen ? 'default-width' : 'full-width'}`}>
          <Header />
          <Cards />
          <GraphicCard />
          <DataSection />
        </div>
    </>
  );
}
