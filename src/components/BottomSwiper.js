import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  flex-direction: column;
  justify-content: flex-end;
  width: ${(props) => `${props.width}px`};
`;

const Slide = styled.div``;

const Slider = styled.div``;

const UpButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #7e878e;
  color: white;
  font-size: 20px;
`;

const List = styled.div`
  overflow: scroll;
  background-color: #7993a3;
  height: 100%;
`;

let timer = null;

function BottomSwiper() {
  const [state, setState] = useState({
    isToggled: false,
    time: 300,
    minHeight: 0,
    maxHeight: 0,
    containerWidth: 0,
  });

  const handleToggle = () => {
    const slider = document.getElementById("slider");

    clearInterval(timer);
    const instanceheight = parseInt(slider.style.height);
    const init = new Date().getTime();
    const height = state.isToggled ? state.maxHeight : state.minHeight;

    const disp = height - parseInt(slider.style.height);
    timer = setInterval(() => {
      const instance = new Date().getTime() - init;
      if (instance <= state.time) {
        const pos = instanceheight + Math.floor((disp * instance) / state.time);
        slider.style.height = pos + "px";
      } else {
        slider.style.height = height + "px";
        clearInterval(timer);
      }
    }, 1);
  };

  const handleOnClick = () => {
    setState((prevState) => {
      return {
        ...prevState,
        isToggled: !prevState.isToggled,
      };
    });
  };

  const init = () => {
    setState((prevState) => {
      return {
        ...prevState,
        maxHeight: window.innerHeight - 50,
        containerWidth: window.innerWidth / 3,
      };
    });
  };

  useEffect(() => {
    handleToggle();
  }, [state.isToggled]);

  useEffect(() => {
    init();

    window.addEventListener("resize", init);
    return () => {
      window.addEventListener("resize", init);
    };
  }, []);

  return (
    <Container width={state.containerWidth}>
      <Slide id="slide">
        <UpButton onClick={handleOnClick}>⬆</UpButton>
        <Slider id="slider">
          <List></List>
        </Slider>
      </Slide>
    </Container>
  );
}

export default BottomSwiper;
