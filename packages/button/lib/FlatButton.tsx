import * as React from "react";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import { ButtonComponentProps } from "../../types";

const FlatButtonRoot = styled('button')(
  () => `
    width: 6rem;
    height: 2.5rem;
    padding: 0rem;
    border-radius: 0.5rem;
    border: 0rem none transparent;
    background-color: #000;
    color: #cfd0d0;

    &:hover {
      cursor: pointer;
    };

    &.Mui-disabled {
      box-shadow: none;
      opacity: 0.5;
      cursor: not-allowed;
    };
  `,
);

export default function FlatButton(props: ButtonComponentProps) {
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
        component={FlatButtonRoot}
      >
        {text}
      </ButtonUnstyled>
  );
}
