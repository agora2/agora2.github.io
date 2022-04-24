import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';

const FAQS = [
  {
    title: 'Quién ideó y quién financia este proyecto?',
    content: () => (
      <>
      <li> La idea de Ágora 2 nace de la discusión entre sus primeros coordinadores, ciudadanos cubanos, sin 
        mediación, motivación o injerencia de ninguna otra instancia, nacional o extranjera. 
      </li>
      <br/>
      <li> El Equipo de Ágora 2 trabajará siempre de forma voluntaria y no remunerada.
      </li>
      <br/>
      <li> Los costos del hosting y del despliegue de los microservicios se pagarán con donaciones voluntarias 
        que podrán ser hechas exclusivamente por ciudadanos cubanos con derecho al voto.
      </li>
      </>
    )
  },
  {
    title: 'Cómo puedo ayudar?',
    content: () => (
      <>
        <li> Como miembro o colaborador del Equipo. Para eso puedes contactar directamente a un 
          coordinador o  enviarnos tu disposición via email a la 
          dirección  <a href="mailto:agora2coordinadores@gmail.com">agora2coordinadores@gmail.com</a>.  
        </li>
        <br/>
        <li> Contribuyendo con la divulgación del proyecto para motivar la participación 
          popular en la concepción y posteriormente en los debates de Ágora 2. 
        </li> 
        <br/>
        <li> Haciendo una donación a la cuenta del proyecto (esta cuenta todavía no existe), 
        que se usará para pagar los servicios de hosting y aplicaciones web.
        </li>
      </>
    )
  },
  {
    title: 'Qué filiación política tiene Ágora 2?',
    content: () => (
      <>
        <li> Ágora 2 se esforzará en ser imparcial con respecto a la inclinación política más allá de la 
          observancia estricta de la constitución de la República de Cuba. 
        </li>
        <br/>
        <li> Como está recogido en nuestro código de conducta, cada miembro del equipo se compromete a que 
          sus sesgos políticos individuales no interfieran con los objetios democráticos participativos del 
          proyecto. 
        </li>
        <br/>
        <li> La meta es garantizar que todas las opiniones, expresadas adecuadamente, tengan espacio y respeto.
        </li>
      </>
    )
  },
  {
    title: 'Se podrá usar Ágora 2 como plataforma partidista?',
    content: () => (
      <>
        <li> No. Ágora 2 será una plataforma de debate político que no promoverá agendas específicas.
        </li>
        <br/>
        <li> Cada usuario en los debates y en su perfil podrá expresar libremente todas sus opiniones, 
          pero habrá reglas y sanciones estrictas en lo referente a propaganda y publicidad. 
        </li>
      </>
    )
  },
  {
    title: 'Interfiere Ágora 2 con el proceso electoral?',
    content: () => (
      <>
        <li> No. El proyecto Ágora 2 no interfiere en los mecanismos del proceso electoral de ninguna forma.
        </li>
        <br/>
        <li> Ágora 2 es una plataforma de debate comunitario, donde se harán visible las opiniones de los 
          electores y los apoyos a posibles nominados.
        </li> 
        <br/>
        <li> Ágora 2 es una ayuda para tomar decisiones mejor informadas a la hora de elegir las asambleas 
          municipales y para promover iniciativas de abajo hacia arriba.
        </li>
      </>
    )
  },
  {
    title: 'Qué diferencia a Ágora 2 de otras plataformas como Facebook y Twitter?',
    content: () => (
      <>
        <li> Ágora 2 implementa un servicio de red social cerrado en tanto sus funcionalidades completas 
          solo estarán disponibles para ciudadanos cubanos con derecho al voto.
        </li>
        <br/>
        <li> Ágora 2 implementará funcionalidades de Democracia 2.0 como apoyo a liderazgos, elección 
          de ideas, etc.
        </li> 
        <br/>
        <li> Ágora 2 establecerá una política estricta de chequeo de identidad y de moderación distribuída 
          que impedirá la existencia de cuentas falsas y mantendrá un ambiente 
          libre de “trolling” o cualquier forma irrespetuosa de discusión.
        </li>
        <br/>
        <li> Los perfiles de los electores en Ágora 2 serán breves y adaptados únicamente a los fines 
          del ejercicio político democrático, sin incluir propaganda o publicidad.
        </li> 
        <br/>
        <li> En Ágora 2 los debates tendrán lugar exclusivamente en las salas de chat correspondientes 
          a las comunidades, donde el historial de discusiones será mantenido todo el tiempo.
        </li> 
      </>
    )
  },
  {
    title: 'Cómo se relacionará Ágora 2 con el gobierno cubano?',
    content: () => (
      <>
        <li> Ágora 2 será una plataforma independiente de cualquier institución gubernamental nacional 
          o extranjera.
        </li>
        <br/>
        <li> Ágora 2 mantendrá siempre una relación respetuosa con todas las instancias del gobierno cubano 
          y los órganos del Poder Popular.
        </li> 
        <br/>
        <li> En varios puntos de naturaleza técnica Ágora 2 deseará y aceptará siempre la ayuda de 
          instituciones cubanas como las Oficinas del Carné de Identidad, el Consejo Electoral Nacional, 
          el Ministerio de Informática y Comunicaciones, etc.
        </li>
        <br/>
        <li> Entre las Fases 1 y 2 el Equipo enviará una comunicación al presidente del 
          Consejo de Estado y a la Asamblea Nacional del Poder Popular para informarles personalmente 
          sobre el proyecto y el espíritu de la plataforma.
        </li> 
        <br/>
        <li> Expondremos siempre la conveniencia de que cada parlamentario y cada funcionario del estado y 
          el gobierno tenga una presencia activa en Ágora 2.
        </li> 
      </>
    )
  },
  {
    title: 'Hay dos tipos de usuario?',
    content: () => (
      <>
        <li> No. Solo habrá usuarios electores. 
          Las discusiones podrán ser observadas en línea por cualquier persona,
          pero solo podrán participar en ellas los electores. 
        </li>
        <br/>
        <li> Solo electores (ciudadanos cubanos con derecho al voto) pueden registrarse. 
          Todas tendrán igual acceso a las funcionalidades de Ágora 2. 
        </li> 
      </>
    )
  },
//  {
//    title: 'Puede haber debates solo entre usuarios observadores?',
//    content: () => (
//      <>
//        <li> No. Cada sala de debate tendrá un número máximo de observadores que podrán intervenir 
//          en la discusión, y este número dependerá de la 
//          cantidad de usuarios electores activos en la discusión en ese momento.
//        </li>
//        <br/>
//        <li> No habrá límites para observar la discusiones, tanto activas como inactivas.
//        </li> 
//      </>
//    )
//  },
  {
    title: 'Cómo se asegurará la autenticidad de los usuarios?',
    content: () => (
      <>
        <li> El registro incluirá la presentación del carné de identidad con el 
          código QR legible.
        </li>
        <br/>
        <li> El mecanismo de verificación de identidad de las cuentas podrá implicar varios métodos, 
          incluyendo la verificación física por parte de colaboradores de Ágora 2.
        </li> 
        <br/>
        <li> Como ayuda adicional con los datos Ágora 2 pedirá la colaboración de las Oficinas del Carné 
          de Identidad.
        </li>
      </>
    )
  }, 
  {
    title: 'Se permitirán usuarios pagados por potencias extranjeras?',
    content: () => (
      <>
        <li> Todos los ciudadanos cubanos con derecho al voto tendrán igualdad de derechos en Ágora 2 
          como lo tienen en la constitución de la República de Cuba.
        </li>
      </>
    )
  }, 
  {
    title: 'Qué pasa si una idea del Banco de Ideas tiene muchos apoyos pero no se implementa?',
    content: () => (
      <>
        <li> Ágora 2 es un instrumento de debate comunitario y creación colectiva de ideas, 
          no incluye mecanismos de acción para poner en práctica las mismas. La plataforma solo 
          garantizará la accesibilidad y visibilidad de las propuestas.
        </li>
      </>
    )
  }, 
  {
    title: 'Cómo se promueve la retroalimentación en cuanto a ideas y representantes?',
    content: () => (
      <>
        <li> Ágora 2 facilitará el ejercicio informal de rendición de cuentas por medio de sus salas 
          de debate y los perfiles de los electores. 
        </li>
        <br/>
        <li> Los representantes elegidos a las asambleas podrán retroalimentar a los electores 
          de sus comunidades sobre la marcha de las sesiones parlamentarias por medio de la plataforma.
        </li> 
      </>
    )
  }, 
  {
    title: 'Pueden los usuarios espontáneamente financiar ideas específicas?',
    content: () => (
      <>
        <li> Ágora 2 no incluirá ningún mecanismo de financiación que no sea exclusivamente para pagar los 
          servicios hosting de la plataforma.
        </li>
        <br/>
        <li> Si en un debate se decide que una idea sea financiada y puesta en práctica por la comunidad, 
          los mecanismos de recaudación que se utilicen serán siempre independientes de Ágora 2.
        </li> 
      </>
    )
  }, 
  {
    title: 'Qué financiamiento necesita Ágora 2? Qué pasará si no es sostenible?',
    content: () => (
      <>
        <li> Ágora 2 necesitará fondos única y exclusivamente para 
          pagar el sitio web y el despliegue de microservicios.
        </li>
        <br/>
        <li> La estimación preliminar del costo en la Fase 5 usando los servicios AWS es de menos de 
          500 euros por mes en un escenario de alto tráfico.
        </li> 
        <br/>
        <li> Ágora 2 espera ser sostenible solamente con las donaciones de ciudadanos cubanos con derecho
           al voto; si esto no se logra la plataforma será cerrada.  
        </li>
      </>
    )
  }, 
  {
    title: 'Cómo tratará Ágora 2 mis datos personales?',
    content: () => (
      <>
        <li> Ágora 2 no usará los datos personales de los usuarios para ningún tipo de beneficio 
          monetario o político, ni de la plataforma ni de terceras partes.
        </li>
        <br/>
        <li> Todos los algoritmos usados para los procesos de funcionamiento interno de la plataforma serán 
          públicos y podrán ser auditados por cualquier persona en cualquier momento.
        </li> 
        <br/>
        <li> La política de privacidad de Ágora 2 será adecuadamente establecida para que cumpla los más 
          altos estándares. 
        </li>
      </>
    )
  } 
];

const Faq = () => (
  <Section id="preguntas_y_respuestas">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Preguntas y respuestas</h1>
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
