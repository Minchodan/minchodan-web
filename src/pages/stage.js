import React from "react";
import styled from "styled-components";

import { backgroundImgOne, backgroundImgThree } from "../assets/images";

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

function Stage() {
  return <Background>stage</Background>;
}

export default Stage;
