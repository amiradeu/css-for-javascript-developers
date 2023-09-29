/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS, WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Mobile Navigation">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
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
  background: hsl(220deg 5% 40% / 0.8);
  display: flex;
  flex-direction: row-reverse;
`

const Content = styled(DialogContent)`
  position: relative;
  /* width: 300px; */
  padding: 32px;
  background: ${COLORS.white};
  display: flex;
  flex: 0 1 300px;
  flex-direction: column;
  justify-content: space-between;
`

const CloseButton = styled(UnstyledButton)`
  margin-left: auto;
`

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`

const Link = styled.a`
  text-decoration: none;
`

const NavLink = styled(Link)`
  text-transform: uppercase;
  color: ${COLORS.gray[900]};
  font-size: ${18 / 16}rem;
  font-weight: ${WEIGHTS.medium};

  &:hover {
    color: ${COLORS.secondary};
  }
`

const FooterLink = styled(Link)`
  color: ${COLORS.gray[700]};
  font-size: ${14 / 16}rem;
`

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`
export default MobileMenu;
