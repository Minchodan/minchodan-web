const enterKeydownListener = (event, handleOnSubmit) => {
  if (event.code === "Enter" || event.code === "NumpadEnter") {
    handleOnSubmit();
  }
};

export default { enterKeydownListener };
