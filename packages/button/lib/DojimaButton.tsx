import * as React from "react";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import { ButtonComponentProps } from "@dojima-ui/types";

const DojimaButtonRoot = styled('button')(
  () => `
    width: 18.75rem;
    height: 3.5rem;
    padding: 0rem;
    box-shadow: 0.375rem 0.375rem 0.75rem 0rem rgba(0, 0, 0, 0.16), -0.375rem -0.375rem 0.75rem 0rem rgba(255, 255, 255, 0.04);
    border-radius: 1rem;
    border: 0.25rem solid transparent;
    background-image: linear-gradient(to bottom, #ffa651, #e17813), linear-gradient(99deg, #2e3234 10%, #000000 92%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    color: #fff;

    &:hover {
      cursor: pointer;
    };

    &:focus {
      background-image: linear-gradient(to bottom, #ffa651, #e17813), linear-gradient(96deg, #3b4042 5%, #1d1f21 93%);
      box-shadow: 0.375rem 0.375rem 0.75rem 0rem rgba(0, 0, 0, 0.16), 
                    -0.375rem -0.375rem 0.75rem 0rem rgba(255, 255, 255, 0.04), 
                    inset 0rem 0.875rem 0.875rem 0rem rgba(0, 0, 0, 0.32);
    };

    &.Mui-disabled {
      box-shadow: none;
      opacity: 0.5;
      cursor: not-allowed;
    };
  `,
);

export default function DojimaButton(props: ButtonComponentProps) {
  const {
    text,
    onClick,
    disable,
    className,
    fullWidth,
    buttonStyles
  } = props;
  
  return (
      <ButtonUnstyled
        fullWidth={fullWidth}
        style={buttonStyles}
        className={className}
        onClick={onClick}
        disabled={disable}
        component={DojimaButtonRoot}
      >
        {text}
      </ButtonUnstyled>
  );
}
