import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Typical from "react-typical";
import { teacherImg, boyImg, girlImg } from "../assets/images";

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

const storyArr = [
  {
    kind: "T",
    msg: "5일 후 약속한 장소에서 보자꾸나",
    time: 2000,
  },
  {
    kind: "M",
    msg: "네 알겠습니다. 그때 뵐게요!",
    time: 2000,
  },
  {
    kind: null,
    msg: "4시간 전",
    time: 1000,
  },
  {
    kind: "T",
    msg: "사소한 문제가 생긴 것 같구나",
    time: 2000,
  },
  {
    kind: "T",
    msg: "만약 이 메시지를 보면 약속된 장소로 가지 말고",
    time: 2000,
  },
  {
    kind: "T",
    msg: "메시지에 첨부한 위치로 가거라",
    time: 2000,
  },
  {
    kind: "T",
    msg: "나 대신 널 도와줄 수 있는 괴짜 친구를 찾을 수 있을 거란다.",
    time: 3000,
  },
];

function BottomSwiper({ boxWidth, maxHeight }) {
  const [state, setState] = useState({
    isToggled: true,
    time: 300,
    minHeight: 0,
  });

  function delayMessage({ time }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }

  // const handleToggle = () => {
  //   const slider = document.getElementById("slider");

  //   clearInterval(timer);
  //   const instanceheight = parseInt(slider.style.height);
  //   const init = new Date().getTime();
  //   const height = state.isToggled ? maxHeight : state.minHeight;

  //   const disp = height - parseInt(slider.style.height);
  //   timer = setInterval(() => {
  //     const instance = new Date().getTime() - init;
  //     if (instance <= state.time) {
  //       const pos = instanceheight + Math.floor((disp * instance) / state.time);
  //       slider.style.height = pos + "px";
  //     } else {
  //       slider.style.height = height + "px";
  //       clearInterval(timer);
  //     }
  //   }, 1);
  // };

  // const handleOnClick = () => {
  //   setState((prevState) => {
  //     return {
  //       ...prevState,
  //       isToggled: !prevState.isToggled,
  //     };
  //   });
  // };

  // useEffect(() => {
  //   handleToggle();
  // }, [state.isToggled]);

  const [storyState, setStoryState] = useState([]);

  const asyncFunc = async () => {
    for (let i = 0, len = storyArr.length; i < len; i++) {
      setStoryState((prev) => [...prev, storyArr[i]]);
      await delayMessage({ time: storyArr[i].time });
    }
  };

  useEffect(() => {
    asyncFunc();
  }, []);

  return (
    <Container width={boxWidth}>
      <Slide id="slide">
        <UpButton>⬆</UpButton>
        <Slider id="slider">
          <List>
            {storyState.map((item) => {
              console.log({ item });
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 20,
                    borderBottom: "1px solid #2E3129",
                  }}
                >
                  {validImgByKind(item.kind) && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 10,
                      }}
                    >
                      <img
                        src={validImgByKind(item.kind)}
                        style={{
                          width: 50,
                          height: 50,
                          border: "1px solid #2E3129",
                          borderRadius: 30,
                          marginBottom: 10,
                        }}
                      />
                      <span>{validNameByKind(item.kind)}</span>
                    </div>
                  )}

                  <Typical steps={[item.msg, item.time]} loop={1} wrapper="p" />
                </div>
              );
            })}
          </List>
        </Slider>
      </Slide>
    </Container>
  );
}

export default BottomSwiper;

function validImgByKind(kind) {
  if (kind === "T") {
    return teacherImg;
  } else if (kind === "M") {
    return boyImg;
  } else if (kind === "F") {
    return girlImg;
  }

  return null;
}

function validNameByKind(kind) {
  if (kind === "T") {
    return "선생님";
  } else if (kind === "M") {
    return "나";
  } else if (kind === "F") {
    return "누구?";
  }

  return null;
}
