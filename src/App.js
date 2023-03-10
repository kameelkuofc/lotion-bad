import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Editor from "./Editor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/">
            <Route path="/notes">
                <Route path="/notes/:noteid" element={<Editor edit={false} />}/>
                <Route path="/notes/:noteid/edit" element={<Editor edit={true} />}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
};

export default App;
