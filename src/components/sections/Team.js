import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const TEAM = [
  {
    name: 'Rogelio Díaz-Méndez',
    url: 'https://github.com/agora2/agora2.github.io/blob/develop/DocsToDownload/Equipo/Ficha_Rogelio.txt',
    image: 'rogelio.jpg',
    role: 'Coordinador'
  },
  {
    name: 'Tamara Roselló Reina',
    url: 'https://github.com/agora2/agora2.github.io/blob/develop/DocsToDownload/Equipo/Ficha_Tamara.txt',
    image: 'tamara.jpg',
    role: 'Coordinadora'
  },
  {
    name: 'Adrian Hernández-Méndez',
    url: 'https://github.com/agora2/agora2.github.io/blob/develop/DocsToDownload/Equipo/Ficha_Adrian.txt',
    image: 'adrian.jpg',
    role: 'Coordinador'
  },
  {
    name: 'Eduardo Sánchez',
    url: 'https://github.com/agora2/agora2.github.io/blob/develop/DocsToDownload/Equipo/Ficha_Eduardo.txt',
    image: 'eduardo.jpg',
    role: 'Desarrollador'
  },
  {
    name: 'Marcos Paz Sablón',
    url: 'https://github.com/agora2/agora2.github.io/blob/develop/DocsToDownload/Equipo/Ficha_Marcos.txt',
    image: 'marcos.jpg',
    role: 'Comunicador'
  },
  {
    name: 'Norma Palmero',
    url: 'https://github.com/agora2/agora2.github.io/blob/develop/DocsToDownload/Equipo/Ficha_Norma.txt',
    image: 'norma.jpg',
    role: 'Colaboradora'
  },

  {
    name: 'Alejandro Nuñez',
    url: 'https://github.com/agora2/agora2.github.io/blob/develop/DocsToDownload/Equipo/Ficha_Alejandro.txt',
    image: 'alejandro.png',
    role: 'Desarrollador'
  },
  
];

const Team = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "team" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        art_team: file(sourceInstanceName: { eq: "art" }, name: { eq: "team_work" }) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={(data) => (
      <Section id="equipo" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1>El Equipo</h1>
          <TeamGrid>
            {TEAM.map(({ name, url, image, role }) => {
              const img = data.allFile.edges.find(({ node }) => node.relativePath === image).node;
              return (
                <div>
                  <Img fluid={img.childImageSharp.fluid} alt={name} />
                  <Title><a href = {url} >{name}</a></Title>
                  <Subtitle>{role}</Subtitle>
                </div>
              );
            })}
          </TeamGrid>
          <TeamCallForActionSection>
            <h3>Interesado en colaborar? </h3>
            <p>
              Lee nuestro{' '}
              <ExternalLink href="https://github.com/agora2/agora2.github.io/blob/develop/DocsToDownload/A01-2019_Codigo_de_Conducta.pdf">
                Código de Conducta
              </ExternalLink>{' '}
              y escríbenos a{' '}
              <ExternalLink href="mailto:agora2coordinadores@gmail.com">
                agora2coordinadores@gmail.com
              </ExternalLink>
            </p>
          </TeamCallForActionSection>
          <TeamCallForActionSection>
            <h3>Sugerencias? Comentarios? Ideas? </h3>
            <p>
              Lee{' '}
              <ExternalLink href="https://github.com/agora2/agora2.github.io/blob/develop/DocsToDownload/proyecto_Agora_v1.pdf">
                el artículo
              </ExternalLink>{' '}
              del proyecto y escríbenos a{' '}
              <ExternalLink href="mailto:agora2coordinadores@gmail.com">
                agora2coordinadores@gmail.com
              </ExternalLink>
            </p>
          </TeamCallForActionSection>
          <Art>
            <Img fluid={data.art_team.childImageSharp.fluid} />
          </Art>
          <ArtMobile>
            <Img fluid={data.art_team.childImageSharp.fluid} />
          </ArtMobile>
        </Container>
      </Section>
    )}
  />
);

const TeamCallForActionSection = styled.section`
  padding: 20px 0;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  width: 60%;
  margin-top: 72px;
  margin-bottom: 45px;

  @media (max-width: ${(props) => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${(props) => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Art = styled.figure`
  width: 800px;
  margin: -80px 0;
  position: absolute;
  top: 0;
  left: 70%;

  @media (max-width: ${(props) => props.theme.screen.lg}) {
    top: 20%;
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    display: none;
  }
`;

const ArtMobile = styled.figure`
  width: 100%;
  margin: 0;
  display: none;
  margin-top: 64px;
  margin-bottom: -60%;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    display: block;
  }
`;

const Title = styled.p`
  margin-top: 16px;
  color: ${(props) => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${(props) => props.theme.font_size.small};
  color: ${(props) => props.theme.color.black.light};
`;

export default Team;
