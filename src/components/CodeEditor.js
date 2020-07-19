import React, { useState, useEffect, useCallback } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { useSelector, useDispatch } from "react-redux";
import { SET_STATE, INITIALIZE_ARRAY } from "../store/modules/stage";

function CodeEditor({ width }) {
  const button = useSelector((state) => state.stage.button);

  const [code, setCode] = useState("");

  const level = useSelector((state) => state.stage.level);

  const dispatch = useDispatch();

  const onInitialize = useCallback(() => dispatch({ type: INITIALIZE_ARRAY }), [
    dispatch,
  ]);
  const onSetState = useCallback(
    ({ key, value }) => dispatch({ type: SET_STATE, key, value }),
    [dispatch]
  );

  const handleOnClickButton = (item) => {
    if (item.onClickType === "NEXT_LEVEL") {
      onInitialize();
      onSetState({ key: "level", value: level + 1 });
    } else if (item.onClickType === "CONFIRM_ANSWER") {
      let trimCode = code.replace(/\s+/, "");
      trimCode = code.replace(/\s+$/g, "");
      trimCode = code.replace(/\n/g, "");
      trimCode = code.replace(/\r/g, "");
      trimCode = code.replace(/(\r\n\t|\n|\r\t)/gm, "");

      if (trimCode.length < 1) {
        return alert(
          "코드 창에 알맞은 코드를 입력하신 후 확인 버튼을 클릭해주세요."
        );
      }

      if (trimCode !== item.userAnswer) {
        return alert("올바른 코드가 아닙니다. 다시 입력해주시기 바랍니다.");
      }

      alert(item.correctAnswer);
      setCode(item.correctAnswer);
      onInitialize();
      onSetState({ key: "level", value: level + 1 });
    } else if (item.onClickType === "SET_CODE") {
      onInitialize();
      setCode(item.code);
      onSetState({ key: "level", value: level + 1 });
    }
  };

  return (
    <>
      <AceEditor
        mode="python"
        theme="monokai"
        value={code}
        onChange={(value) => {
          console.log({ value });
          setCode(value);
        }}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        style={{ width }}
        width={width}
        // height={"100%"}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: true,
          showGutter: true,
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        {button.map((item) => {
          console.log({ item });
          return (
            <button
              style={{
                border: "1px solid white",
                borderRadius: 20,
                padding: 20,
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => handleOnClickButton(item)}
            >
              {item.msg}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default CodeEditor;
