import React from 'react';
import styled from '@emotion/styled';
import _ from 'lodash';
import Components from './index';
import Container from './Container';
import SectionActions from './SectionActions';

const Title = styled.h2`
  font-weight: 500;
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-bottom: 30px;
  margin-top: 40px;
  padding: 10px 0;
`;

const ColumnsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const Column = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    margin-right: 40px;
    width: calc(${props => 100 / props.numberOfColumns}% - ${props => ((props.numberOfColumns - 1) * 40) / props.numberOfColumns}px);
  
    &:nth-of-type(${props => props.numberOfColumns}n) {
      margin: 0;
    }
  }
`;

const ActionsContainer = styled.div`
  justify-content: center;
  text-align: center;
`;

export default function ColumnSection(props) {
  const {
    section
  } = props;

  return (
    <Container>
      <Title>{section?.title}</Title>

      <ColumnsSection>
        {section?.items && section.items.map((item, index) => {
          const component = _.upperFirst(_.camelCase(item.type));
          const Component = Components[component];
          return (
            <Column key={index} numberOfColumns={section?.numberOfColumns || 3}>
              <Component {...item} />
            </Column>
          );
        })}
      </ColumnsSection>

      {section?.actions && (
        <ActionsContainer>
          <SectionActions {...props} actions={section?.actions} center />
        </ActionsContainer>
      )}
    </Container>
  );
}
