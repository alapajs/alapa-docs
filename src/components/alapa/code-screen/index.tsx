import React, { useState } from "react";
import "../preview-window/style.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const PreviewScreen = ({ children, title }) => {
  const [copyFeedback, setCopyFeedback] = useState("");

  const handleCopyClick = () => {
    if (title) {
      navigator.clipboard.writeText(title).then(() => {
        setCopyFeedback("Copied!");
        setTimeout(() => setCopyFeedback(""), 1500); // Clear feedback after 1.5 seconds
      });
    }
  };

  return (
    <>
      <ReactTooltip id="my-tooltip-2" place="bottom" content="Click to copy" />
      <div className="preview-screen">
        <div className="preview-screen-header">
          <div className="header-left">
            <div className="apple-btn apple-close"></div>
            <div className="apple-btn apple-minimize"></div>
            <div className="apple-btn apple-maximize"></div>
          </div>
          <div
            data-tooltip-id="my-tooltip-2"
            className="header-title"
            onClick={handleCopyClick}
          >
            {title || "untitled"}
            {copyFeedback && (
              <span className="copy-feedback">{copyFeedback}</span>
            )}
          </div>
          <div className="header-right">
            <div className="hamburger-menu">
              <div className="hamburger"></div>
              <div className="hamburger"></div>
              <div className="hamburger"></div>
            </div>
          </div>
        </div>
        <div className="preview-container">
          <div className="preview-content">{children}</div>
        </div>
      </div>
    </>
  );
};

export default PreviewScreen;
