import React from "react";
import "../preview-window/style.css";

const BrowserWindow = ({
  children,
  title,
  src,
}: {
  children: any;
  title: string;
  src: boolean;
}) => {
  title = title || "";
  if (title?.startsWith("/")) {
    title = title.substring(1);
  }
  let link = `http://localhost:3000/${title}`;

  return (
    <>
      {!src ? (
        <div>
          When you open the link the{" "}
          <a target="_blank" href={link}>
            {link}
          </a>{" "}
          on your browser, you should see the result as shown below.
        </div>
      ) : (
        <div>
          When you view the source code of{" "}
          <a target="_blank" href={link}>
            {link}
          </a>{" "}
          on your browser, you should see the result as shown below.
        </div>
      )}

      <div className="preview-screen">
        <div className="preview-screen-header">
          <div className="header-left">
            <div className="apple-btn apple-close"></div>
            <div className="apple-btn apple-minimize"></div>
            <div className="apple-btn apple-maximize"></div>
          </div>
          <div className="header-title">
            {src ? "view-source:" + link : link}
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

export default BrowserWindow;
