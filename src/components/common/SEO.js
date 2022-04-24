import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description: 'Plataforma de Democracia 2.0 para la circunscripción cubana.',
  title: 'Agora 2',
  url: 'www.agora2.org',
  author: 'Projecto Agora2 Cuba',
  keywords: ['democracia2.0', 'cuba', 'agora'],
  twitter: {
    id: '@agora2cuba',
    img: ''
  },
  facebook: {
    id: '@agora2cuba',
    img: ''
  }
};

const SEO = () => {
  return (
    <Helmet>
      <meta property="fb:app_id" content={SEO_DATA.facebook.id} />
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:image" content={SEO_DATA.facebook.img} />
      <meta property="og:description" content={SEO_DATA.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@agora2cuba" />
      <meta name="twitter:site" content="@agora2cuba" />
      <meta name="twitter:title" content={SEO_DATA.title} />
      <meta name="twitter:description" content={SEO_DATA.description} />
      <meta name="twitter:domain" content={SEO_DATA.url} />
      <meta name="twitter:image:src" content={SEO_DATA.img} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
