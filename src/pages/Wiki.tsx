import React from 'react';

import Header from '../components/common/Header';
import SidebarWiki from '../components/common/SidebarWiki';
import Footer from '../components/common/Footer';

const Wiki = () => {
  return (
    <>
      <Header transparent={false} />
      <SidebarWiki />
      <Footer />
    </>
  );
};

export default Wiki;
