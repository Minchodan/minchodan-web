import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

function CodeEditor() {
  const [code, setCode] = useState("");

  const [state, setState] = useState({ width: 0 });

  const init = () => {
    setState((prevState) => {
      return {
        ...prevState,
        width: window.innerWidth / 3,
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
    <AceEditor
      mode="javascript"
      theme="monokai"
      onChange={(value) => {
        console.log({ value });
        setCode(value);
      }}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      style={{ width: state.width, height: "100%" }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showGutter: true,
      }}
    />
  );
}

export default CodeEditor;
