import * as React from "react";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import { ButtonComponentProps } from "../../types";

const NeuButtonRoot = styled('button')(
  () => `
    width: 11.75rem;
    height: 3.5rem;
    padding: 0rem;
    box-shadow: 0.375rem 0.375rem 0.75rem 0rem rgba(0, 0, 0, 0.16), -0.375rem -0.375rem 0.75rem 0rem rgba(255, 255, 255, 0.04);
    border-radius: 1rem;
    border: 0.25rem solid rgba(0, 0, 0, 0.08);
    background-image: linear-gradient(100deg, rgba(0, 0, 0, 0) 3%, #000 96%), linear-gradient(to bottom, #000, #000);
    background-origin: border-box;
    background-clip: content-box, border-box;
    color: #e1aa75;

    &:hover {
      cursor: pointer;
    };

    &:focus {
      border: 0.25rem solid rgba(255, 255, 255, 0.02);
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
        component={NeuButtonRoot}
      >
        {text}
      </ButtonUnstyled>
  );
}
