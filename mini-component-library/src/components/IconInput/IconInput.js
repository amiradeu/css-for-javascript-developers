import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    fontSize: 14,
    borderThickness: 1,
    iconSize: 16,
    iconSpacing: 24,
    padding: 4,
  },
  large: {
    fontSize: 18,
    borderThickness: 2,
    iconSize: 24,
    iconSpacing: 36,
    padding: 8,
  }
}
const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const styles = SIZES[size]
  if(!styles) {
    throw new Error(`Invalid size: ${size}`)
  }

  return (
  <InputWrapper>
    <InputText
    type="text"
    placeholder={placeholder}
    style={{
      '--width' : width + 'px',
      '--fontSize' : styles.fontSize + 'px',
      '--borderThickness' : styles.borderThickness + 'px',
      '--iconSpacing': styles.iconSpacing + 'px',
      '--padding': styles.padding + 'px'
    }}
    ></InputText>
    <IconWrapper style={{
      '--iconSize': styles.iconSize + 'px'
    }}>
      <Icon id={icon} size={styles.iconSize}></Icon>
    </IconWrapper>
    <VisuallyHidden>{label}</VisuallyHidden>
  </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};
`

const InputText = styled.input`
  width: var(--width);
  font-size: var(--fontSize);
  /** Avoid using names (bold, normal etc)
      because bold by default is 700
      and if a certain font does not have that specific value
      the browser will try to automatically generate it
      which tends to be funky and not nice
  */
  font-weight: 700;
  color: ${COLORS.gray700};
  border: none;
  border-bottom: var(--borderThickness) solid ${COLORS.black};
  padding: var(--padding);
  padding-inline-start: var(--iconSpacing);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 500;
  }

  &:focus {
      outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  pointer-events: none;
  /** Icon is best to follow text color
      instead of trying to set explicityly
      require the parent wrapper to set color
  */
  color: inherit;
  width: var(--iconSize);
  height: var(--iconSize);

  ${InputText}:hover + & {
    color: ${COLORS.black}
  }
`

export default IconInput;
