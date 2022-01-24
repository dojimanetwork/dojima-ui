import * as React from "react";
import { GridComponentProps } from "@dojima-ui/types";
import { Grid } from "@mui/material";

interface GridProps extends GridComponentProps{
  children: React.ReactNode;
}

export default function ButtonGrid(props: GridProps) {
  const {
    justifyContent,
    xs,
    lg,
    md,
    xl,
    GridStyles,
    alignContent,
    alignItems,
    children,
  } = props;
  return (
    <Grid
      container
      item
      justifyContent={justifyContent}
      xs={xs ?? false}
      md={md ?? false}
      lg={lg ?? false}
      xl={xl ?? false}
      className={GridStyles}
      alignContent={alignContent}
      alignItems={alignItems}
    >
      {children}
    </Grid>
  );
}
