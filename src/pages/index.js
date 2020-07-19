import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { backgroundImgOne } from "../assets/images";

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

const Box = styled.div`
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

const StartButton = styled.span`
  font-weight: 600;
  text-align: center;
  color: #9d9b9c;
  cursor: pointer;
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

function Index() {
  return (
    <Background>
      <Box>
        <Link href="/stage">
          <StartButton>게임 시작하기</StartButton>
        </Link>
      </Box>
    </Background>
  );
}

export default Index;
