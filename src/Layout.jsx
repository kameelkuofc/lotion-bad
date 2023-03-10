import React, { useState, useRef, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { v4 as uuidv4 } from "uuid";
import Editor from "./Editor";

function Layout() {
  const click = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
  };

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  var date = new Date(); //get the current date and time
  var date_timeNow = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 19); //fix the time and date to correct time zone and get the needed part
  const [defaultDate, setDate] = useState(date_timeNow); //useState for setting default date and time and setting user input date and time
  var sideBar_date = date.toLocaleDateString("en-US", options);

  const goToPath = useNavigate();
  var [notes, setNotes] = useState([]);
  const createNewNote = () => {
    const noteInfo = {
      note_r_id: uuidv4(),
      note_title: "Untitled",
      note_body: " ",
      note_date: sideBar_date,
    };

    setNotes((notes = [noteInfo, ...notes]));
    console.log(notes);
  };
  var [clickNote, onClickNote] = useState(false);

  const toDelete = () => {
    deleteNote(clickNote);
  };
  
  const deleteNote = (deleteNoteID) => {
    const answer = window.confirm("Are you sure?");
    if (answer) {
      setNotes(notes.filter((noteInfo) => noteInfo.note_r_id !== deleteNoteID));
    }
  };

  const getClickNote = () => {
    return notes.find((noteInfo) => noteInfo.note_r_id === clickNote);
  };

  useEffect(() => {
    localStorage.setItem("notesArray", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const gottenNotes = JSON.parse(localStorage.getItem("notesArray"));
  }, []);

  return (
    <>
      <section>
        <nav className="topbar">
          <div id="left">
            <button onClick={click} className="buttons" id="menuButton">
              &#9776;
            </button>
          </div>
          <div id="middle">
            <h1 id="title">Lotion</h1>
            <h6 id="secondTitle">Like Notion, but worse.</h6>
          </div>
        </nav>

        <div id="page">
          <div id="sidebar">
            <Sidebar
              imp_Notes={notes}
              imp_CreateNewNote={createNewNote}
              imp_ClickNote={clickNote}
              imp_OnClickNote={onClickNote}
            />
          </div>
          <div id="editor">
            {notes.length === 0 ? (
              <div id="greetText">Select a note or create a new one</div>
            ) : (
              <Outlet
                defaultDate={defaultDate}
                setDate={setDate}
                getClickNote={getClickNote()}
                toDelete={toDelete}
              />
            )}
            {/* <div id="greetText">
          Select a note or create a new one.
        </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
export default Layout;
