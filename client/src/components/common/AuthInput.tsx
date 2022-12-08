import styled from "styled-components";

const StyledAuthInput = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #eeeeee;

  &:focus {
    border-bottom: 1px solid black;
  }
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
}

const AuthInput = ({ label, name, type }: AuthInputProps) => {
  return (
    <StyledAuthInput>
      <Input placeholder={label} name={name} type={type} />
    </StyledAuthInput>
  );
};

export default AuthInput;
