import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <Selection value={value} onChange={onChange} arrow>
        {children}
      </Selection>
      <Presentation>
        {displayedValue}
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" size={24}></Icon>
        </IconWrapper>
      </Presentation>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

const Selection = styled.select`
  /** position, size will be based on wrapper */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /** Make native select dissapears but still usable
    transparent in terms of view (but clickable)
  */
  opacity: 0;
  /** fix to override default height in safari */
  appearance: none;
  -webkit-appearance: none;

`
const Presentation = styled.div`
  padding: 12px 16px;
  // increase padding for icon
  padding-right: 52px;
  border-radius: 8px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16 }rem;

  ${Selection}:hover + & {
    color: ${COLORS.black};
  }

  ${Selection}:focus + & {
    /* fallback */
    outline: 1px dotted #212121;
    /* reconstruct default outline */
    outline: 5px auto -webkit-focus-ring-color;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  /** icon itself might be 16px from edge,
    but because it sits inside a box wrapper with a size,
    we can minus it: 16px from edge - 6px from box -> 10px leftover
  */
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);

  /** disable interaction with the icon
      allowing us to click on the transparent select
      transparent in terms of click (but viewable)
  */
  pointer-events: none;
`

export default Select;
