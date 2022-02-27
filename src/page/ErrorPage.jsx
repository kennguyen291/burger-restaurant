import React from 'react'
import "./errorPage.css"
import { useNavigate } from "react-router-dom";

function ErrorPage() {
    const navigate = useNavigate();
  return (
    <div className="error__page">
        
      <h1>Prince's Theatre</h1>
      <div className="error__message">There have been problems loading this page. We are sorry for the inconvenience.<br/>Please reload this page.</div>
      
      <button onClick={() => navigate("/")}>RELOAD</button>
      
    </div>
  )
}
export default ErrorPage
