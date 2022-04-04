import React from "react";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      {/* Chat */}
      <Chat />
    </div>
  );
}

export default App;
