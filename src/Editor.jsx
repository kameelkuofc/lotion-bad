import React, { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Editor({edit}) {
  var { noteid } = useParams();
  const [value, setValue] = useState(""); //useState function for Quill editor
  var date = new Date(); //get the current date and time 
  var date_timeNow = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().slice(0, 19); //fix the time and date to correct time zone and get the needed part
  const [defaultDate, setDate] = useState(date_timeNow); //useState for setting default date and time and setting user input date and time
  var input = document.getElementById("justLoadedDate"); //input to date_time useState to take in user inputted value

  const [title, givenTitle] = useState('');
  return (
    <>
      <div id="editorBar">
        <div id="title_date">
          <input type="text" placeholder="Untitled" id="noteTitle" />
          <div id="date">
            <input type="datetime-local" id="loadedDate" defaultValue={defaultDate} onChange={() => setDate(input)}/>
          </div>
        </div>
        <button className="buttons" id="save_editButton">
          Save
        </button>
        <button className="buttons" id="deleteButton">
          Delete
        </button>
      </div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Your Note Here"
      />
    </>
  );
}
export default Editor;
