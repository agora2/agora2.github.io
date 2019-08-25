import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(sourceInstanceName: { eq: "art" }, name: { eq: "build" }) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={(data) => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Art>
              <Img fluid={data.art_build.childImageSharp.fluid} />
            </Art>
            <Text>
              <p align="justify">
                <i>
                "[...] la gente en las ventanas y la muchedumbre [...] saludaron en la república nueva el poder de someter 
                la ambición noble a la voluntad general y acallar ante el veto de la patria la convicción misma, fanática 
                o previsora, del modo de salvarla."
                </i> 
              </p>
              <br/>
              <p align="right">
                <i>
                José Martí, Patria (1892).
                </i>
              </p>
              <h1>
                <br/>
                Democracia 2.0 en la circunscripción
                <br />
              </h1>
              <br />
              <p>
                <StyledExternalLink href="https://github.com/agora2/agora2.github.io/blob/develop/DocsToDownload/proyecto_Agora_v1.pdf">
                  Descargar el PDF del proyecto &nbsp;&#x2794;
                </StyledExternalLink>
              <br />
                <StyledExternalLink href="https://github.com/agora2/agora2.github.io/blob/develop/DocsToDownload/A01-2019_Codigo_de_Conducta.pdf">
                  Descargar el código de conducta del Equipo &nbsp;&#x2794;
                </StyledExternalLink>
              </p>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${(props) => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.color.black.regular};
  }
`;

export default Header;
