import React, { useEffect } from "react";
import styled from "styled-components";

import { useSignUp } from "../hooks/useSignUp";
import { backgroundImgTwo } from "../assets/images";
import utils from "../utils/index";

const Background = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImgTwo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

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

  const handleOnSubmit = () => {
    console.log("Enter key 클릭됨.");
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) =>
      utils.enterKeydownListener(e, handleOnSubmit)
    );
    return () => {
      document.removeEventListener("keydown", (e) =>
        utils.enterKeydownListener(e, handleOnSubmit)
      );
    };
  }, []);

  return (
    <Background>
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
    </Background>
  );
}

export default SignUp;
