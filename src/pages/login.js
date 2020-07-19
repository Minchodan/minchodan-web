import React, { useEffect } from "react";
import styled from "styled-components";

import useInput from "../hooks/useInput";
import { useUser } from "../hooks/useUser";
import { backgroundImgOne } from "../assets/images";
import utils from "../utils/index";

const Background = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImgOne});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const SignUpBox = styled.div`
  display: flex;
  ${({ theme }) => theme.media.desktop`
    ${() => `
      width: 600px;
    `};
  `};
  ${({ theme }) => theme.media.tablet`
    ${() => `
      width: 600px;
    `};
  `};
  ${({ theme }) => theme.media.mobile`
    ${() => `
      width: 100%;
    `};
  `};
  height: 300px;
  background-color: #4e484a;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const InputBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const BigTitle = styled.span`
  font-weight: 600;
  text-align: center;
  color: #9d9b9c;
  ${({ theme }) => theme.media.desktop`
    ${() => `
      font-size: 50px;
    `}
  `};
  ${({ theme }) => theme.media.tablet`
    ${() => `
      font-size: 50px;
    `}
  `};
  ${({ theme }) => theme.media.mobile`
    ${() => `
      font-size: 40px;
    `}
  `};
`;

const Title = styled.span`
  flex: 1;
  color: #9d9b9c;
  font-weight: 500;
  text-align: right;
  margin-right: 20px;
  ${({ theme }) => theme.media.desktop`
    ${() => `
      font-size: 35px;
    `};
  `};
  ${({ theme }) => theme.media.tablet`
    ${() => `
      font-size: 35px;
    `};
  `};
  ${({ theme }) => theme.media.mobile`
    ${() => `
      font-size: 25px;
    `};
  `};
`;

const Input = styled.input`
  flex: 2;
  width: 100%;
  color: #9d9b9c;
  font-size: 35px;
`;

function Index() {
  const [id, setId] = useInput("");
  const [password, setPassword] = useInput("");

  const { isLoggedIn, token, onInitialize } = useUser();

  console.log({ isLoggedIn, token });

  const handleOnSubmit = () => {
    console.log("Enter key 눌름 .");
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
        <BigTitle>로그인</BigTitle>
        <InputBox>
          <Title>아이디</Title>
          <Input value={id} onChange={(e) => setId(e)} maxLength={20} />
        </InputBox>
        <InputBox>
          <Title>비밀번호</Title>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e)}
            maxLength={20}
          />
        </InputBox>
      </SignUpBox>
    </Background>
  );
}

export default Index;
