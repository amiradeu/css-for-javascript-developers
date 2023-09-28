import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <DesktopHeader>
        <SuperHeader />
        <MainHeader>
          <Side>
            <Logo />
          </Side>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Side />
        </MainHeader>
      </DesktopHeader>

      <MobileHeader>
        <MobileSuperHeader />
        <MobileMainHeader>
          <Logo />
          <Side></Side>
          <Icon id="shopping-bag" />
          <Icon id="search" />
          <Icon id="menu" onClick={() => setShowMobileMenu(true)} />
        </MobileMainHeader>
        <MobileMenu
          isOpen={showMobileMenu}
          onDismiss={() => setShowMobileMenu(false)}
        />
      </MobileHeader>
    </header>
  );
};

const DesktopHeader = styled.div`
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.phoneAndSmaller} {
    padding-inline: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const MobileHeader = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: block;
  }
`

const MobileSuperHeader = styled(MobileHeader)`
    height: 4px;
    background-color: ${COLORS.gray[900]}
`

const MobileMainHeader = styled(MainHeader)`
  gap: 32px;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`
export default Header;
