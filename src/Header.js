import React from "react";
import "./Header.css";

export default function Header({ score }) {
    return (
        <header className="header">
          <h1 className="header-title">WarsawJS Workshop #55 React</h1>
          <div className="header-stats">
            <div className="header-stats-cell">Score: {score}</div>
          </div>
        </header>
    );
}