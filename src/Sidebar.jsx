import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
function Sidebar () {
    const { noteid } = useParams();
    const navigate = useNavigate();
    const begin = () => {
        navigate('/notes/1/edit');
        var text = document.getElementById("greetText");
        document.getElementById("greetText").innerText = "";
        text.classList.toggle("hidden");
    };

    return (
        <>
        <div id="firstRow">
            <div id="notesTitle">Notes</div>
            <button onClick={begin} className="buttons" id="addNote">+</button>
        </div>
        </>
    );
}
export default Sidebar;