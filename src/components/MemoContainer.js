import React, { useState } from "react";
import styled from "styled-components";

const MemoBox = styled.div`
  background-color: #969475;
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
  margin-top: 20px;
`;

const MemoList = styled.div`
  overflow: scroll;
  height: ${(props) => `${props.height}px`};
`;

const MemoItemBox = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: black;
`;

const MemoItem = styled.textarea`
  display: flex;
  border-color: transparent;
  resize: none;
  min-height: 100px;
  align-items: center;
  font-size: 20px;
  padding-left: 10px;
  width: 100%;
  background-color: #969475;
  cursor: inherit;
`;

function MemoContainer({ memoListHeight }) {
  const [memo, setMemo] = useState("");
  const [memoList, setMemoList] = useState([]);

  const handleOnAdd = () => {
    if (memo.length < 1) {
      return;
    }

    setMemo("");
    setMemoList((prev) => {
      return [memo, ...prev];
    });
  };
  return (
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
      <MemoList height={memoListHeight}>
        {memoList.map((item, index) => {
          console.log({ item });
          return (
            <MemoItemBox>
              <MemoItem readOnly={true} value={item} />
              <button
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setMemoList((prevState) => {
                    const result = prevState.filter((prevItem, prevIndex) => {
                      if (prevIndex !== index) {
                        return prevItem;
                      }
                    });

                    return [...result];
                  });
                }}
              >
                ❌
              </button>
            </MemoItemBox>
          );
        })}
      </MemoList>
    </MemoBox>
  );
}

export default MemoContainer;
