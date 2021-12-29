import * as React from "react";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import { ButtonComponentProps } from "../../types";

const FlatButtonRoot = styled('button')(
  () => `
    width: 99px;
    height: 40px;
    display: flex;
    flex-direction: row;
    flex-grow: 0;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0px;
    border-radius: 8px;
    border: 0px none transparent;
    background-color: #000;
    color: #cfd0d0;

    &:hover {
      cursor: pointer;
    };
  `,
);

export default function FlatButton(props: ButtonComponentProps) {
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
        component={FlatButtonRoot}
      >
        {text}
      </ButtonUnstyled>
  );
}
