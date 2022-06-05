import React from "react";
import { Button } from "antd";
import styled, { useTheme } from "styled-components";
export const AppButtonFilled = styled(Button)`
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};
  border-radius: 5px;
  border-width: 2px;
  border-color: ${(props) => props.theme.palette.primary.main};
  &:hover {
    background-color: ${(props) => props.theme.palette.primary.dark};
    color: ${(props) => props.theme.palette.primary.contrastText};
    border-color: ${(props) => props.theme.palette.primary.dark};
  }
`;

export const AppButtonGhost = styled(Button)`
  color: ${(props) => props.theme.palette.primary.main};
  border-radius: 5px;
  border-width: 2px;
  background: transparent;
  border-color: ${(props) => props.theme.palette.primary.main};
  &:hover {
    color: ${(props) => props.theme.palette.primary.dark};
    border-color: ${(props) => props.theme.palette.primary.dark};
    background: transparent;
  }
`;

export const AppButtonBorderless = styled(Button)`
  color: ${(props) => props.theme.palette.primary.main};
  background: transparent;
  border: none;
  &:hover {
    color: ${(props) => props.theme.palette.primary.dark};
    background: transparent;
  }
  &:disabled {
    background: transparent;
  }
`;

export const SocialButton = ({ socialIcon, children,style,...props }) => {
  const theme = useTheme();
  return (
    <>
    <AppButtonGhost
      size="large"
      style={{
        borderColor: theme.palette.grey[500],
        borderWidth: 1,
        color: "black",
        fontSize: 13,
        height:45,
        ...style
      }}
      icon={socialIcon}
      {...props}
    >
      {children}
    </AppButtonGhost>
    <style jsx="true">{`
    `}</style>
    </>
  );
};
