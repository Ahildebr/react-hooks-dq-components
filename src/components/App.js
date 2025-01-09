import React from "react";
import SideMenu from "./SideMenu";
import TopMenu from "./TopMenu"
import MainContent from "./MainContent";
import GenrePicker from "./GenrePicker";







function App() {
  return <div className="app-container">
    <SideMenu />
    <TopMenu />
    {/* ?<GenrePicker /> */}
    <MainContent />
  </div>;
}

export default App;
