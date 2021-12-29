import * as React from "react";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import { ButtonComponentProps } from "../../types";

const NeuButtonRoot = styled('button')(
  () => `
    width: 188px;
    height: 56px;
    display: flex;
    flex-direction: row;
    flex-grow: 0;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0px;
    box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.16), -6px -6px 12px 0 rgba(255, 255, 255, 0.04);
    border-radius: 14px;
    border: 2px solid rgba(0, 0, 0, 0.08);
    background-image: linear-gradient(100deg, rgba(0, 0, 0, 0) 3%, #000 96%), linear-gradient(to bottom, #000, #000);
    background-origin: border-box;
    background-clip: content-box, border-box;
    color: #e1aa75;

    &:hover {
      cursor: pointer;
    };
  
    &:focus {
      border: 2px solid rgba(255, 255, 255, 0.02);
      background-image: linear-gradient(100deg, #000 3%, rgba(0, 0, 0, 0) 96%), linear-gradient(to bottom, #000, #000);
    };
  
    &.Mui-disabled {
      box-shadow: none;
      opacity: 0.5;
      cursor: not-allowed;
    };
  `,
);

export default function NeuButton(props: ButtonComponentProps) {
  const {
    text,
    variant,
    onClick,
    disable,
    startIcon,
    endIcon,
    className,
    fullWidth,
    buttonStyles
  } = props;
  
  return (
      <ButtonUnstyled
        fullWidth={fullWidth}
        variant={variant ?? 'contained'}
        startIcon={startIcon}
        endIcon={endIcon}
        style={buttonStyles}
        className={className}
        onClick={onClick}
        disabled={disable}
        component={NeuButtonRoot}
      >
        {text}
      </ButtonUnstyled>
  );
}
