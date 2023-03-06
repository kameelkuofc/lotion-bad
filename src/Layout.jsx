import React, { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


function Layout() {
  const click = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
  }

  // const switchEdit = () => {
  //   document.getElementById("editor").replaceWith("editorInEditor");
  // }

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
        <div id="sidebar"><Sidebar /></div>
        <div id="editor">
          Select a note or create a new one.
          <Outlet />
          </div>
      </div>
    </section>
    </>
  );
}
export default Layout;
