import React from 'react';
import styled from '@emotion/styled';
import Action from './Action';
import { htmlToReact } from '../utils';

const StyledFooter = styled.footer`
  background-color: #eee;
  box-sizing: border-box;
  font-size: 1rem;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  font-size: 1rem;
  line-height: 1.125rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 1180px;
  padding: 20px;
  width: 100%;
`;

const Content = styled.p`
  margin-bottom: .7rem;
`;

const FooterMenu = styled.ul`
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const FooterMenuItem = styled.li`
  color: #4388de;
  font-size: 1rem;
  margin-bottom: 0;
  color: #536171;
  line-height: 1.25;
  border-right: 1px solid #e1e4e9;
  margin-right: 0.75rem;
  padding-right: 0.75rem;
  text-decoration: none;

  &:last-child {
    border-right: 0;
  }
`;

export default function Footer(props) {
  const footer = props?.pageContext?.site?.siteMetadata?.footer || {};

  return (
    <StyledFooter>
      <Wrapper>
        <Content>
          {footer.content && (
            htmlToReact(footer.content)
          )}
        </Content>
        {footer.has_nav && (
          <div className="site-footer__nav">
            {footer.has_nav && (
              <FooterMenu>
                {footer.nav_links.map((action, index) => (
                  <FooterMenuItem key={index}>
                    <Action {...props} action={action} />
                  </FooterMenuItem>
                ))}
              </FooterMenu>
            )}
          </div>
        )}
      </Wrapper>
    </StyledFooter>
  );
}
