import React from "react";
import "./style.css";

const CodeScreen = ({ children, title }) => {
  return (
    <div className="code-screen">
      <div className="code-screen-header">
        <div className="header-left">
          <div className="apple-btn apple-close"></div>
          <div className="apple-btn apple-minimize"></div>
          <div className="apple-btn apple-maximize"></div>
        </div>
        <div className="header-title">{title}</div>
        <div className="header-right">
          <div className="hamburger-menu">
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
          </div>
        </div>
      </div>
      <div className="code-editor-container">
        <pre className="code-editor">{children}</pre>
      </div>
    </div>
  );
};

export default CodeScreen;
