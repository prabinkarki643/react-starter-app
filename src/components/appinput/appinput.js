import React, { useState } from "react";
import { Input } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { IoEyeOffSharp } from "react-icons/io5";
const AppInput = styled(Input)`
  border-top-width: 0px !important;
  border-left-width: 0px !important;
  border-right-width: 0px !important;
  padding-left: 0px !important;
  border-color: ${(props) => props.theme.palette.primary.main};
  &:focus {
    border-top-width: 0px !important;
    border-left-width: 0px !important;
    border-right-width: 0px !important;
    border-color: ${(props) => props.theme.palette.primary.dark} !important;
    outline: none !important;
    -webkit-appearance: none !important;
    box-shadow: none !important;
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
  }
  &:hover {
    border-top-width: 0px !important;
    border-left-width: 0px !important;
    border-right-width: 0px !important;
    border-color: ${(props) => props.theme.palette.primary.dark} !important;
    outline: none !important;
    -webkit-appearance: none !important;
    box-shadow: none !important;
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
  }
  &:active {
    border-top-width: 0px !important;
    border-left-width: 0px !important;
    border-right-width: 0px !important;
    border-color: ${(props) => props.theme.palette.primary.dark} !important;
    outline: none !important;
    -webkit-appearance: none !important;
    box-shadow: none !important;
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
  }
`;

export default AppInput;

export function PasswordAppInput({ style, ...props }) {
  const [visible, setVisible] = useState(false);
  return (
    <AppInput
      type={visible ? "text" : "password"}
      suffix={
        visible ? (
          <EyeOutlined onClick={() => setVisible(!visible)} />
        ) : (
          <IoEyeOffSharp onClick={() => setVisible(!visible)} />
        )
      }
      {...props}
    />
  );
}
