import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

function Sidebar({
  imp_Notes,
  imp_CreateNewNote,
  imp_ClickNote,
  imp_OnClickNote,
}) {
  var { noteid } = useParams();
  noteid = imp_Notes.indexOf(imp_ClickNote);
  const goto = useNavigate();

  return (
    <div>
      <div id="firstRow">
        <div id="notesTitle">Notes</div>
        <button onClick={imp_CreateNewNote} className="buttons" id="addNote">
          +
        </button>
      </div>

      <div id="notes">
        {imp_Notes.map((note) => (
          <div
            id={`individualNote${note.note_r_id === imp_ClickNote && "Active"}`}
            key={note.note_r_id}
            onClick={() => {
              imp_OnClickNote(note.note_r_id)
              goto(`/notes/${noteid}/edit`)
            }}
          >
            <div id="side_note_title">{note.note_title}</div>
            <div id="side_note_date">{note.note_date}</div>
            <p id="side_note_sum">
              {note.note_body && note.note_body.substr(0, 100) + "..."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Sidebar;
