import React from "react";
import styled from "styled-components";

import { useSignUp } from "../hooks/useSignUp";

const SignUpBox = styled.div`
  display: flex;
  width: 600px;
  height: 400px;
  background-color: #4e484a;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const InputBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BigTitle = styled.span`
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  color: #9d9b9c;
`;

const Title = styled.span`
  flex: 1;
  color: #9d9b9c;
  font-size: 35px;
  font-weight: 500;
  text-align: right;
  margin-right: 20px;
`;

const Input = styled.input`
  flex: 2;
  color: #9d9b9c;
  font-size: 35px;
`;

function SignUp() {
  const { id, password, name, onSetState } = useSignUp();

  return (
    <SignUpBox>
      <BigTitle>회원가입</BigTitle>
      <InputBox>
        <Title>아이디</Title>
        <Input
          value={id}
          onChange={(e) => onSetState({ key: "id", value: e.target.value })}
          maxLength={20}
        />
      </InputBox>
      <InputBox>
        <Title>비밀번호</Title>
        <Input
          type="password"
          value={password}
          onChange={(e) =>
            onSetState({ key: "password", value: e.target.value })
          }
          maxLength={20}
        />
      </InputBox>
      <InputBox>
        <Title>이름</Title>
        <Input
          value={name}
          onChange={(e) => onSetState({ key: "name", value: e.target.value })}
          maxLength={20}
        />
      </InputBox>
    </SignUpBox>
  );
}

export default SignUp;
