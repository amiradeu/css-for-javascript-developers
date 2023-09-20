import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

// fontSize: divide with 16px as root pixel
// padding: reduce side by border size
const SIZES = {
  small: {
    "--fontSize": 16 / 16 + "rem",
    "--padding": "6px 12px",
    "--borderRadius": 2 + "px"
  },
  medium: {
    "--fontSize": 18 / 16 + "rem",
    "--padding": "14px 20px",
    "--borderRadius": 2 + "px"
  },
  large: {
    "--fontSize": 21 / 16 + "rem",
    "--padding": "18px 32px",
    "--borderRadius": 4 + "px"
  }
};

const Button = ({ variant, size, children }) => {
  const styles = SIZES[size];

  let Component;

  if (variant === "fill") Component = FillButton;
  else if (variant === "outline") Component = OutlineButton;
  else if (variant === "ghost") Component = GhostButton;
  else throw new Error(`Unrecognized Button Variant: ${variant}`);

  return <Component style={styles}>{children}</Component>;
};

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;

  padding: var(--padding);

  border-radius: var(--borderRadius);
  /* ensure all buttons have the same size
    those with or without borders
  */
  border: 2px solid transparent;

  &:focus {
    outline: 2px solid ${COLORS.primary};
    outline-offset: 4px;
  }
`;

const FillButton = styled(ButtonBase)`
  color: ${COLORS.white};
  background-color: ${COLORS.primary};

  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`;

const OutlineButton = styled(ButtonBase)`
  color: ${COLORS.primary};
  background-color: ${COLORS.white};
  border: 2px solid ${COLORS.primary};

  &:hover {
    background-color: ${COLORS.offwhite};
  }
`;

const GhostButton = styled(ButtonBase)`
  color: ${COLORS.gray};
  background-color: transparent;

  &:focus {
    /* only changing the color */
    outline-color: ${COLORS.transparentGray75};
  }

  &:hover {
    color: ${COLORS.black};
    background-color: ${COLORS.transparentGray15};
  }
`;

export default Button;
