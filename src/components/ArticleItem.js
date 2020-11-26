import React from 'react';
import styled from '@emotion/styled';
import { Link } from '../utils';

const Container = styled.article`
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 2px 10px 0 rgba(51,51,51,.05), 0 4px 20px 0 rgba(51,51,51,.1);
  margin-bottom: 20px;
  padding: 20px;
`;

const Title = styled(Link)`
  color: #333;
  display: block;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin: 0 0 10px;
  text-decoration: none;

  &:hover, &:focus, &:active {
    color: #4388de;
    text-decoration: underline;
  }
`;

const Content = styled.p`
  color: #333;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 10px;
`;

const Date = styled.p`
  color: #3339;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 0;
`;

export default function ArticleItem({
  content,
  date,
  link,
  title
}) {
  return (
    <Container>
      <Title to={link}>{ title }</Title>
      <Content>{ content }</Content>
      <Date>{ date }</Date>
    </Container>
  );
}
