import React from 'react'
import "./errorComponent.css"


function ErrorComponent() {
    
    function refreshPage() {
      window.location.reload(false);
    }
  return (
    <div className="error__page">
        
      
      <div className="error__message">There have been problems loading this page. We are sorry for the inconvenience.<br/>Please reload this page.</div>
      
      <button onClick={refreshPage}>RELOAD</button>
      
    </div>
  )
}
export default ErrorComponent
