import { ChangeEvent } from "react";
import styled from "styled-components";

const StyledAuthInput = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #eeeeee;
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
}

const AuthInput = ({ label, name, type, onChange, value }: AuthInputProps) => {
  return (
    <StyledAuthInput>
      <Input placeholder={label} name={name} type={type} onChange={onChange} value={value} />
    </StyledAuthInput>
  );
};

export default AuthInput;
