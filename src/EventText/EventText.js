import TextareaAutosize from "react-textarea-autosize";
import s from "./EventText.module.css";

const EventText = ({ text, setNewText, readonly }) => {
  const onChangeTextHandle = (e) => {
    const newText = e.currentTarget.value;
    setNewText(newText);
  };

  return (
    <div>
      <TextareaAutosize
        value={text}
        onChange={readonly ? () => {} : (e) => onChangeTextHandle(e)}
        maxRows={15}
        minRows={5}
        className={s.text}
        readOnly={readonly}
        placeholder="Любой текст..."
      />
    </div>
  );
};

export default EventText;
