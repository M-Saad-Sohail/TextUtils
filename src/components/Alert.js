import React from "react";

export default function Alert(props) {
  return (
    props.alert && (
      <div
        className={`p-4 mb-4 text-sm text-${props.alert.color} bg-${props.alert.bg} rounded-lg`}
      >
        <span className="font-medium">{props.alert.msg}</span>
      </div>
    )
    //  <div
    //   className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50"
    //   role="alert"
    // >
    //   <span className="font-medium">Good</span> Change a few things up and
    //   try submitting again.
    // </div>
  );
}
