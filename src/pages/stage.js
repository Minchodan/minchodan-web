import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Typical from "react-typical";

import {
  backgroundImgOne,
  teacherImg,
  boyImg,
  girlImg,
} from "../assets/images";
import CodeEditor from "../components/CodeEditor";
import {
  INITIALIZE,
  ADD_ARRAY,
  INITIALIZE_ARRAY,
} from "../store/modules/stage";

const Background = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImgOne});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const MessageBox = styled.div`
  background-color: #2d2d2c;
  flex: 1;
  height: 100%;
`;

const EditorBox = styled.div`
  background-color: #2d2d2c;
  flex: 1;
  height: 100%;
`;

const DescriptionBox = styled.div`
  flex: 1;
  height: 100%;
`;

function Stage() {
  const [state, setState] = useState({
    boxWidth: 0,
    memoListHeight: 0,
    bottomSwiper: { maxHeight: 0 },
  });

  const level = useSelector((state) => state.stage.level);
  const story = useSelector((state) => state.stage.story);
  const message = useSelector((state) => state.stage.message);
  const description = useSelector((state) => state.stage.description);

  const dispatch = useDispatch();

  const onInitialize = useCallback(() => dispatch({ type: INITIALIZE }), [
    dispatch,
  ]);
  const onInitializeArray = useCallback(
    () => dispatch({ type: INITIALIZE_ARRAY }),
    [dispatch]
  );
  const onAddArray = useCallback(
    ({ key, value }) => dispatch({ type: ADD_ARRAY, key, value }),
    [dispatch]
  );

  console.log({ level, story });

  const init = () => {
    setState((prevState) => {
      return {
        ...prevState,
        boxWidth: window.innerWidth / 3,
        memoListHeight: window.innerHeight - 170,
        bottomSwiper: {
          maxHeight: window.innerHeight - 50,
        },
      };
    });
  };

  useEffect(() => {
    init();

    window.addEventListener("resize", init);
    return () => {
      window.addEventListener("resize", init);
    };
  }, []);

  const preLoad = async () => {
    onInitialize;
    for (let i = 0, len = story.length; i < len; i++) {
      if (story[i].level === level) {
        if (story[i].type === "message") {
          onAddArray({ key: "message", value: story[i] });
          await delay({ time: story[i].time });
        } else if (story[i].type === "description") {
          onAddArray({ key: "description", value: story[i] });
          await delay({ time: story[i].time });
        } else if (story[i].type === "button") {
          onAddArray({ key: "button", value: story[i] });
          await delay({ time: story[i].time });
        }
      }
    }
  };

  useEffect(() => {
    onInitializeArray();
    preLoad();
  }, [level]);

  return (
    <>
      <Background>
        <MessageBox>
          {message.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 20,
                  borderBottom: "1px solid #2E3129",
                  color: "white",
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
        </MessageBox>
        <EditorBox>
          <CodeEditor width={state.boxWidth} />
        </EditorBox>
        <DescriptionBox>
          {description.map((item) => {
            return (
              <div style={{ color: "white", padding: 20 }}>
                <Typical steps={[item.msg, item.time]} loop={1} wrapper="p" />
              </div>
            );
          })}
        </DescriptionBox>
      </Background>
    </>
  );
}

export default Stage;

function delay({ time }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

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
