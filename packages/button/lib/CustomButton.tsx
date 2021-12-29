import * as React from "react";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import { ButtonComponentProps } from "../../types";

const CustomButtonRoot = styled('button')(
  () => `
    width: 301px;
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
    border: 5px solid transparent;
    background-image: linear-gradient(to bottom, #ffa651, #e17813), linear-gradient(99deg, #2e3234 10%, #000000 92%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    color: #fff;

    &:hover {
      cursor: pointer;
    };
  
    &:focus {
      background-image: linear-gradient(to bottom, #ffa651, #e17813), linear-gradient(96deg, #3b4042 5%, #1d1f21 93%);
      box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.16), -6px -6px 12px 0 rgba(255, 255, 255, 0.04), inset 0 14px 14px 0 rgba(0, 0, 0, 0.32);
    };
  
    &.Mui-disabled {
      box-shadow: none;
      opacity: 0.5;
      cursor: not-allowed;
    };
  `,
);

export default function CustomButton(props: ButtonComponentProps) {
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
        component={CustomButtonRoot}
      >
        {text}
      </ButtonUnstyled>
  );
}
