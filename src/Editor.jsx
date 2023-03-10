import React, { useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Editor(props) {

  var { noteid } = useParams();
  const [body, setBody] = useState(''); //useState function for Quill editor

  const [title, setTitle] = useState('');

  function updateNoteTitle (event) {
    setTitle(event.target.title);
  };

  function updateNoteBody (value) {
    setBody(value);
  };

  function updateDate (date){
    props.setDate(date.target.defaultDate);
  }


  return (
    <>
      <div id="editorBar">
        <div id="title_date" >
          <input type="text" defaultValue={title} onChange={updateNoteTitle} placeholder="Untitled" id="noteTitle" />
          <div id="date">
            <input type="datetime-local" id="loadedDate" defaultValue={props.defaultDate} onChange={updateDate}/>
          </div>
        </div>
        <button className="buttons" id="save_editButton">
          Save
        </button>
        <button onClick={props.toDelete} className="buttons" id="deleteButton">
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
