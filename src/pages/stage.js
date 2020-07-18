import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import { backgroundImgOne, backgroundImgThree } from "../assets/images";
import BottomSwiper from "../components/BottomSwiper";
import CodeEditor from "../components/CodeEditor";

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

const MemoBox = styled.div`
  background-color: #969475;
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

const HorizonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

const BigText = styled.span`
  font-size: 35px;
  font-weight: 600;
  color: white;
`;

const AddButton = styled.button`
  font-size: 30px;
  border: 2px solid black;
  padding-left: 9px;
  padding-right: 9px;
  border-radius: 20px;
  color: black;
  background-color: yellow;
  cursor: pointer;
`;

const TextInput = styled.textarea`
  border-color: transparent;
  border: 1px solid black;
  width: 100%;
  font-size: 20px;
  padding: 20px;
  height: 60px;
  background-color: #969475;
  resize: none;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const MemoList = styled.div`
  overflow: scroll;
  height: ${(props) => `${props.height}px`};
`;

const Memo = styled.textarea`
  display: flex;
  border-color: transparent;
  resize: none;
  min-height: 100px;
  align-items: center;
  font-size: 20px;
  padding-left: 10px;
  margin-bottom: 10px;
  width: 100%;
  background-color: #969475;
  cursor: inherit;
`;

function Stage() {
  const [code, setCode] = useState("");

  const [memo, setMemo] = useState("");
  const [memoList, setMemoList] = useState([]);

  const [state, setState] = useState({ memoListHeight: 0 });

  const handleOnAdd = () => {
    setMemo("");
    setMemoList((prev) => {
      return [memo, ...prev];
    });
  };

  const init = () => {
    setState((prevState) => {
      return {
        ...prevState,
        memoListHeight: window.innerHeight - 170,
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

  return (
    <>
      <Background>
        <MemoBox>
          <HorizonBox>
            <BigText>MEMO</BigText>
            <AddButton onClick={handleOnAdd}>+</AddButton>
          </HorizonBox>
          <TextInput
            type="text"
            value={memo}
            onChange={(v) => {
              setMemo(v.target.value);
            }}
          />
          <MemoList height={state.memoListHeight}>
            {memoList.map((item, index) => {
              console.log({ item });
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  <Memo readOnly={true} value={item} />
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setMemoList((prevState) => {
                        const result = prevState.filter(
                          (prevItem, prevIndex) => {
                            if (prevIndex !== index) {
                              return prevItem;
                            }
                          }
                        );

                        return [...result];
                      });
                    }}
                  >
                    ❌
                  </button>
                </div>
              );
            })}
          </MemoList>
          <BottomSwiper />
        </MemoBox>
        <EditorBox>
          <CodeEditor />
        </EditorBox>
        <DescriptionBox>3</DescriptionBox>
      </Background>
    </>
  );
}

export default Stage;
