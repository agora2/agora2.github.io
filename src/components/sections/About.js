import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(sourceInstanceName: { eq: "art" }, name: { eq: "fast" }) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(sourceInstanceName: { eq: "art" }, name: { eq: "learn_yourself" }) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(sourceInstanceName: { eq: "art" }, name: { eq: "ideas" }) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={(data) => (
      <Section id="proyecto">
        <Container>
          <Grid>
            <div>
              <h2>Lo que es Ágora 2</h2>
              <p align="justify">
                <li> Ágora 2 es un servicio interactivo orientado a impulsar la discusión política 
                  y mejorar la calidad del proceso electoral a nivel municipal en la República de Cuba.
                </li>
                <br/>
                <li> Su diseño explota convenientemente la armonía entre los elementos esenciales de la llamada 
                  democracia 2.0 y las características participativas del proceso eleccionario municipal cubano. 
                </li>
                <br/>
                <li> La idea es organizar la discusión política en la red, agrupando los actores según las 
                  estructuras territoriales electorales, en las que sus nominaciones y votos tendrán poder real 
                  al momento de las asambleas de nominación y el posterior sufragio.
                </li>
              </p>
            </div>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <br/>
              <br/>
              <br/>
              <h2>Lo que Ágora 2 no es</h2>
              <p align="justify">
                 <ul>
                    <li> Ágora 2 no es un sistema electoral paralelo ni de propaganda electoral, se limitará 
                      solo a ser un sistema de información y debate interactivo para el elector.
                    </li>
                    <br/>
                   <li> Ágora 2 no responde a ningún sistema ideológico particular, si bien respeta lo que 
                     está explícitamente regulado al respecto en la constitución de la República de Cuba.
                    </li>
                    <br/>
                    <li> Ágora 2 no obtendrá financiamiento de ninguna fuente que no sean personas naturales 
                      con derecho al voto en Cuba, en contribuciones voluntarias, reguladas y transparentes.
                    </li>
                  </ul>  
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <br/>
              <br/>
              <br/>
              <h2>Funcionamiento de Ágora 2</h2>
              <p align="justify">
                <li> Todo cubano con derecho al voto y cuenta en Télegram podrá acceder a los servicios 
                  de la plataforma e incorporarse a los debates de su comunidad.                
                </li>
                <br/>
                <li> Existirá un sistema de visibilización de apoyos a electores, y de banco de ideas en 
                  consonancia con las características de democracia 2.0. 
                </li>
                <br/>
                <li> Toda persona conectada a internet podrá observar los debates pero solo los electores podrán 
                  tener una cuenta que les permitirá intervenir en los debates y usar las demás funciones.
                </li>
                <br/>
                <li> Las reglas del debate garantizarán que todas las opiniones tengan espacio y respeto. 
                </li>
                <br/>
                <li> El código de todos los  algoritmos que se implementen para Ágora 2 será público y podrá 
                  encontrarse en su sitio de Github. 
                </li>
              </p>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
            <div>
              <br/>
              <br/>
              <br/>
              <h2>Fases de desarrollo</h2>
              <p align="justify">
                 <ol>
                    <li> Reunir de forma voluntaria un equipo de trabajo.    
                    </li>
                    <br/>
                   <li> Discutir y establecer colectivamente las especificidades de la primera versión del 
                     servicio y construirlo siguiendo un plan de trabajo estructurado.
                    </li>
                    <br/>
                    <li> Poner en línea la plataforma inicialmente como fase de prueba incluyendo solo algunas
                      circunscripciones y adicionando escalonadamente las funcionalidades. 
                    </li>
                    <br/>
                    <li> Decidir, poner a punto y publicar la forma de hacer las donaciones.  
                    </li>
                    <br/>
                    <li> Lanzar la plataforma Ágora 2 en una versión completamente funcional. Establecer el 
                      reglamento definitivo para el funcionamiento del Equipo que incluya un mecanismo de 
                      renovación democrática de los coordinadores.   
                    </li>
                  </ol>  
              </p>
            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${(props) =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${(props) =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
