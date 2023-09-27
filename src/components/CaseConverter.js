import React from "react";
import { useState } from "react";

const CaseConverter = (props) => {
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    if (text == "") {
      props.showAlert({
        messege: "First Enter Some Text",
        color: "white",
        bg: "red-800",
      });
    } else {
      const UpCase = text.toUpperCase();
      setText(UpCase);
      props.showAlert({
        messege: "Converted to Uppercase",
        color: "blue-800",
        bg: "blue-50",
      });
    }
  };

  const handleLowerCase = () => {
    if (text == "") {
      props.showAlert({
        messege: "First Enter Some Text",
        color: "white",
        bg: "red-800",
      });
    } else {
      const UpCase = text.toLowerCase();
      setText(UpCase);
      props.showAlert({
        messege: "Converted to Lowercase",
        color: "blue-800",
        bg: "blue-50",
      });
    }
  };

  const handleDelete = () => {
    if (text == "") {
      props.showAlert({
        messege: "First Enter Some Text",
        color: "white",
        bg: "red-800",
      });
    } else {
      setText("");
      props.showAlert({
        messege: "Text Deleted",
        color: "blue-800",
        bg: "blue-50",
      });
    }
  };

  const handleOnchange = (e) => {
    console.log("Onchange");
    setText(e.target.value);
  };

  const handleCopyText = () => {
    if (text == "") {
      props.showAlert({
        messege: "First Enter Some Text",
        color: "white",
        bg: "red-800",
      });
    } else {
      let text = document.getElementById("textArea");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert({
        messege: "Text Copied",
        color: "blue-800",
        bg: "blue-50",
      });
    }
  };

  const handleRemoveSpaces = () => {
    if (text == "") {
      props.showAlert({
        messege: "First Enter Some Text",
        color: "white",
        bg: "red-800",
      });
    } else {
      let text = document.getElementById("textArea");
      text.value = text.value.replace(/\s+/g, " ");
      props.showAlert({
        messege: "Extra Spaces Removed",
        color: "blue-800",
        bg: "blue-50",
      });
    }
  };

  const [mode, setMode] = useState("gray-300");
  const [mode1, setMode1] = useState("Enable Dark Mode");

  let modeConverter = () => {
    if (mode === "gray-300") {
      setMode("black");
      setMode1("Enable Light Mode");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      props.showAlert({
        messege: "Dark Mode Enabled",
        color: "white",
        bg: "red-800",
      });
    } else {
      setMode("gray-300");
      setMode1("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      props.showAlert({
        messege: "Light Mode Enabled",
        color: "blue-800",
        bg: "blue-50",
      });
    }
  };
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const characterCount = text.replace(/\s/g, "").length;
  return (
    <div className="App">
      <div className={`flex justify-between px-10 py-4 bg-${mode}`}>
        <h1
          className={`text-3xl font-semibold ${
            mode === "gray-300" ? "black" : "text-white"
          }`}
        >
          Navbar
        </h1>
        <div className="flex items-center">
          <input
            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-blue-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            type="checkbox"
            onClick={modeConverter}
          />
          <h1
            className={`text-xl font-semibold ${
              mode === "gray-300" ? "black" : "text-white"
            }`}
          >
            {mode1}
          </h1>
        </div>
      </div>

      <div className="w-1/2 mx-auto mt-10 mb-4 border border-gray-200 rounded-lg bg-gray-50">
        <div className="px-4 py-2 bg-white rounded-t-lg">
          <textarea
            value={text}
            rows="4"
            onChange={handleOnchange}
            className="w-full outline-0 px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0"
            required
            id="textArea"
          ></textarea>
        </div>
        <div className="flex items-center justify-around px-3 py-2 border-t">
          <button
            onClick={handleUpperCase}
            className="py-2.5 px-4 text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
          >
            To UpperCase
          </button>
          <button
            onClick={handleLowerCase}
            className="py-2.5 px-4 text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
          >
            To LowerCase
          </button>
          <button
            onClick={handleDelete}
            className="py-2.5 px-4 text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
          >
            Delete
          </button>
          <button
            onClick={handleCopyText}
            className="py-2.5 px-4 text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
          >
            Copy Text
          </button>
          <button
            onClick={handleRemoveSpaces}
            className="py-2.5 px-4 text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
          >
            Remove Spaces
          </button>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <h1 className="text-4xl font-semibold">Text Summary</h1>
        <p>
          {text.split(" ").filter((e)=>e.length!=0).length} words and {text.length} characters
        </p>
        <p>
          {wordCount} words and {characterCount} characters
        </p>
        <p>
          The time to read these words will be {text.split(" ").filter((e)=>e.length!=0).length * 0.008}{" "}
          mins
        </p>
      </div>
    </div>
  );
};

export default CaseConverter;
