import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
export default function withAppColor(WrappedComponent) {
  return ({ style, color = "primary", ...props }) => {
    const theme = useTheme();
    return (
      <WrappedComponent
        style={{
          backgroundColor: theme.palette[color].main,
          color: theme.palette[color].contrastText,
          ...style,
        }}
        {...props}
      />
    );
  };
}
