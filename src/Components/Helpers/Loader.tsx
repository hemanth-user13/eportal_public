import React from "react";
import "./loader.css";

interface LoadserProps{
    fullLoader:boolean;
    height:string;
    isBackground:boolean
}

const SimpleLoader:React.FC<LoadserProps>= ({ fullLoader, height, isBackground }) => {
  const containerClass = `d-flex flex-row align-items-center justify-content-center p-10 ${fullLoader ? 'spinner-centre' : ''} ${isBackground ? 'loaderBg' : ''}`;
  const spinnerClass = `spinner-grow text-primary ${fullLoader ? 'spinner-size-md' : 'spinner-size-sm'}`;

  return (
    <div style={{ minHeight: height }} className={containerClass}>
      <div className={spinnerClass} role="status">
        <span className="sr-only"></span>
      </div>
      <div className={spinnerClass} role="status">
        <span className="sr-only"></span>
      </div>
      <div className={spinnerClass} role="status">
        <span className="sr-only"></span>
      </div>
      <div className={spinnerClass} role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default SimpleLoader;