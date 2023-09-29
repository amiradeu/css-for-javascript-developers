import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
        <SuperHeader />
        <MainHeader>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>
            <DesktopNav>
                <NavLink href="/sale">A&nbsp;Vendre</NavLink>
                <NavLink href="/new">Nouvelles&nbsp;Versions</NavLink>
                <NavLink href="/men">Hommes</NavLink>
                <NavLink href="/women">Femmes</NavLink>
                <NavLink href="/kids">Les&nbsp;Enfants</NavLink>
                <NavLink href="/collections">Collections</NavLink>
                {/* <NavLink href="/sale">Sale</NavLink>
                <NavLink href="/new">New&nbsp;Releases</NavLink>
                <NavLink href="/men">Men</NavLink>
                <NavLink href="/women">Women</NavLink>
                <NavLink href="/kids">Kids</NavLink>
                <NavLink href="/collections">Collections</NavLink> */}
            </DesktopNav>
            <MobileActions>
                <ShoppingBagButton>
                    <Icon id="shopping-bag" />
                    <VisuallyHidden>Open cart</VisuallyHidden>
                </ShoppingBagButton>
                <UnstyledButton>
                    <Icon id="search" />
                    <VisuallyHidden>Search</VisuallyHidden>
                </UnstyledButton>
                <UnstyledButton onClick={() => setShowMobileMenu(true)}>
                    <Icon id="menu" />
                    <VisuallyHidden>Open menu</VisuallyHidden>
                </UnstyledButton>
            </MobileActions>
            <Filler />
        </MainHeader>

        <MobileMenu
          isOpen={showMobileMenu}
          onDismiss={() => setShowMobileMenu(false)}
        />
    </header>
  );
};

const MainHeader = styled.div`
  overflow: auto;
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.tabletAndSmaller} {
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
    align-items: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-inline: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  /*
    min 950px 1rem
    max  device 48px (3rem)
  */
  gap: clamp(
    1rem,
    9.2vw - 4.5rem,
    3.5rem
  );
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
    display: none;

    @media ${QUERIES.tabletAndSmaller} {
        display: flex;
        gap: 32px;
    }

    @media ${QUERIES.phoneAndSmaller} {
      gap: 16px;
    }
`

const LogoWrapper = styled.div`
    flex: 1;

    @media ${QUERIES.tabletAndSmaller} {
        flex: revert;
    }
`

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

// custom modification to ensure evenly space icons
const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

export default Header;
