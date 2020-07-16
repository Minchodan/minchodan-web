import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;
