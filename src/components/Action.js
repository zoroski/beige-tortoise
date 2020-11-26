import React from 'react';
import styled from '@emotion/styled';
import { Link, withPrefix } from '../utils';

const StyledLinkPrimary = styled(Link)`
  background-color: #5fc99d;
  border: 2px solid #5fc99d;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(51,51,51,.05), 0 4px 20px 0 rgba(51,51,51,.1);
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 1em;
  font-weight: 700;
  line-height: 1.25;
  margin: ${props => props.center ? '0 0.5625em 1.125em 0.5625em' : '0 1.125em 1.125em 0'};
  padding: 0.625em 1.5em;
  text-align: center;
  text-decoration: none;
  transition: .2s ease;
  vertical-align: middle;

  &:hover, &:focus, &:active {
    background-color: #4fb98d;
    border-color: #4fb98d;
    outline: 0;
    text-decoration: none;
  }
`;

const StyledLinkSecondary = styled(Link)`
  background-color: transparent;
  border: 2px solid #5fc99d;
  border-radius: 5px;
  box-sizing: border-box;
  color: #5fc99d;
  cursor: pointer;
  display: inline-block;
  font-size: 1em;
  font-weight: 700;
  line-height: 1.25;
  margin: ${props => props.center ? '0 0.5625em 1.125em 0.5625em' : '0 1.125em 1.125em 0'};
  padding: 0.625em 1.5em;
  text-align: center;
  text-decoration: none;
  transition: .3s ease;
  vertical-align: middle;

  &:hover, &:focus, &:active {
    opacity: .8;
    outline: 0;
    text-decoration: none;
  }
`;

const StyledLink = styled(Link)`
  color: #4388de;
  text-decoration: none;

  ${props => props.nav && `
    color: #333;
    font-size: 18px;
    font-weight: 500;
    margin-right: 10px;
    padding: 10px;
  `}

  ${props => props.isActive && `
    background-color: #4388de;
    border-radius: 4px;
    color: #fff !important;
  `}

  &:hover, &:focus, &:active {
    text-decoration: underline;
  }
`;

export default function Action({
  action,
  center,
  isActive,
  nav
}) {
  const style = action?.style || 'primary';
  const Component = style === 'primary'
    ? StyledLinkPrimary
    : style === 'secondary'
      ? StyledLinkSecondary
      : StyledLink;

  return (
    <Component
      center={center}
      isActive={isActive}
      nav={nav}
      to={withPrefix(action?.url)} {...(action?.new_window ? ({ target: '_blank', rel: 'noopener' }) : null)}
    >
      {action?.label}
    </Component>
  );
}
