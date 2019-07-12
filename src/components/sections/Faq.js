import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'Quién ideó y quién financia este proyecto?',
    content: () => (
      <>
        Ágora 2 es una idea de que nace de un debate entre sus fundadores, ciudadanos cubanos, sin mediación, 
      motivación o injerencia de ninguna otra instancia, nacional o extranjera. Su financiamiento provendrá 
      exclusivamente de ciudadanos cubanos con derecho al voto, y el dinero se usará para pagar los servicios 
      de la web. El equipo trabajará siempre de forma voluntaria y no remunerada.

      </>
    )
  },
  {
    title: 'Cómo puedo ayudar?',
    content: () => (
      <>
        Hay tres formas fundamentales de ayudar al proyecto. La primera es como miembro del equipo. Para eso 
      puede enviarnos su disposición via email a la dirección admin@agora2.org o contactar directamente a un 
      miembro del equipo. La segunda es contribuyendo con la divulgación del proyecto a nivel comunitario para 
      motivar la participación popular en los debates de Ágora. Y la tercera es haciendo una donación a la cuenta 
      del proyecto (esta cuenta todavía no existe), que se usará para pagar los servicios de hosting del sitio web.
      </>
    )
  },
  {
    title: 'Qué filiación política tiene Ágora 2?',
    content: () => (
      <>
        Ágora 2 se esforzará en no preferenciar ninguna inclinación política más allá de la observancia 
      estricta de la constitución de la República de Cuba. Como está recogido en nuestro código de conducta, 
      cada miembro del equipo se compromete a que sus sesgos políticos individuales no interfieran con los 
      objetios democráticos del proyecto. La meta es garantizar que todas las opiniones, expresadas adecuadamente, 
      tengan espacio y respeto.
      </>
    )
  },
  {
    title: 'Por qué habrán dos tipos de usuario?',
    content: () => (
      <>
        Do not build a website with last decade’s tech. The future of the web is mobile, JavaScript
        and APIs—the{` `}
        <ExternalLink href="https://jamstack.org/">JAMstack</ExternalLink>. Every website is a web
        app and every web app is a website. Gatsby.js is the universal JavaScript framework you’ve
        been waiting for.
      </>
    )
  },
  {
    title: 'What exactly does Gatsby build?',
    content: () => (
      <>
        La plataforma está pensada para los electores, esto es, ciudadanos cubanos con derecho al voto, 
      ellos pueden abrir una cuenta de tipo Elector y tener acceso a todas las funcionalidades de Ágora 2. 
      Adicionalmente, las cuentas de tipo Observador están pensadas para usuarios que, sin formar parte 
      activa del proceso eleccionario, quieran participar observando el proceso e interviniendo en los 
      debates. Consideramos que esta posibilidad enriquecerá las discusiones ayudando a contrastar y validar 
      opiniones y puntos de vista.
      </>
    )
  }
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Preguntas frecuentes</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
