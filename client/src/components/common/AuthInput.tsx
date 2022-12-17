import { ChangeEvent } from "react";
import styled from "styled-components";
import React from "react";

const StyledAuthInput = styled.div<{ borderColor: string }>`
  width: 100%;
  height: 50px;
  border-bottom: 2px solid ${(props) => props.borderColor || "#eeeeee"};
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 20px;
`;

interface AuthInputProps {
  label: string;
  name: string;
  type: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
  value: string;
  borderColor?: string;
}

const AuthInput = ({ label, name, type, onChange, value, borderColor }: AuthInputProps) => {
  return (
    <StyledAuthInput borderColor={borderColor || ""}>
      <Input placeholder={label} name={name} type={type} onChange={onChange} value={value} />
    </StyledAuthInput>
  );
};

export default React.memo(AuthInput);
