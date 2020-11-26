import React from 'react';
import styled from '@emotion/styled';
import _ from 'lodash';
import { Link, withPrefix } from '../utils';
import Action from './Action';

const StyledHeader = styled.header`
  background: #fff;
  border: 1px solid #eee;
  padding-bottom: 1.125rem;
  padding-top: 1.125rem;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const StyledHeaderPad = styled.div`
  display: block;
  height: 79px;
`;

const StyledLogoLink = styled(Link)`
  max-width: 180px;
`;

const StyledLogo = styled.img`
  display: block;
  height: auto;
  width: 100%;
`;

export default function Header(props) {
  const {
    pageContext
  } = props;

  return (
    <>
      <StyledHeader className="site-header">
        <div className="container container--lg">
          <nav className="navbar" aria-label="Main Navigation">
            <Link className="sr-only" to="#content">Skip to main content</Link>
            {pageContext?.site?.siteMetadata?.header?.logo ? (
              <StyledLogoLink to={withPrefix('/')}>
                <StyledLogo src={withPrefix(pageContext?.site?.siteMetadata?.header?.logo)} alt={pageContext?.site?.siteMetadata?.header?.title} />
              </StyledLogoLink>
            ) :
              <Link className="h4 navbar__title" to={withPrefix('/')}>
                {pageContext?.site?.siteMetadata?.header?.title}
              </Link>
            }
            {pageContext?.site?.siteMetadata?.header?.has_nav && (
              <>
                <button aria-label="Menu" className="btn btn--icon btn--clear navbar__menu-btn js-nav-toggle">
                  <svg className="icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z" /></svg>
                </button>
                <div className="navbar__menu">
                  <div className="navbar__scroller">
                    <div className="navbar__inner">
                      <button aria-label="Close" className="btn btn--icon btn--clear navbar__close-btn js-nav-toggle">
                        <svg className="icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" /></svg>
                      </button>
                      <ul className="navbar__list menu">
                        {pageContext?.site?.siteMetadata?.header?.nav_links.map((action, action_idx) => {
                          const pageUrl = _.trim(pageContext?.url, '/');
                          const actionUrl = _.trim(action?.url, '/');
                          return (
                            <li key={action_idx}>
                              <Action {...props} action={action} isActive={pageUrl === actionUrl} nav />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}
          </nav>
        </div>
      </StyledHeader>
      <StyledHeaderPad />
    </>
  );
}
