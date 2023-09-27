import React, { useState, useEffect } from "react";
const Calculator = () => {
  const [input, setInput] = useState("");

  // Function to handle key presses
  const handleKeyPress = (e) => {
    const keyValue = e.key;

    if (keyValue === "Backspace") {
      // Handle Backspace key to delete the last character
      setInput((prevInput) => prevInput.slice(0, -1));
    } else if (/[\d.+\-*/%]/.test(keyValue)) {
      setInput((prevInput) => prevInput + keyValue);
    } else if (keyValue === "Enter") {
      resultHandler();
    } else if (keyValue === "Escape") {
      clearHandler();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const getValue = (e) => {
    setInput(input + e.target.value);
  };

  const resultHandler = () => {
    try {
      setInput(eval(input));
    } catch (error) {
      setInput("Error");
    }
  };

  const clearHandler = () => {
    setInput("");
  };

  const delHandler = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="my-5 bg-gray-400 w-96 py-12 mx-auto mt-6 rounded-2xl">
      <div className="flex justify-center">
        <h1 className="text-4xl">CALCULATOR</h1>
      </div>
      <div className="">
        <div className="flex justify-center my-5">
          <input
            type="text"
            id="display"
            className="mt-6 border-2 border-black px-5 w-72 py-2 rounded-lg outline-none text-right"
            value={input}
          />
        </div>
        <div className="mt-6">
          <div className="flex justify-center space-x-3 mt-3">
            <input
              onClick={clearHandler}
              className="bg-gray-300 border border-black w-16 h-12 text-center caret-transparent outline-0 cursor-pointer"
              value="C"
            />
            <input
              onClick={getValue}
              className="bg-gray-300 border border-black w-16 h-12 text-center caret-transparent outline-0 cursor-pointer"
              value="%"
            />
            <input
              onClick={delHandler}
              className="bg-gray-300 border border-black w-16 h-12 text-center caret-transparent outline-0 cursor-pointer"
              value="Del"
            />
            <input
              className="bg-gray-300 border border-black w-16 h-12 text-center caret-transparent outline-0 cursor-pointer"
              value="M-"
            />
          </div>
          <div className="flex justify-center space-x-3 mt-3">
            <input
              onClick={getValue}
              className="bg-gray-300 border border-black w-16 h-12 text-center caret-transparent outline-0 cursor-pointer"
              value="7"
            />
            <input
              onClick={getValue}
              className="bg-gray-300 border border-black w-16 h-12 text-center caret-transparent outline-0 cursor-pointer"
              value="8"
            />
            <input
              onClick={getValue}
              className="bg-gray-300 border border-black w-16 h-12 text-center caret-transparent outline-0 cursor-pointer"
              value="9"
            />
            <input
              onClick={getValue}
              className="bg-gray-300 border border-black w-16 h-12 text-center caret-transparent outline-0 cursor-pointer"
              value="*"
            />
          </div>
          <div className="flex justify-center space-x-3 mt-3">
            <input
              onClick={getValue}
              className="bg-gray-300 border border-black w-16 h-12 text-center caret-transparent outline-0 cursor-pointer"
              value="4"
            />
            <input
              onClick={getValue}
              className="bg-gray-300 border border-black w-16 h-12 text-center caret-transparent outline-0 cursor-pointer"
              value="5"
            />
            <input
              onClick={getValue}
              className="bg-gray-300 border border-black w-16 h-12 text-center caret-transparent outline-0 cursor-pointer"
              value="6"
            />
            <input
              onClick={getValue}
              className="bg-gray-300 border border-black w-16 h-12 text-center caret-transparent outline-0 cursor-pointer"
              value="/"
            />
          </div>
          <div className="flex justify-center space-x-3 mt-3">
            <input
              onClick={getValue}
              className="bg-gray-300 border border-black w-16 h-12 text-center caret-transparent outline-0 cursor-pointer"
              value="1"
            />
            <input
              onClick={getValue}
              className="bg-gray-300 border border-black w-16 h-12 text-center caret-transparent outline-0 cursor-pointer"
              value="2"
            />
            <input
              onClick={getValue}
              className="bg-gray-300 border border-black w-16 h-12 text-center caret-transparent outline-0 cursor-pointer"
              value="3"
            />
            <input
              onClick={getValue}
              className="bg-gray-300 border border-black w-16 h-12 text-center caret-transparent outline-0 cursor-pointer"
              value="+"
            />
          </div>
          <div className="flex justify-center space-x-3 mt-3">
            <input
              onClick={getValue}
              className="bg-gray-300 border border-black w-16 h-12 text-center caret-transparent outline-0 cursor-pointer"
              value="0"
            />
            <input
              onClick={getValue}
              className="bg-gray-300 border border-black w-16 h-12 text-center caret-transparent outline-0 cursor-pointer"
              value="."
            />
            <input
              onClick={resultHandler}
              className="bg-gray-300 border border-black w-16 h-12 text-center caret-transparent outline-0 cursor-pointer"
              value="="
            />
            <input
              onClick={getValue}
              className="bg-gray-300 border border-black w-16 h-12 text-center caret-transparent outline-0 cursor-pointer"
              value="-"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
