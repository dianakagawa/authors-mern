import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./views/MainView";
import CreateView from "./views/CreateView";
import UpdateView from "./views/UpdateView";
import ErrorView from "./views/ErrorView";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/new" element={<CreateView />} />
          <Route path="/edit/:id" element={<UpdateView />} />
          <Route path="/:id" element={<ErrorView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
