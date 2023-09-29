/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <Filler>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
        </Filler>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
`

const Content = styled(DialogContent)`
  height: 100%;
  padding: 32px;
  background: var(--color-white);
  display: flex;
  flex: 0 1 300px;
  flex-direction: column;
  /*
    design actually centers the nav,
    not just simply space-between
   */
  /* justify-content: space-between; */
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0px;
  padding: 16px;
`

const Filler = styled.div`
  flex: 1;
`
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  /* 22px - 6px to compensate for
    text box being larger in web
    compared to the design
  */
  gap: 16px;
`

const NavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: var(--color-gray-900);
  font-size: ${18 / 16}rem;
  font-weight: var(--font-medium);

  &:hover {
    color: var(--color-secondary);
  }
`

const Footer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  /* bring to bottom end */
  justify-content: flex-end;
  /* design compensation: 14-4px */
  gap: 10px;
`

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
  font-size: ${14 / 16}rem;
`
export default MobileMenu;
