import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Toast />
    </div>
  );
}
const Toast = () => {
  const toastTypes = [
    "Show Toast",
    "Error Toast",
    "Success Toast",
    "Warning Toast"
  ];
  const [isToastSet, setToast] = useState(false);
  const [toastText, setToastText] = useState("");
  const [background, setBckground] = useState("");

  //onclicking hide button this becomes false
  const hideHandler = () => setToast(false);

  return (
    <div>
      {isToastSet ? (
        <ToastContainer
          text={toastText}
          hideCtrl={hideHandler}
          bgColor={background}
        />
      ) : (
        <></>
      )}
      {toastTypes.map((type, index) => (
        <button
          key={index}
          onClick={() => {
            setToastText({ type });
            console.log(type);
            setToast(true);
            if (type === "Show Toast") {
              setBckground("white");
              // console.log(background);
            } else if (type === "Error Toast") {
              setBckground("red");
              // console.log(background);
            } else if (type === "Success Toast") setBckground("green");
            else if (type === "Warning Toast") setBckground("orange");
          }}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

const ToastContainer = ({ text, hideCtrl, bgColor }) => {
  // console.log(text, bgColor); //{type: "Show Toast"}

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem",
        width: "60vw",
        margin: "1rem",
        background: `${bgColor}`
      }}
    >
      <div>It's an {text.type}</div>
      <button onClick={hideCtrl}>Hide</button>
    </div>
  );
};
