/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    borderRadius: 4
  },
  medium: {
    height: 12,
    padding: 0,
    borderRadius: 4
  },
  large: {
    height: 24,
    padding: 4,
    borderRadius: 8
  },
}

const ProgressBar = ({ value, size }) => {
    const styles = STYLES[size]

    if(!styles) {
      throw new Error(`Unknown size passed to progress bar: ${size}`)
    }
    return (
      <Wrapper
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-busy={value == 100}
        style={{
          "--borderRadius": styles.borderRadius + "px",
          "--padding": styles.padding + "px"
        }}
      >
        <VisuallyHidden>{value}%</VisuallyHidden>
        <BarWrapper>
          <Bar
            style={{
              "--width": value + "%",
              // height looks down the children
              "--height": styles.height + "px",
            }}
            >
          </Bar>
        </BarWrapper>
      </Wrapper>
    )
};

const Wrapper = styled.div`
  border-radius: var(--borderRadius);
  padding: var(--padding);

  /* type x-offset y-offset blur color */
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
`

const BarWrapper = styled.div`
  /* trim off edges when near-full */
  border-radius: 4px;
  overflow: hidden;
`

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  border-radius: 4px 0 0 4px;

  background-color: ${COLORS.primary};
`

export default ProgressBar;
