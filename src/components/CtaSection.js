import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { markdownify } from '../utils';
import SectionActions from './SectionActions';

const Container = styled(BackgroundImage)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  margin-bottom: 0;
  width: 100%;
`;

const Content = styled.div`
  padding: 2.5em 0 2em;
  position: relative;
  text-align: center;
`;

const Title = styled.h2`
  color: ${props => props.hasBackgroundImage ? '#fff' : '#282f36'};
  font-size: 2.25em;
  font-weight: 700;
  line-height: 1.2;
  margin: 2.25rem 0 1.125rem;
`;

const Copy = styled.p`
  color: ${props => props.hasBackgroundImage ? '#fff' : '#536171'};
  line-height: 1.5;
  margin: 0 0 1.5rem;
  text-align: center;
`;

const ActionsContainer = styled.div`
  justify-content: center;
`;

export default function CtaSection(props) {
  const {
    section
  } = props;

  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            absolutePath
            childImageSharp {
              fluid(maxWidth: 1920, maxHeight: 768, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const image = data.images.edges.find(n => {
    return n.node.absolutePath.includes(section?.background_image);
  });

  return (
    <Container fluid={image?.node?.childImageSharp?.fluid} Tag="section">
      <div className="container container--lg">
        <Content>
          <div className="container container--md">
            {section?.title && (
              <Title hasBackgroundImage={!!section?.background_image}>{section?.title}</Title>
            )}
            {section?.subtitle && (
              <Copy hasBackgroundImage={!!section?.background_image}>
                {markdownify(section.subtitle)}
              </Copy>
            )}
            {section?.actions && (
              <ActionsContainer>
                <SectionActions {...props} actions={section?.actions} center />
              </ActionsContainer>
            )}
          </div>
        </Content>
      </div>
    </Container>
  );
}
