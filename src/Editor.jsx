import React, { useState } from 'react';
import { Outlet, useOutletContext } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor() {
  const [value, setValue] = useState('');
  const date_timeNow = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
};

const formatDate = (when) => {
    const formatted = new Date(when).toLocaleString("en-US", options);
    if (formatted === "Invalid Date") {
        return "";
    }
    return formatted;
};
 
  return (
    <>
      <div id="editorBar">
      <div id="title_date">
        <input placeholder="Untitled" id="noteTitle"/>
        <div id="date">
        <input type="datetime-local" placeholder={date_timeNow} />
        </div>
      </div>
      <button className="buttons" id="save_editButton">Save</button>
      <button className="buttons" id="deleteButton">Delete</button>
    </div>
    <ReactQuill theme="snow" value={value} onChange={setValue} placeholder="Your Note Here" />
    </>
  
  );
}
export default Editor;