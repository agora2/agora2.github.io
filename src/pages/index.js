import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <meta name="twitter:title" content="Ágora 2" />
    <meta name="twitter:card" content="summary" />
    <Navbar />
    <Header />
    <About />
    <Team />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
