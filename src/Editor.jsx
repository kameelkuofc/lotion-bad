import React, { useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Editor({edit}) {
  var [defaultDate, setDate, getClickNote, toDelete] = useOutletContext();

  var { noteid } = useParams();
  const [body, setBody] = useState(''); //useState function for Quill editor
  var input = document.getElementById("justLoadedDate"); //input to date_time useState to take in user inputted value

  const [title, setTitle] = useState('');

  const updateNoteTitle = (event) => {
    setTitle(event.target.title);
  };

  const updateNoteBody = (value) => {
    setBody(value);
  };

  return (
    <>
      <div id="editorBar">
        <div id="title_date" >
          <input type="text" defaultValue={title} onChange={updateNoteTitle} placeholder="Untitled" id="noteTitle" />
          <div id="date">
            <input type="datetime-local" id="loadedDate" defaultValue={defaultDate} onChange={() => setDate(input)}/>
          </div>
        </div>
        <button className="buttons" id="save_editButton">
          Save
        </button>
        <button onClick={toDelete} className="buttons" id="deleteButton">
          Delete
        </button>
      </div>
      <ReactQuill
        theme="snow"
        value={body}
        onChange={updateNoteBody}
        placeholder="Your Note Here"
      />
    </>
  );
}
export default Editor;
