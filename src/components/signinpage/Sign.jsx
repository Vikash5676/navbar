import React from "react";
import styled from "styled-components";
import AccountBox from "./AccountBox";

const Sign = () => {
  const AppContainer = styled.div`
    width: 85vw;

    background: rgb(93, 2, 83);
    background: linear-gradient(
      90deg,
      rgba(93, 2, 83, 1) 0%,
      rgba(255, 73, 193, 1) 45%,
      rgba(255, 255, 255, 1) 90%
    );
  `;
  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  );
};

export default Sign;
